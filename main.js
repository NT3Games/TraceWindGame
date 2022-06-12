const FILES = ['nt3club_game.ink', 'extension_cuna.ink', 'extern_function.ink', 'episode_2.ink']

const COUNTER_URI = 'https://counter.nt3.games'

// compile from https://github.com/y-lohse/inkjs/blob/master/src/compiler/FileHandler/JsonFileHandler.ts
class JsonFileHandler {
    constructor(fileHierarchy) {
        this.fileHierarchy = fileHierarchy;
        this.ResolveInkFilename = (filename) => {
            if (Object.keys(this.fileHierarchy).includes(filename))
                return filename;
            throw new Error(`Cannot locate ${filename}. Are you trying a relative import ? This is not yet implemented.`);
        };
        this.LoadInkFileContents = (filename) => {
            if (Object.keys(this.fileHierarchy).includes(filename)) {
                return this.fileHierarchy[filename];
            }
            else {
                throw new Error(`Cannot open ${filename}.`);
            }
        };
    }
}

function CreateAudio() {
    let audio = undefined;

    function cancelAudio() {
        if (audio instanceof Audio) {
            audio.pause();
            audio.removeAttribute('src');
            audio.load();
        }
    }

    return (
        function applyAudio(appendProperties = {}) {
            cancelAudio();

            audio = new Audio();
            Object.assign(audio, appendProperties);
            audio.load();
            audio.play();
        }
    )
}

(async function () {
    let inks = {};

    for (const filename of FILES) {
        inks[filename] = await fetch(filename).then(res => res.text())
    }

    let options = new inkjs.CompilerOptions(null, [], false, null, new JsonFileHandler(inks))
    var story = new inkjs.Compiler(inks['nt3club_game.ink'], options).Compile();

    // migration
    try {
        let ending_str = window.localStorage.getItem('endings');
        if (ending_str != null) {
            let entries = new Set;
            let endings = JSON.parse(ending_str);
            for (let end of endings) {
                if (end == "yuki") {
                    entries.add("entry_bathing");
                } else if (end == "butterfly") {
                    entries.add("entry_fatty");
                }
            }
            window.localStorage.setItem('entries', JSON.stringify(Array.from(entries)))
            window.localStorage.removeItem('endings');
        }
    } catch (_) { }

    story.BindExternalFunction("console_log", function (text) {
        console.log(text)
    }, false);

    story.BindExternalFunction("get_entries", function () {
        try {
            let entries_json = window.localStorage.getItem('entries') || "[]";
            let set = new Set(JSON.parse(entries_json));
            let entries = new inkjs.InkList('medical_entries', story);
            set.forEach(entries.AddItem, entries);
            return entries;
        } catch (e) {
            console.debug("Couldn't load save state");
            return false;
        }
    }, false);

    story.BindExternalFunction("unlock_entries", function (name) {
        try {
            let unlock = new Set([...name.keys()].map(a => JSON.parse(a).itemName))
            let entries_json = window.localStorage.getItem('entries') || '[]';
            let entries = new Set(JSON.parse(entries_json));

            unlock.forEach(entries.add, entries); // merge
            window.localStorage.setItem('entries', JSON.stringify(Array.from(entries)))
        } catch (e) {
            console.debug("Couldn't load save state");
        }
    }, false);

    story.BindExternalFunction("clear_entries", function () {
        try {
            window.localStorage.setItem('entries', '[]')
        } catch (e) {
            console.debug("Couldn't load save state");
        }
    }, false);

    story.BindExternalFunction("increase_counter", function (name) {
        var request = new XMLHttpRequest();
        request.open('POST', COUNTER_URI + '/counter/' + name, true);
        request.send();
    }, false);

    story.BindExternalFunction("get_counter", function (name) {
        // since synchronous XHR has been deprecated in many browsers, this function should be rewrite
        var request = new XMLHttpRequest();
        request.open('GET', COUNTER_URI + '/counter/' + name, false);
        request.send();
        return parseInt(request.response);
    }, false);

    var savePoint = "";

    let savedTheme;
    let globalTagTheme;

    // Global tags - those at the top of the ink file
    // We support:
    //  # theme: dark
    //  # author: Your Name
    var globalTags = story.globalTags;
    if (globalTags) {
        for (var i = 0; i < story.globalTags.length; i++) {
            var globalTag = story.globalTags[i];
            var splitTag = splitPropertyTag(globalTag);

            // THEME: dark
            if (splitTag && splitTag.property == "theme") {
                globalTagTheme = splitTag.val;
            }

            // author: Your Name
            else if (splitTag && splitTag.property == "author") {
                var byline = document.querySelector('.byline');
                byline.innerHTML = "by " + splitTag.val;
            }
        }
    }

    var storyContainer = document.querySelector('#story');
    var outerScrollContainer = document.querySelector('.outerContainer');

    // page features setup
    setupTheme(globalTagTheme);
    var hasSave = loadSavePoint();
    setupButtons(hasSave);

    // Set initial save point
    savePoint = story.state.toJson();

    // init audio
    const applyAudio = CreateAudio();

    // Kick off the start of the story!
    continueStory(true);

    // Main story processing function. Each time this is called it generates
    // all the next content up as far as the next set of choices.
    function continueStory(firstTime) {

        var paragraphIndex = 0;
        var delay = 0.0;

        // Don't over-scroll past new content
        var previousBottomEdge = firstTime ? 0 : contentBottomEdgeY();

        // Generate story text - loop through available content
        while (story.canContinue) {

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();
            var tags = story.currentTags;

            // Any special tags included with this line
            var customClasses = [];
            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i];

                // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
                // customised to be used for other things too.
                var splitTag = splitPropertyTag(tag);

                // AUDIO: src
                if (splitTag && splitTag.property == "AUDIO") {
                    applyAudio({ src: splitTag.val, loop: false });
                }

                // AUDIOLOOP: src
                else if (splitTag && splitTag.property == "AUDIOLOOP") {
                    applyAudio({ src: splitTag.val, loop: true });
                }

                // IMAGE: src
                if (splitTag && splitTag.property == "IMAGE") {
                    var imageElement = document.createElement('img');
                    imageElement.src = splitTag.val;
                    storyContainer.appendChild(imageElement);

                    showAfter(delay, imageElement);
                    delay += 200.0;
                }

                // LINK: url
                else if (splitTag && splitTag.property == "LINK") {
                    window.location.href = splitTag.val;
                }

                // LINKOPEN: url
                else if (splitTag && splitTag.property == "LINKOPEN") {
                    window.open(splitTag.val);
                }

                // BACKGROUND: src
                else if (splitTag && splitTag.property == "BACKGROUND") {
                    outerScrollContainer.style.backgroundImage = 'url(' + splitTag.val + ')';
                }

                // CLASS: className
                else if (splitTag && splitTag.property == "CLASS") {
                    customClasses.push(splitTag.val);
                }

                // CLEAR - removes all existing content.
                // RESTART - clears everything and restarts the story from the beginning
                else if (tag == "CLEAR" || tag == "RESTART") {
                    removeAll("p");
                    removeAll("img");

                    // Comment out this line if you want to leave the header visible when clearing
                    // setVisible(".header", false);

                    if (tag == "RESTART") {
                        restart();
                        return;
                    }
                }
            }

            // Create paragraph element (initially hidden)
            var paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = paragraphText;
            storyContainer.appendChild(paragraphElement);

            // Add any custom classes derived from ink tags
            for (var i = 0; i < customClasses.length; i++)
                paragraphElement.classList.add(customClasses[i]);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);
            delay += 200.0;
        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function (choice) {

            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement('p');
            choiceParagraphElement.classList.add("choice");
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
            storyContainer.appendChild(choiceParagraphElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceParagraphElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
            choiceAnchorEl.addEventListener("click", function (event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                removeAll(".choice");

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                // This is where the save button will save from
                savePoint = story.state.toJson();

                // Aaand loop
                continueStory();
            });
        });

        // Extend height to fit
        // We do this manually so that removing elements and creating new ones doesn't
        // cause the height (and therefore scroll) to jump backwards temporarily.
        storyContainer.style.height = contentBottomEdgeY() + "px";

        if (!firstTime)
            scrollDown(previousBottomEdge);

    }

    function restart() {
        story.ResetState();

        setVisible(".header", true);

        // set save point to here
        savePoint = story.state.toJson();

        continueStory(true);

        outerScrollContainer.scrollTo(0, 0);
    }

    // -----------------------------------
    // Various Helper functions
    // -----------------------------------

    // Fades in an element after a specified delay
    function showAfter(delay, el) {
        el.classList.add("hide");
        setTimeout(function () { el.classList.remove("hide") }, delay);
    }

    // Scrolls the page down, but no further than the bottom edge of what you could
    // see previously, so it doesn't go too far.
    function scrollDown(previousBottomEdge) {

        // Line up top of screen with the bottom of where the previous content ended
        var target = previousBottomEdge;

        // Can't go further than the very bottom of the page
        var limit = outerScrollContainer.scrollHeight - outerScrollContainer.clientHeight;
        if (target > limit) target = limit;

        var start = outerScrollContainer.scrollTop;

        var dist = target - start;
        var duration = 300 + 300 * dist / 100;
        var startTime = null;
        function step(time) {
            if (startTime == null) startTime = time;
            var t = (time - startTime) / duration;
            var lerp = 3 * t * t - 2 * t * t * t; // ease in/out
            outerScrollContainer.scrollTo(0, (1.0 - lerp) * start + lerp * target);
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // The Y coordinate of the bottom end of all the story content, used
    // for growing the container, and deciding how far to scroll.
    function contentBottomEdgeY() {
        var bottomElement = storyContainer.lastElementChild;
        return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
    }

    // Remove all elements that match the given selector. Used for removing choices after
    // you've picked one, as well as for the CLEAR and RESTART tags.
    function removeAll(selector) {
        var allElements = storyContainer.querySelectorAll(selector);
        for (var i = 0; i < allElements.length; i++) {
            var el = allElements[i];
            el.parentNode.removeChild(el);
        }
    }

    // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.
    function setVisible(selector, visible) {
        var allElements = storyContainer.querySelectorAll(selector);
        for (var i = 0; i < allElements.length; i++) {
            var el = allElements[i];
            if (!visible)
                el.classList.add("invisible");
            else
                el.classList.remove("invisible");
        }
    }

    // Helper for parsing out tags of the form:
    //  # PROPERTY: value
    // e.g. IMAGE: source path
    function splitPropertyTag(tag) {
        var propertySplitIdx = tag.indexOf(":");
        if (propertySplitIdx != null) {
            var property = tag.substr(0, propertySplitIdx).trim();
            var val = tag.substr(propertySplitIdx + 1).trim();
            return {
                property: property,
                val: val
            };
        }

        return null;
    }

    // Loads save state if exists in the browser memory
    function loadSavePoint() {

        try {
            let savedState = window.localStorage.getItem('save-state');
            if (savedState) {
                story.state.LoadJson(savedState);
                return true;
            }
        } catch (e) {
            console.debug("Couldn't load save state");
        }
        return false;
    }

    // Detects which theme (light or dark) to use
    function setupTheme(globalTagTheme) {

        // load theme from browser memory
        var savedTheme;
        try {
            savedTheme = window.localStorage.getItem('theme');
        } catch (e) {
            console.debug("Couldn't load saved theme");
        }

        // Check whether the OS/browser is configured for dark mode
        var browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark"
            || (savedTheme == undefined && globalTagTheme === "dark")
            || (savedTheme == undefined && globalTagTheme == undefined && browserDark))
            document.body.classList.add("dark");
    }

    // Used to hook up the functionality for global functionality buttons
    function setupButtons(hasSave) {

        let rewindEl = document.getElementById("rewind");
        if (rewindEl) rewindEl.addEventListener("click", function (event) {
            removeAll("p");
            removeAll("img");
            setVisible(".header", false);
            restart();
        });

        let saveEl = document.getElementById("save");
        if (saveEl) saveEl.addEventListener("click", function (event) {
            try {
                window.localStorage.setItem('save-state', savePoint);
                document.getElementById("reload").removeAttribute("disabled");
                window.localStorage.setItem('theme', document.body.classList.contains("dark") ? "dark" : "");
            } catch (e) {
                console.warn("Couldn't save state");
            }

        });

        let reloadEl = document.getElementById("reload");
        if (!hasSave) {
            reloadEl.setAttribute("disabled", "disabled");
        }
        reloadEl.addEventListener("click", function (event) {
            if (reloadEl.getAttribute("disabled"))
                return;

            removeAll("p");
            removeAll("img");
            try {
                let savedState = window.localStorage.getItem('save-state');
                if (savedState) story.state.LoadJson(savedState);
            } catch (e) {
                console.debug("Couldn't load save state");
            }
            continueStory(true);
        });

        let themeSwitchEl = document.getElementById("theme-switch");
        if (themeSwitchEl) themeSwitchEl.addEventListener("click", function (event) {
            document.body.classList.add("switched");
            document.body.classList.toggle("dark");
        });
    }

})();
