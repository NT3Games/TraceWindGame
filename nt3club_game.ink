# title: 风之痕
# author: NT3 Games
# theme: dark
// 游戏地址：https://tracewindgame.netlify.app // 
// 流程图：https://hackmd.io/H3N_GcVcRAW5zvNTY41Kzg?view

// All of including file should list in the main.js FILES array.
INCLUDE extension_cuna.ink
INCLUDE extern_function.ink

VAR extension = false
VAR sound = false
VAR splash = 0
VAR poop_shit_number = 0

-> start

=== start ===

风之痕 0.1.3-rc.2-test{extension:-扩展分支}

~ splash = RANDOM(1, 6)

// { splash :
//     -   1: 1% sugar!
//     -   2: 100% pure!
//     -   3: 150 bpm for 400000 minutes!
//     -   4: 90% bug free!
//     -   5: Afraid of the big, black bat!
//     -   6: Kind of dragon free!
//     -   else: 错误
// }

// # IMAGE: images/pexels-manuel-geissinger-325229.jpg
// 只是测试用的图片，之后会替换为游戏封面？
// 图片来自：https://www.pexels.com/photo/black-server-racks-on-a-room-325229/

{ sound == true :
    （游戏已添加音效，请注意音量。）
}

+   [开始游戏]
    -> episode_1
+   [已解锁结局]
    -> endings
+   [设置]
    -> setting
+   [关于游戏]
    -> about
+   [开发者模式]
    -> debug_mod

=== about ===

# CLEAR
# CLASS: menu_title
关于

改编自真人真事，部分内容属虚构。

<br>

此为开源游戏。<br>
GitHub： https:\/\/github.com\/NT3Games\/TraceWindGame

<br>

# CLASS: menu_title
制作人员名单

# CLASS: staff_text
NT³

# CLASS: staff_text
TraceWind

# CLASS: staff_text
LittleYe233

# CLASS: staff_text
可名

# CLASS: staff_text
gledos

# CLASS: menu_title
特别鸣谢

# CLASS: staff_text
「NT³的众吹众擂」群组的全体成员

+   [回到标题页面]
    # CLEAR
    -> start

=== setting ===

# CLEAR
# CLASS: menu_title
设置

扩展分支：{extension:开|关}；语音支持：{sound:开|关}

+   {not extension} [打开 扩展分支]
    警告：扩展分支包含猎奇、超展开等内容，不建议首次游玩时打开。

+   +   [确定]
        ~ extension = true
        # CLEAR
        -> setting
+   +   [取消]
        # CLEAR
        -> setting

+   {extension} [关闭 扩展分支]
    警告：扩展分支包含猎奇、超展开等内容，不建议首次游玩时打开。

    ~ extension = false
    # CLEAR
    -> setting

+   {not sound} [打开 语音支持]
    注意：由于音效是及时加载的，所以网络延迟较高时体验会较差。

+   +   [确定]
        ~ sound = true
        # CLEAR
        -> setting
+   +   [取消]
        # CLEAR
        -> setting

+   {sound} [关闭 语音支持]
    注意：由于音效是及时加载的，所以网络延迟较高时体验会较差。

    ~ sound = false
    # CLEAR
    -> setting

+   [清空已解锁结局]
    警告：此举将会清空所有已解锁的结局和病历条目，其无法恢复！

+   +   [确定]
        ~ clear_ending()
        # CLEAR
        -> setting
+   +   [取消]
        # CLEAR
        -> setting

+   [回到标题页面]
    # CLEAR
    -> start


=== endings ===

# CLASS: menu_title
已解锁结局

+   {obtained_ending("sleeping")}
    睡美人 # CLEAR
    # IMAGE: images/粉色.png
+   {obtained_ending("yuki")}
    汤化雪 # CLEAR
    病历条目：忌冲热水凉、泡热水澡。
    # IMAGE: images/蓝色.png
+   {obtained_ending("butterfly")}
    羽化梦 # CLEAR
    病历条目：忌食高脂肪、酒、油炸食品。
    # IMAGE: images/绿色.png
+   [回到标题页面]
    # CLEAR
    # RESTART
    -> start
- -> endings

=== episode_1 ===

// 开幕，这里是游戏开始后的第一个场景

// # AUDIOLOOP: audios/bgm/132546__theworkingbamboo__etude.ogg
// 音乐来自：https://freesound.org/people/TheWorkingBamboo/sounds/132546/

<br>

我全知！所以知道屎。<br>我全能！所以能拉屎！

住院长达46天，今日终于结束的风痕，回到了家。

+   「我回来了！」

-   ………………

{ sound == true :
    # AUDIO: audios/sound/关门.ogg
}

风痕笑着，放下装着病历、CT、需按时服用的药与几张收据的挎包后，打开了家中的窗。

家里凝固了一个半月的空气霎时间从窗冲出。

风痕望了望坐在床头上的小屎屎公仔，它一如既往地笑着看着风痕。

风痕笑道：

+   「嗯哼哼~~ 从今天开始，每天都有很多时间呢！」

    { sound == true :
        # AUDIO: audios/sound/嗯哼哼~~.ogg
    }

-   风痕自言自语：<br>「还有很多事情想做呢！」<br>「嗯……但不知道从什么开始做起？」

VAR pooping = false

-> episode_1.stage_1

= stage_1

*   (poop) \ {tg or update:该拉屎了！|总而言之，先拉屎吧！}

    ~ poop_shit_number += 1

    ~ pooping = true

    风痕的家不大，以风痕的身高来看，走个4步不到便会碰到墙角。

    供她拉屎的厕所，就在入口的右侧。

+   +   「嗯……？」

-   -   这不是美少女游戏吗？怎么会拉屎呢？<br>算了……

        风痕脱下了小胖次，坐了下来。

        想看什么的人，什么也没能看到。

        风痕在马桶上伸了伸懒腰：

+   +   「还是自家的屎坑拉起来最舒服！！！>_<」

-   -   &nbsp

{ sound == true :
    # AUDIO: audios/sound/拉屎.ogg
}

        {tg or update:
            拉完屎后，风痕回到了房间。
            ~ pooping = false
        - else:
            -> episode_1.poop_owari
        }

        -> episode_1.stage_1

*   (tg) {not (tg or update)} 对了对了，要上tg找群友拉屎

    { sound == true :
        # AUDIO: audios/sound/电报.ogg
    }

    ~ poop_shit_number += 1

    打开tg的风痕，快速阅览了几个群组。

    今天也是没人@她的一天。

    她去几个常去的群组，发了几组表情与『早上好』，还回复了好几句话后，<br>盯着屏幕空看了几分钟。

    {not pooping: -> episode_1.stage_1}

+   +   「小心痔疮！是时候出厕所了」
        ~ pooping = false

+   +   +   [之前说住院结束后，要直播游戏来着……] -> episode_1.stage_1.livestream

*   (update) {not (tg or update)} 啊！今天频道还没更新！

    打开tg的风痕快速阅览了几个大频道。

    那些频道都早已过几万人订阅，可作为tg梗图频道的开山鼻祖——『Foolish TraceWind』。<br>这几年还是在1万人徘徊。

    其他的频道凭借着发色图、将他人制作的梗图据为己有、联动色情与白嫖频道以此扩大订阅量。

+   +   「我才不和他们同流合污呢，哼。」

    { sound == true :
        # AUDIO: audios/sound/哼（小生气）.ogg
    }

-   -   风痕看了下群中的几个投稿，又打开了常去的BBS网站，转发了几张过时的梗图到自己的万人频道中。

+   +   「本雀只想让大家点进傻痕频道后觉得开心，便够了」

-   -   {not pooping: -> episode_1.stage_1}

+   +   「小心痔疮！是时候出厕所了」
        ~ pooping = false

        -> episode_1.stage_1

*   (livestream) {not pooping} 之前说住院结束后，要直播游戏来着……

-   风痕打开了显示器与电脑后，望着电脑屏幕，望得有点出神。

    风痕摇了摇头，拍了拍脸：<br>「是时候遵守承诺，直播游戏了！」

    { sound == true :
        # AUDIO: audios/sound/打脸（啪啪）.ogg
    }

    风痕又望了望在房间角落的路由器，苦笑：
+   「说起来不在家一个多月，网费还是要照交……」

-   风痕打开了叔叔的网站。<br>调好配置与麦克风后，打开了她在打折时买的解密游戏。

    其实风痕也不知道这游戏玩的是什么，但她知道的是：渡鸦最喜欢解密游戏。

    风痕还记得读高中时，渡鸦和她做了一款解密游戏。

    虽然整款游戏从图像到关卡都很屎，<br>但在风痕的脑中，最记忆犹新的是：一起做这游戏时，玩得很开心。

+   风痕就是这样爱上解密游戏的

-   风痕在自己的直播通知群中发了正在直播的通知。

    不过那通知群本身就没有几个人。<br>这几个人中，还有几个是 bot。

    风痕对着麦高呼：<br>Hello！一个半月没有相见，我回来啦！

    弹幕：†升天†

+   风痕在麦前欢呼

    { sound == true :
        # AUDIO: audios/sound/欢呼.ogg
    }

-   风痕其实不算特别聪明。<br>一直以来，解密游戏的通关凭靠的不是思考，而是耐性。

    风痕苦笑：
    啊啦啦……这不行吗？

+   「难道是这样？」

-   +   「嗯…………是这样吗？」

-   +   「啊！我知道了，一定是这样！」

-   「嗯……不行啊……」

    这也难怪没什么观众看了。

+   「啊！是这样………………好！过关了！！」<>
-   风痕自己鼓起了掌来。

    { sound == true :
        # AUDIO: audios/sound/鼓掌.ogg
    }

    可弹幕却一片寂静。

    风痕苦笑，看了看荧幕的右下角：<br>「那个……今天时间也不早了，是时候和大家说再见了，哈哈哈」

    弹幕仍一片寂静。

    「啊，那个……直播的录像之后会上传，没来得及看直播的朋友要记得看哦！」

    风痕对着镜头笑了下，那皮套也跟着这表情笑了起来。

+   「谢谢大家！」

-   风痕，下线了。

    …………………………

-> episode_1.stage_2



= poop_owari

+   风痕掏出手机，打算趁着拉屎的时候做些什么。

-> episode_1.stage_1



= stage_2

// 第二幕——吃饭还是洗澡？

……………………

风痕的眼神从屏幕移开。

这时，放在桌面上的笔筒已经被黑暗所吞噬，本就不大的房间被时钟的行走声淹没。

风痕迅速地打开了灯。

{ sound == true :
    # AUDIO: audios/sound/关灯.ogg
}

风痕：<br>嗯……虽然直男医生嘱咐我要多喝热水，早点睡。<br>可是现在还早吧！

+   (eat) 说起来，今天还未吃饭饭呢！

    风痕从背囊中拿出了几罐药。

    风痕看着药罐的贴纸：<br>…………这些药是一日两次，并且是饭后食用……

    风痕苦笑：<br>不过我今天还未吃午餐，哈哈。

+   +   风痕转为开朗的声音

-   -   事到如今，还担心这些做什么！

        今晚吃什么？

+   +   木曜日！当然是叫『疯狂星期四』！！
        -> episode_1.crazy_thursday

+   +   去冰箱里看看还有什么吧
        -> episode_1.foot_option

+   +   {extension and poop} 记得还有刚才拉的屎

        -> cuna.eat_poop

+   (bath) 是不是该洗白白了？

    { sound == true :
        # AUDIO: audios/sound/稍微生气.ogg
    }

    风痕：<br>干，干什么！！！>_<<br>不准看女孩子洗澡澡！！

+   +   风痕虽然这么说，可她还是走向了衣柜
        -> yuki_end



= crazy_thursday

风痕笑着：<br>大家一直都说这个，一定很好吃吧！

风痕不愿打电话，她打开了外卖专用网站。

正要下单时，风痕才注意到自己并没有注册过网站会员。

风痕皱起眉头：<br>我的生日，是几月几号来着……？

{ sound == true :
    # AUDIO: audios/sound/思考.ogg
}

风痕：<br>算了算了，今日就是我的生日！

疯狂星期四很慷慨地送了『新注册会员优惠卷』与『生日优惠卷』

+   风痕下单了八个蛋挞和6块吮指原味鸡

-   风痕开心：<br>有优惠卷，不点白不点！

这餐估计是她这辈子吃得最多的一餐。

+   ……………………

-   但也不知怎的，好似店铺就开在隔壁一样，5分钟不到就把这餐送到了。

虽然房间里只有一个人，但风痕吃得很开心。

还在网上找了部动画开始看起来。

风痕：<br>诶……都出了这么多集了啊。

但风痕并没有浪费时间衔接回之前看到的集数，而是随心地看起了最新一集。

+   [【继续阅读】]

-   风卷残云后，动画也开始播放起片尾曲，食物也刚好吃完了。

风痕看着两边油腻腻得手，不由得笑了起来。

她想起以前小学去同学生日会的情形，同学们都会叫肯德基和麦当劳大餐招待朋友们。

+   [【继续阅读】]

-   虽然这种快餐式的派对几乎都是男孩子聚集的场所，但她身为女孩子却总是被招待，也算是一种特例。

风痕清理了桌上的残渣后，去厕所洗了洗手，洗漱、并擦了擦身。

+   吃下药后，便准备睡觉了。
    -> butterfly_end



= foot_option

风痕打开了冰箱。

但一个半月都在医院的她，自家的冰箱里又能有什么呢？

望了一圈后，冰箱中只有朱古力和剩下的几只鸡蛋。

+   [吃朱古力]

    风痕打开了包装，吃了下那还未过期的朱古力。

    她记得这个口感，这和她上高中时收到的情人节朱古力一模一样。

    但那不是义理，也不是本命。

    同学们的桌面和抽屉里塞满了互相赠送的朱古力。

+   +   [【继续阅读】]

-   -   金色的、白色的、冰蓝色的、橙红色的。<br>球形的、币形的、心形的、古灵精怪形的。<br>夹杂着糖果的、附带了礼物的、包含了水果的。

        风痕看回自己桌。<br>被刀与笔涂画不清的桌面上有着一块朱古力。

+   +   [【继续阅读】]

-   -   是学校组织赠送的。

        风痕反复咀嚼着嘴中的朱古力，希望那味能在口中多残留一会。

        风痕笑了起来：<br>还不坏。

        回到房间后服用了药物，就准备睡觉了。
        -> sleeping_end ("药物不能和咖啡因混吃")

+   [吃鸡蛋]

风痕苦笑：<br>打开后不会是小鸡尸体吧……

风痕接了壶水，准备将鸡蛋煮沸后吃。

这咕噜咕噜往上冒的水花，其声掩盖了时钟的行走声。

+   +   风痕打开了手机，想着和群友吹水打发这段时间。

-   -   看了下几个群，在这段时间内消息已走了几百条。

随手点开一个后，映入眼中的是自己发的『早上好』和表情包。<br>往下一滑，发的消息不是回复风痕的，而是回复在风痕之上的人。

+   +   嗒一声，水花声褪去。

        { sound == true :
            # AUDIO: audios/sound/开水.ogg
        }

-   -   风痕把一部分的开水倒入杯中，准备后药物以便服用。

再等了一会，把鸡蛋取出，敲掉壳后露出的仍然是雪白滑嫩的蛋白。

风痕松了口气，吃下鸡蛋后再服用了药物。

去厕所洗了洗手，洗漱、并擦了下身。

+   +   准备睡觉了。
        -> stage_4


= end

// EP1 结尾部分，结尾会跳转到 EP2（即第二天）
// 待写内容。


-> episode_2



= stage_4

风痕爬上了床。<br>把床头小屎屎公仔紧紧地搂在怀里。

风痕高兴：<br>虽然屎屎的，但香香的、软软的~哼哼~

{ sound == true :
    # AUDIO: audios/sound/嗯哼哼~~.ogg
}

风痕：<br>一个半月我没有在家，自己有没有乖乖帮忙看家啊？

+   [【继续阅读】]

-   风痕边说，边捏了捏公仔的头。<br>随后把脸埋在松软香绵的公仔怀里，睡着了。

+   风痕睁开了眼

-   在一个漆黑的的地方，她伸出手。<br>似乎希望能摸到些什么，但没有任何物质愿意回馈。

风痕并没有惊慌，她就像来过这很多次一样，试着朝前走了一段距离。

+   [【继续阅读】]

-   风痕两手互相抱着，有点颤抖：<br>好冷…………小屎屎呢…………

她抱紧了自己，她知道，有什么要来了。

霎时，一道电击从心脏开始蔓延。<br>她跌坐在地上，头部嗡嗡地绞着。

『风痕，醒醒……风痕……』

+   爸爸？！

风痕尽力睁开了眼。

映入的是臂弯挽着不知名女人的父亲。

她知道，那是父亲的新欢。<br>父亲和她牵着一个小男孩，三人脸上都溢满幸福。

没有人看她一眼。

风痕低下了头，最后的光也淡入了这片黑暗。
-> sleeping_end ("建议多向朋友倾诉")

+   妈妈？！

风痕尽力睁开了眼。<br>母亲蹲在她面前，笑着看着她。

风痕正想站起，背后的父亲走了过来。

母亲站起，与父亲谈论起风痕。

担忧的话语逐渐转为了激烈的言辞，委婉的声音渐渐越来越大。

他们吵了起来，没有人看她一眼。

风痕低下了头，最后的光也淡入了这片黑暗。
-> sleeping_end ("建议多向朋友倾诉")

+   渡鸦？！

风痕尽力睁开了眼。

渡鸦正在不远处学习。

风痕跌跌撞撞地往他靠近，手臂向前微微张开。

风痕走了很久。
却无论如何都无法靠近渡鸦。

风痕垂下了双臂，低下了头，最后的光也淡入了这片黑暗。
-> sleeping_end ("建议多向朋友倾诉")

+   小屎屎？！

小屎屎公仔就在那里。

它静静地看着风痕，还是露出着那副笑脸。

风痕跌跌撞撞地靠近它，它也慢慢地向风痕靠近。

风痕张开了双臂，小屎屎便跃到风痕的怀中。

它微笑着，静静地看着风痕。

它就这么静静地看着风痕，全神贯注。<br>什么要求也没有提，什么话也没有说。

它抱着风痕。
-> episode_2





=== sleeping_end(tips) ===

// 睡美人 END

+   [【继续阅读】]

晨光侵入那宽跨的窗帘，抚过风痕白皙的皮肤。

躺在床上的风痕双眼微闭，胸部随着呼吸一起一伏，发丝在阳光的照耀下泛着浅浅的橙色。

她安静地睡着。

直到永远。

~ new_ending("sleeping")

# CLASS: game_end
睡美人 END

<br>

# CLASS: tips_title
获得条例

# CLASS: tips_text
{tips}

-> bite_the_dust.sleeping





=== yuki_end ===

打开衣柜后，密封空间中凝固的热气就如刚入房间时的空气一般。<br>只不过这次带着了一股衣物的潮霉味。

风痕衣柜中的衣物不多，实在不像她这年纪下女孩子的衣柜。

风痕看了看衣柜中她最喜欢的绿色带帽外套。

这外套已显得有点旧了，除了绿色不均匀外，还左沾了点蓝色，右沾了点紫色。

有些混起来的地方，还成了点红色。

风痕笑了笑，拿出了套自家用的衣物后，关上了衣柜。

+   去厕所洗澡了

-   风痕很难得地准备了一大缸热水，为此还花了半小时打扫了下浴缸。

脱去衣物她，照了照镜子后，苦笑地挠了挠头。

浸入了热水中。

………………

+   风痕在热气中静静地望着天花板。

-   风痕似乎很享受这段宁静的时间，她望着这雾中的水珠们成群结队地往上升。

风痕耳边似乎渐渐有了点声音，是小时候便在一起玩的近邻朋友们打闹的笑声。

幼儿园时他们经常一起东跑西跳，小学时也总是去大家家里一起玩。

风痕苦笑了声，但与之前相比似乎有点无力。

+   她想起了以前去朋友家联机玩对战游戏。<>
玩一局输一局，排名一出后是垫底的日子。

-   但即便如此，风痕还是很开心。

风痕嘀咕：<br>至少那时……还有人约我出去玩……

但也不知道，大家是不想当垫底，还是真的喜欢和风痕玩才极力邀请风痕去做客就是了。

风痕耳边的笑声愈渐愈远，就像那些水珠一般，升走了。

~ new_ending("yuki")

# CLASS: game_end
汤化雪 END

<br>

# CLASS: tips_title
获得条例

# CLASS: tips_text
忌冲热水凉、泡热水澡

-> bite_the_dust.yuki





=== butterfly_end

// 羽化梦 END

+   [【继续阅读】]

-   风痕就这样沉入了梦乡。

意识朦胧，一阵窸窸窣窣的声音在房间内响起。

风痕不觉意地走到房间中央。

声音在动，围绕着风痕所动。

+   月色下<>
-   风痕瞟到了镜子中的自己。

影中的她显得与平常不太一样：轮廓有点大，举动也更灵敏了。

她发觉了，她头上长出了羽毛。<br>她手臂变成了翅膀，身后出现了尾巴。

洁白的月色下，棕白相间的她变成了一只麻雀。

风痕打开了窗，风便随着云雾吹过她的羽毛。

+   她张开了双翼

-   她自由了。

~ new_ending("butterfly")

# CLASS: game_end
羽化梦 END

<br>

# CLASS: tips_title
获得条例

# CLASS: tips_text
忌食高脂肪、酒、油炸食品

-> bite_the_dust.butterfly





=== episode_2 ===

// 这里是第二天的内容

# CLASS: game_end
TRUE END

-> ENDs.nfy





=== ENDs ===

# CLASS: end
游戏结束

-> ENDs.rest



= nfy

# CLASS: end
游戏尚未结束，但文字已结束。

-> ENDs.rest



= rest

+   [再次进行游戏]
    # CLEAR
    # RESTART
    -> start





=== bite_the_dust

= yuki

<br><br><br>

+   [结束游戏？] -> ENDs
+   [回到之前的选择？]
+   +   [风痕：<br>嗯……虽然直男医生嘱咐我要多喝热水，早点睡。<br>可是现在还早吧！]
        # CLEAR
        -> episode_1.stage_2


= sleeping

<br><br><br>

+   [结束游戏？] -> ENDs
+   [回到之前的选择？]
+   +   [风痕：<br>嗯……虽然直男医生嘱咐我要多喝热水，早点睡。<br>可是现在还早吧！]
        # CLEAR
        -> episode_1.stage_2
+   +   [说起来，今天还没吃饭饭呢！]
        # CLEAR
        -> episode_1.stage_2.eat


= butterfly

<br><br><br>

+   [结束游戏？] -> ENDs
+   [回到之前的选择？]
+   +   [风痕：<br>嗯……虽然直男医生嘱咐我要多喝热水，早点睡。<br>可是现在还早吧！]
        # CLEAR
        -> episode_1.stage_2
+   +   [说起来，今天还没吃饭饭呢！]
        # CLEAR
        -> episode_1.stage_2.eat
+   +   准备睡觉了。
        # CLEAR
        -> episode_1.stage_4








// 未使用的音乐：

// audios/bgm/the_field_of_dreams.ogg
// 音乐来自：https://opengameart.org/content/the-field-of-dreams

// audios/sound/plasterbrain_Cute_Anime_Jumps.mp3
// 音乐来自：https://freesound.org/people/plasterbrain/sounds/396196/

// 关门的音效
// # AUDIO: audios/sound/336545__giddster__closing-door.ogg
// 声音来自：https://freesound.org/people/giddster/sounds/336545/


// 旧版内容已被移动到：
// https://hackmd.io/HXYxZkODRaGwe9Elo70H3Q
// https://gist.githubusercontent.com/gledos/46707b2a6e57a3d67cf6f051b3d3c676/raw/2ddf5e97d597308e64788b19733bda997845807e/CLEAR.md



=== debug_mod ===

# CLEAR
# CLASS: menu_title
开发者模式

这里是开发者模式，可以跳转到：

+   [Episode 1] -> debug_mod.episode_1_debug

= episode_1_debug

+   [Stage 1] ->episode_1.stage_1
+   [Stage 2] ->episode_1.stage_2
+   [Stage 4] ->episode_1.stage_4
