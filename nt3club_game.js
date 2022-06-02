var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"title: 风之痕"},{"#":"author: NT3"},{"#":"theme: dark"},{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start":[["^风之痕 0.0.17","\n",{"#":"IMAGE: images/pexels-manuel-geissinger-325229.jpg"},"^按下任意键开始游戏","\n","^（游戏已添加背景音乐，请注意音量。）","\n","ev","str","^任意键","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^关于游戏","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"episode_1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"about"},"\n",{"#f":5}]}],{"#f":1}],"about":[["^这是一款美少女能拉屎的文字游戏……","\n","^游戏代码仓库在 GitHub： https://github.com/gledos/nt3club-game","\n","ev","str","^回到标题页面","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"#":"RESTART"},{"->":"start"},{"#f":5}]}],{"#f":1}],"episode_1":[[[{"#":"AUDIOLOOP: audios/bgm/the_field_of_dreams.ogg"},"^我全知！所以知道屎。<br>我全能！所以能拉屎！","\n","^长达住院46天，今日终于好不容易结束的风痕，回到了家。","\n",[["ev",{"^->":"episode_1.0.g-0.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“我回来了！”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.0.g-0.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^………………","\n","^风痕笑着，放下装着病历、CT、需按时复用的药与几张收据的挎包后，打开了家中的窗。","\n","^家里凝固了一个半月的空气霎时间从窗冲出。","\n","^风痕望了望房间角落床头上的小屎屎公仔。","\n",["ev",{"^->":"episode_1.0.g-0.5.g-0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“嗯哼哼~~ 从今天开始，每天都有很多时间呢！”",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"episode_1.0.g-0.5.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["<>","^ 风痕笑道","\n","^“也有很多事情想做呢！”<br>“但不知道从什么开始做起？”<br>风痕自言自语着。","\n",{"->":"episode_1.stage_1"},{"#f":5}]}],{"#f":5,"#n":"g-0"}],null],{"stage_1":[[["ev",{"^->":"episode_1.stage_1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^ ","ev",{"CNT?":".^.^.^.c-1"},{"CNT?":".^.^.^.c-2"},"||","/ev",[{"->":".^.b","c":true},{"b":["^该拉屎了！",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^总而言之，先拉屎吧！",{"->":".^.^.^.8"},null]}],"nop",{"->":"$r","var":true},null]}],["ev",{"^->":"episode_1.stage_1.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-1"},{"CNT?":".^.^.c-2"},"||","!","/ev",{"*":".^.^.c-1","flg":19},{"s":["^对了对了，要上tg找群友拉屎",{"->":"$r","var":true},null]}],["ev",{"^->":"episode_1.stage_1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.c-1"},{"CNT?":".^.^.c-2"},"||","!","/ev",{"*":".^.^.c-2","flg":19},{"s":["^啊！今天频道还没更新！",{"->":"$r","var":true},null]}],["ev",{"^->":"episode_1.stage_1.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"poping"},"!","/ev",{"*":".^.^.c-3","flg":19},{"s":["^之前说住院结束后，要直播游戏来着……",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.stage_1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"poping","re":true},"^风痕的家不大，以风痕的身高来看，走个4步不到便会碰到墙角。","\n","^而拉屎的厕所，就在入口的右侧。","\n",[["ev",{"^->":"episode_1.stage_1.0.c-0.15.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^嗯……？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.stage_1.0.c-0.15.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^这不是美少女游戏吗？怎么会拉屎呢？<br>算了……","\n","^风痕脱下了小胖次，坐了下来。<br>想看的人什么也没能看到。","\n","ev","str","^【继续阅读】","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n","^风痕说到：<br>还是自家的屎坑拉起来最舒服！！！>_<","\n","ev",{"CNT?":".^.^.^.^.^.c-1"},{"CNT?":".^.^.^.^.^.c-2"},"||","/ev",[{"->":".^.b","c":true},{"b":["\n","^拉完屎后，风痕回到了房间。","\n","ev",0,"/ev",{"VAR=":"poping","re":true},{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["\n","^风痕掏出手机，打算趁着拉屎的时候做些什么。","\n",{"->":".^.^.^.10"},null]}],"nop","\n",{"->":".^.^.^.^.^.^"},{"->":".^.^.^.^.^.g-0"},{"#f":5}],"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"episode_1.stage_1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^打开tg的风痕快速阅览了几个群组。","\n","^今天也是没人@她的一天。","\n","^她去几个常去的群组，发了几个表情与『早上好』后，盯着屏幕空看了几分钟。","\n","ev",{"VAR?":"poping"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.^"},{"->":".^.^.^.18"},null]}],"nop","\n",[["ev",{"^->":"episode_1.stage_1.0.c-1.20.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^是时候出厕所了，风痕回到了房间。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.stage_1.0.c-1.20.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","ev",0,"/ev",{"VAR=":"poping","re":true},{"->":".^.^.^.^.^"},{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"episode_1.stage_1.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^打开tg的风痕快速阅览了几个大频道。","\n","^那些频道都早已过几万人订阅，可作为tg梗图频道的开山鼻祖——『Foolish TraceWind』。","\n","^这几年还是在1万人徘徊。","\n","^其他的频道凭借着发色图、将他人制作的梗图据为己有、联动色情与白嫖频道以此扩大订阅量。","\n",[["ev",{"^->":"episode_1.stage_1.0.c-2.15.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“我才不和他们同流合污呢，哼。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.stage_1.0.c-2.15.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["<>","^ 风痕嘀咕着","\n","^风痕看了下群中的几个投稿，又去一些BBS网站，转发了一些梗图过到自己的万人频道中。","\n",["ev",{"^->":"episode_1.stage_1.0.c-2.15.g-0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“本雀只想让大家随时点进傻痕频道都能觉得，哇，这好傻，就很开心了。”",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"episode_1.stage_1.0.c-2.15.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["ev",{"VAR?":"poping"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.^.^.^"},{"->":".^.^.^.5"},null]}],"nop","\n",["ev",{"^->":"episode_1.stage_1.0.c-2.15.g-1.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^是时候出厕所了，风痕回到了房间。",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"episode_1.stage_1.0.c-2.15.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n","ev",0,"/ev",{"VAR=":"poping","re":true},{"->":".^.^.^.^.^.^"},{"->":".^.^.^.^.^.g-0"},{"#f":5}],"#f":5}]}],{"#f":5}],"c-3":["ev",{"^->":"episode_1.stage_1.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^打开了显示器与电脑后，风痕望着电脑屏幕，望得有点出神。","\n","^风痕摇了摇头，拍了拍脸：<br>“是时候遵守承诺，直播游戏了。”","\n",["ev",{"^->":"episode_1.stage_1.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^“说起来不在家一个多月，网费还是要照交……”",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"episode_1.stage_1.0.g-0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["<>","^ 风痕苦笑道","\n","^风痕打开了粉红色的叔叔网站，调好配置与麦克风后，打开了她在打折时买的解密游戏。","\n","^其实风痕也不知道这游戏玩的是什么，但她知道的是：渡鸦最喜欢解密游戏。","\n","^风痕还记得读高中时，渡鸦和她做了一款解密游戏。","\n","^虽然整款游戏从图像到关卡都很屎，但风痕记得当时一起做这游戏时，玩得很开心。","\n",["ev",{"^->":"episode_1.stage_1.0.g-1.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^风痕就是这样爱上解密游戏的。",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"episode_1.stage_1.0.g-1.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^………………","\n","^风痕在自己的直播通知群中发了正在直播的通知。","\n","^不过那通知群本身就没有几个人。<br>这几个人中，还有几个是 bot。","\n","^风痕对着麦：<br>Hello！一个半月没有相见，我回来啦！","\n",["ev",{"^->":"episode_1.stage_1.0.g-2.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^弹幕：【看其他玩家发的是什么】",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"episode_1.stage_1.0.g-2.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^风痕自己在麦前欢呼。","\n","^风痕其实不算特别聪明。<br>一直以来，解密游戏的通关凭靠的不是思考，而是耐性。","\n","^风痕苦笑：“啊啦啦……这也不行吗？”","\n",["ev",{"^->":"episode_1.stage_1.0.g-3.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^“难道是这样？”",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"episode_1.stage_1.0.g-3.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^“嗯…………是这样吗？”","\n","^“啊！我知道了，一定是这样！”","\n","^“嗯……不行啊……”","\n","^这也难怪没什么观众观看了。","\n",["ev",{"^->":"episode_1.stage_1.0.g-4.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-8","flg":18},{"s":["^“啊！是这样………………好！过关了！！”",{"->":"$r","var":true},null]}],{"c-8":["ev",{"^->":"episode_1.stage_1.0.g-4.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^风痕自己鼓起了掌来。","\n","^可弹幕却一片寂静。","\n","^风痕苦笑着<br>“直播的录像会在之后上传的，今天的直播就到这里。”<br>“谢谢大家！”","\n",["ev",{"^->":"episode_1.stage_1.0.g-5.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":18},{"s":["^“嗯……下次直播………………还得看下次！”",{"->":"$r","var":true},null]}],{"c-9":["ev",{"^->":"episode_1.stage_1.0.g-5.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":["<>","^ 风痕思考了下","\n","^风痕对着镜头笑了下，皮套也跟着这表情笑了起来。","\n","^下线了。","\n","^…………………………","\n",["ev",{"^->":"episode_1.stage_1.0.g-6.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^风痕的眼神从屏幕移开。",{"->":"$r","var":true},null]}],{"c-10":["ev",{"^->":"episode_1.stage_1.0.g-6.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-7"},{"#f":5}],"#f":5}],"g-7":["^这时，放在桌面上的笔筒已经被黑暗所吞噬，本就不大的房间一下子就被时钟的行走声充满。","\n","^风痕：<br>嗯……虽然直男医生嘱咐我要多喝热水，早点睡。<br>可是现在还早吧！","\n",["ev",{"^->":"episode_1.stage_1.0.g-7.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^说起来，今天还没吃饭饭呢！",{"->":"$r","var":true},null]}],["ev",{"^->":"episode_1.stage_1.0.g-7.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":18},{"s":["^是不是该洗白白了？",{"->":"$r","var":true},null]}],{"c-11":["ev",{"^->":"episode_1.stage_1.0.g-7.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^风痕从背囊中拿出了几罐药。","\n","^风痕想了想：<br>说起来……这些药是一日两次，并且是饭后食用…………<br>不过今天还未吃午餐。","\n",["ev","str","^【继续阅读】","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^风痕转为开朗的声音：<br>事到如今，还担心这些做什么！","\n","^今晚吃什么？","\n",["ev",{"^->":"episode_1.stage_1.0.g-7.c-11.11.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^木曜日！当然是叫『疯狂星期四』！！",{"->":"$r","var":true},null]}],["ev",{"^->":"episode_1.stage_1.0.g-7.c-11.11.g-0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^去看看冰箱里还有什么吧 ",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"episode_1.stage_1.0.g-7.c-11.11.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^风痕笑着：<br>大家一直都说这个，一定很好吃吧！","\n",{"->":"episode_1.crazy_thursday"},{"#f":5}],"c-2":["ev",{"^->":"episode_1.stage_1.0.g-7.c-11.11.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^风痕打开了冰箱。","\n","^但一个半月都在医院的她，自家的冰箱里又能有什么呢？","\n",{"->":"episode_1.foot_option"},{"#f":5}],"#f":5}]}],{"#f":5}],"c-12":["ev",{"^->":"episode_1.stage_1.0.g-7.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^风痕：<br>干，干什么！！！>_<<br>不准看女孩子洗澡澡！！","\n",[["ev",{"^->":"episode_1.stage_1.0.g-7.c-12.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^风痕虽然这么说，可她还是走向了衣柜。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.stage_1.0.g-7.c-12.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"yuki_end"},{"#f":5}]}],{"#f":5}],"#f":5}]}],{"#f":1}],"crazy_thursday":[[["ev",{"^->":"episode_1.crazy_thursday.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^风痕不敢打电话，因此她打开了KFC网站。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.crazy_thursday.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^正要下单时，风痕才注意到自己并没有注册过KFC会员。","\n","^注册时，风痕已经不太记得自己生日是几月几号了。<br>想着今天也是一个值得纪念的日子，便把生日定在了今日。","\n","^KFC很慷慨地送了『新注册会员的优惠卷』与『生日优惠卷』","\n","ev","str","^【继续阅读】","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^风痕下单了八个蛋挞和6块吮指原味鸡。","\n","^风痕开心：<br>有优惠卷，不点白不点！","\n","^这餐估计是她这辈子吃得最多的一餐。","\n",["ev",{"^->":"episode_1.crazy_thursday.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^……………………",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"episode_1.crazy_thursday.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^但也不知怎的，好似KFC就开在隔壁一样，5分钟不到就把这餐送到了。","\n","^虽然房间里只有一个人，但风痕吃得很开心，还在网上找了部动画开始看起来。","\n","^风痕：<br>诶……都出了这么多集了啊。","\n","^但风痕也没有浪费时间找回之前看到的集数，而是随心地看起了最新一集。","\n","ev","str","^【继续阅读】","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^风卷残云后，动画也开始播放起片尾曲，食物也刚好吃完了。","\n","^风痕看着两边油腻腻得手，不由得笑了起来。","\n","^她想起以前小学去同学生日会的情形，同学们都会叫肯德基和麦当劳大餐招待朋友们。","\n","ev","str","^【继续阅读】","/str","/ev",{"*":".^.c-4","flg":20},{"c-4":["\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^虽然这种快餐式的派对几乎都是男孩子聚集的场所，但她身为女孩子却总是被招待，也算是一种特例。","\n","^风痕清理了桌上的残渣后，去厕所洗了洗手，洗漱、并擦了下身。","\n",["ev",{"^->":"episode_1.crazy_thursday.0.g-4.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^准备睡觉了。",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"episode_1.crazy_thursday.0.g-4.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"butterfly_end"},{"#f":5}],"#f":5}]}],{"#f":1}],"foot_option":[["^望了一圈后，冰箱中只有朱古力和剩下的几只鸡蛋。","\n","ev","str","^吃朱古力","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^吃鸡蛋","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^风痕打开了包装，吃了下那还未过期的朱古力。","\n","^随后，<br>去厕所洗了洗手，洗漱、并擦了下身。","\n",[["ev",{"^->":"episode_1.foot_option.0.c-0.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^回到房间后服用了药物，就准备睡觉了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.foot_option.0.c-0.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"sleeping_end"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^风痕苦笑：<br>打开后不会是个小鸡尸体吧……","\n","^风痕接了壶水，准备放入鸡蛋将此煮沸后吃。","\n","^这咕噜咕噜往上冒的水花，其声掩盖了时钟的行走声。","\n",[["ev",{"^->":"episode_1.foot_option.0.c-1.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^风痕打开了手机，想着和群友吹水打发这段时间。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"episode_1.foot_option.0.c-1.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^看了下几个群，在这段时间内消息已走了几百条。","\n","^随手点开一个后，映入眼中的是自己发的『早上好』和表情包。<br>往下一滑，发的消息不是回复风痕的，而是回复在风痕之上的人。","\n",["ev",{"^->":"episode_1.foot_option.0.c-1.7.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^嗒一声，水花声褪去。",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"episode_1.foot_option.0.c-1.7.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^风痕把一部分的开水倒入杯中，准备后药物以便服用。","\n","^再等了一会，把鸡蛋取出，敲掉壳后露出的仍然是雪白滑嫩的蛋白。","\n","^风痕松了口气，吃下鸡蛋后再复用了药物。","\n","^去厕所洗了洗手，洗漱、并擦了下身。","\n",["ev",{"^->":"episode_1.foot_option.0.c-1.7.g-1.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^准备睡觉了。",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"episode_1.foot_option.0.c-1.7.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"episode_1.end"},{"#f":5}],"#f":5}]}],{"#f":5}]}],{"#f":1}],"end":[{"->":"episode_2"},{"#f":1}],"#f":1}],"sleeping_end":[["ev","str","^进入结局","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^【待写内容】","\n",{"#":"CLASS: end"},"^睡美人 END","\n",{"->":"ENDs"},{"#f":5}]}],{"#f":1}],"yuki_end":[["^打开衣柜后，密封空间中凝固的热气就如刚入房间时的空气一般。<br>只不过这次带着了一股衣物的潮霉味。","\n","^风痕衣柜中的衣物不多，实在不像她这年纪下女孩子的衣柜。","\n",["ev",{"^->":"yuki_end.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^风痕看了看衣柜中她最喜欢的绿色带帽外套。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"yuki_end.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^这外套已显得有点旧了，除了绿色不均匀外，还左沾了点蓝色，右沾了点紫色。","\n","^有些混起来的地方，还成了点红色。","\n","^风痕笑了笑，拿出了套自家用的衣物后，关上了衣柜。","\n",["ev",{"^->":"yuki_end.0.g-0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^风痕去厕所洗澡了。",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"yuki_end.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^风痕很难得地准备了一大缸热水，为此还花了半小时打扫了下浴缸。","\n","^脱去衣物她，照了照镜子后，苦笑地挠了挠头。","\n","^浸入了热水中。","\n","^………………","\n",["ev",{"^->":"yuki_end.0.g-1.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^风痕在热气中静静地望着天花板。",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"yuki_end.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^风痕似乎很享受这段宁静的时间，她望着这雾中的水珠们成群结队地往上升。","\n","^风痕耳边似乎渐渐有了点声音，是小时候便在一起玩的近邻朋友们打闹的笑声。","\n","^幼儿园时他们经常一起东跑西跳，小学时也总是去大家家里一起玩…………","\n","^风痕苦笑了声，但与之前相比似乎有点无力。","\n",["ev",{"^->":"yuki_end.0.g-2.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^风痕想起了以前去朋友家联机玩对战游戏","<>",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"yuki_end.0.g-2.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n","^，因为太屎而被大家争着击杀，排名一出后是全员垫底的日子。","\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^但即便如此，风痕还是很开心。","\n","^风痕嘀咕：<br>至少那时……还有人约我出去玩……","\n","^但也不知道，大家是不是因为自己不想当垫底才极力邀请她就是了。","\n","^风痕耳边的笑声愈渐愈远，就像那些水珠一般，升走了。","\n",["ev","str","^进入结局","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^获得病历条目：【第XX条←我不知道有几个结局，现在大概就第2条吧】 不要冲热水凉、泡热水澡。","\n",{"#":"CLASS: end"},"^汤化雪 END","\n",{"->":"ENDs"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"butterfly_end":[["^【待写内容】","\n","ev","str","^进入结局","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^【待写内容】","\n",{"#":"CLASS: end"},"^羽化梦 END","\n",{"->":"ENDs"},{"#f":5}]}],{"#f":1}],"episode_2":[{"->":"ENDs.nfy"},{"#f":1}],"ENDs":[{"#":"CLASS: end"},"^游戏结束","\n",{"->":".^.rest"},{"nfy":[{"#":"CLASS: end"},"^游戏尚未结束，但文字已结束。","\n",{"->":"ENDs.rest"},{"#f":1}],"rest":[["ev","str","^再次进行游戏","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"#":"RESTART"},{"->":"start"},{"#f":5}]}],{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"poping"},"/ev","end",null],"#f":1}],"listDefs":{}};