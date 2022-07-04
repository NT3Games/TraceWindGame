=== episode_2 ===

// 这里是第二天的内容
// 简介：坠落醒来。窗外下雨，不知几点。

+   一声裂痕。

-   从四周而来，延至风痕。

    风痕紧抱小屎屎——

    坠

    落

    了

    。

    <br>

    ……………………

    ………………

    …………

    ……

    <br>

+   咳！

-   唾沫与冷汗沾到小屎屎公仔上。

    风痕又咳了两声才停下。

    风痕小声：<>
    <br>「……离地面，越来越近了」

    风痕不觉意地又抱了抱小屎屎。

    <br>

+   房间如梦般漆黑

-   窗外传来的轻拍声盖过了秒针的行走声。

    是夜雨。

    风痕不敢闭眼——只怕会离地面越来越近。

    小屎屎望着风痕，风痕又望着天花板。

    雨声。

    <br>

    风痕右手搭在了额头上，虚弱：<>
    <br>「……做点什么吧」

-> episode_2.stage_1



= stage_1

+   上个厕所
    // 【起床】
    -> episode_2.stage_1_get_up_content
+   玩手机
    // 【赖床】
    -> episode_2.stage_1_sleep_in_content




= stage_1_get_up_content

【关于起床的待写内容】

-> heart_end



= stage_1_sleep_in_content

// 简介：去群里看投稿，更新频道，发现有熟人退群，朋友离去

    手机又不觉地跑到风痕手上。
    ——它总是那么爱粘人。

    风痕眼朦胧，手迷离。
    却任由肌肉点开常去的群。

    这个群，是开创频道时建立的。
    那个群，是组团开黑而开设的。
    隔壁的群，是为了直播粉丝交流。
    而之后要去的群，是风痕的网络社团。

+   它们都承载着风痕的人生

-   为什么她销号了呢？<>

    <br>为什么没人找我聊天？<>
    <br>为什么他要退出群组呢？<>
    <br>为什么大家要退订频道？<>
    <br>为什么订阅后不来看呢？<>
    <br>为什么没人看我的直播呢？<>
    <br>为什么没人来群里说话呢？<>
    <br>为什么没人来找我玩游戏？<>
    <br>为什么我全身上下都是病呢？<>
    <br>为什么渡鸦要跑去美国读书呢？<>
    <br>为什么父母要大吼大叫离婚呢？

+   为什么只有我这么倒霉呢？

-   <>

+   为什么大家都不喜欢我呢？

-   <>

+   为什么我什么都做不到呢？

-   是因为我吗？

    是因为我吗？

    是因为我吧……



    风痕关上手机，手臂敷在前额。

    叹了口气。

    夜雨。

    ……………………………………

    …………………………

    ………………



    深夜的 Telegram 是没有消息的。

    风痕深知这点。

    左点右戳，无非使她更心烦意乱。



+   风痕点开了音乐

    风痕是随便选的，她其实没有特别想听的歌。

    只是希望有什么声音作伴。

    就像沙漠上的商人，总会给骆驼系个铃铛。

    …………………………

    ………………

    …………


-> episode_2.stage_2



= stage_2

VAR stage_2_pooping = false

// +   【出门】
//     -> episode_2.stage_2_go_out_content
+   {stage_2_pooping == false} 【拉屎】
    -> episode_2.stage_2_poop_shit_content
+   【画画】
    -> episode_2.stage_2_draw_content







= stage_2_poop_shit_content

~ poop_shit_number += 1

~ stage_2_pooping = true

    『人呐，绝不能不拉屎』<>
    <br>风痕半笑着说出这句话。

    风痕坐在马桶上，酝酿着屎意。

+   她总是很享受拉屎的时间

-   静谧、可控、不被打扰。

    这密闭空间就像她的秘密基地，一个可随手创造与随时逃避的安全屋。

    学校的午餐时间，多是在隔间里进行。

    家中起争执时，也是在厕所中度过。

    医院独自一人，除了去厕所，无处可去。

    洗洁精的气味，肥皂和尿酸味反而让风痕得到安心。

+   风痕抬头看天花板

-   又正视挂在门后的毛巾，再看了看没有粘有一滴水的浴缸。

    风痕：<>
    <br>『让你们独自在家，真是抱歉』

    风痕总是把厕所中的一切都当作自己的挚友，无话不谈。

    ………………………………

    ……………………

    …………

+   风痕什么都没有拉出来

-   正准备冲水时，马桶里竟然有着一坨屎。

    『来开派对吧』

    不知从哪来的声音。

    『来开屎屎派对吧』

    是浴缸在说话。

    『吃掉它吧』

    是毛巾在说话。

    『这是我的』

    是马桶在说话。

    『那可是美味佳肴』

    是毛巾在抢答。

    『捞起再说吧』

    是浴缸在建议。

+   呜…！

-   风痕头很痛，左手抓着左脑。

    她强忍着。

    往桶里细看，是小屎屎。

{ poop_shit_number == 2 :
+   捞起
    -> stage_2_trad_content
}
+   冲水
    -> episode_2.stage_2


= stage_2_trad_content

【待写内容】

【零一之间】

-> ENDs.nfy



= stage_2_draw_content

    风痕喜欢画画。

    这是大家对风痕的印象。



    但风痕谈不上喜欢画。

    她搞不懂那些被奉为艺术的画作，也不会特意保存自己喜欢的画作。

    风痕也没有特意学过画画。

    她画过的画，几乎都只在教材上。



    但有好一张是特意用画纸画的。

    一张是小时候涂的全家福，画上的三人笑着，手牵着手。

    连带的还有父亲笑着摸她头的触感，还有母亲在一旁握着她的手一起画气味。



    只是，这画早已在多次搬家中遗失了。



    风痕：<>
    <br>上次画画，究竟是多久以来的事呢



    风痕从床下摸出了架、纸、笔。<>
    <br>又掏出了颜料和水桶。

    这些来自于生日的礼物，挤满了灰。

    光是把架与纸立起，便耗去了风痕的力气。

    坐在木凳上的风痕，胸口彼伏。

+   认真画
    -> lost_soul_end
+   随心画

    【待写内容】

    【待写内容】

+   +   【待写内容】
        -> episode_2.stage_3



= stage_3

VAR draw = 0

【上色选择】


{ draw:
-   0:
    +   黄色 -> draw_yellow
    +   红色 -> draw_rad
    +   蓝色 -> draw_blue
-   1:
    +   红色 -> draw_rad
    +   蓝色 -> draw_blue
-  10:
    +   黄色 -> draw_yellow
    +   蓝色 -> draw_blue
-  11:
    +   蓝色 -> draw_blue
    +   就这样！ -> draw_done
- 100:
    +   黄色 -> draw_yellow
    +   红色 -> draw_rad
- 101:
    +   红色 -> draw_rad
    +   就这样！ -> draw_done
- 110:
    +   黄色 -> draw_yellow
    +   就这样！ -> draw_done
- 111:
    +   就这样！ -> draw_done
- else: 错误 -> episode_1
}

= draw_yellow
~   draw += 1
-> episode_2.stage_3

= draw_rad
~   draw += 10
-> episode_2.stage_3

= draw_blue
~   draw += 100
-> episode_2.stage_3

= draw_done
-> episode_2.stage_4



= stage_4

【待写内容】

-> episode_2.stage_4_option



= stage_4_option

+   直播
    -> episode_2.stage_4_livestream_content
+   出门
    -> episode_2.stage_4_go_out_content



= stage_4_livestream_content

【弹幕判断】

【此处的逻辑暂时搁置】

-> ENDs.nfy



= stage_4_go_out_content

【待写内容】

{ draw:
-  11: -> episode_2.stage_4_blood_c_content
- 101: -> episode_2.stage_4_hanada_content
- 110: -> episode_2.stage_4_icu_content
- 111: -> episode_2.stage_4_shit_content
- else:
    +   错误 -> episode_1
}



= stage_4_icu_content

【ICU】

【蓝色真实：梦醒时分】

-> ENDs.nfy



= stage_4_hanada_content

【星空向日葵田】

【蓝色真实：恒爱星葵】

-> ENDs.nfy



= stage_4_blood_c_content

【血海】

【蓝色真实：极乐之海】

-> ENDs.nfy



= stage_4_shit_content

【小屎屎】

~ temp entries = get_entries()

{ LIST_COUNT(entries) == 5 :
    Happy END

    -> ENDs.nfy
}


-> spy_eye_end





=== heart_end ===

~ unlock_entries(entry_belly)

# CLASS: game_end
心吐胆 END

<br>

# CLASS: tips_title
获得条例

# CLASS: tips_text
{entry_text(entry_belly)}

-> bite_the_dust



=== spy_eye_end ===

【待写内容】

【窥窗眼 END】

-> ENDs.nfy



=== lost_soul_end ===

    草稿。

    这是每幅画必将经历的第一步。



    笔铅落下，刮过纸面。

    点与点与点，线和线和线，面同面同面。

    轻抚与重压，嫩白的纸面承受着这一切。



    在纸面的一声声呻吟下，风痕突然停手。

    风痕：<>
    <br>好难看……重画吧……



    风痕将纸揉成一团，纸又发出被蹂躏的娇喘。



    风痕重画，又将纸重揉。

    风痕：<>
    <br>为什么我画的画这么难看…………



    ………………………………

    ……………………

    …………



    风痕身后的垃圾桶已被纸淹没。

    风痕上气接不到下气，却只见风痕下的笔越来越快，力度越来越大。

    纸上一道道痕，都被迫发出一阵又一阵的呻吟。



    啪。

    芯断了，风痕也走了。

~ unlock_entries(entry_paper)

# CLASS: game_end
纸之痕 END

<br>

# CLASS: tips_title
获得条例

# CLASS: tips_text
{entry_text(entry_paper)}

-> bite_the_dust



=== void_end ===

【待写内容】

【堕虚无 END】

-> ENDs.nfy



// 废弃部分

// ## 赖床

// +   无意识地拿起手机

// -   自己还没反应过来，就点了屏幕最下面一行左数第二个图标
// -   「Telegram」

// +   🔞NSFW⚠️🖼 9️⃣

// -   一屏幕的黄图
// -   风痕心如止水

// +   绘画群 2⃣️1⃣️9⃣️

// -   那个高中生又在发自己的画了
// -   画得马马虎虎，但比自己强
// -   这样的完成度，自己得画一周
// -   「怎么能每天画这么多都不累？」

// +   朋友换头像了

// -   风痕点进朋友的个人页面

// +   「0 group in common」

// -   风痕曾经拉这个朋友进一个动物之森群
// -   动物之森热度下降，这个群也不可避免地变成了水群
// -   风痕活跃在这个群里
// -   朋友一直在群里，但很久没发言了

// +   「原来她一直有在看吗？」

// -   她为什么要退群？
// -   是因为我吗？
// -   我发的表情太多了？
// -   说的话太无聊？

// +   心烦意乱

// -   Youtube、Telegram、Instagram、Reddit……
// -   知乎、微博、哔哩哔哩、S1
// -   一个个打开
// -   划拉两下，全都无聊透顶

// +   「啧」

// -   风痕讨厌这样
// -   风痕想当个创作者
// -   最不起眼的创作，也强过消费
// -   人不应该遗世独立
// -   人应该让自己的真诚与世界碰撞

// +   「这句不错，发到频道里吧」

// -   风痕满足了

// +   「起床吧」
// -

// ========================================================================================

// ## 【出门】选项

// = stage_2_go_out_content

// 【待写内容】

// {
// -   go_out_number < 3:
//     +   【门打不开】
//         ~ go_out_number += 1
//         -> episode_2.stage_2
// -   go_out_number == 3:
//     +   【门打开了】
//         -> spy_eye_end
// -   else:
//     +   程序错误，跳转到 episode 2 stage 2
//         -> episode_2.stage_2
// }
