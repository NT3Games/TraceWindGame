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

风痕小声：<br>「……离地面，越来越近了」

风痕不觉意地又抱了抱小屎屎。

<br>

+   房间如梦般漆黑

-   窗外传来的轻拍声盖过了秒针的行走声。

是夜雨。

风痕不敢闭眼——只怕会离地面越来越近。

小屎屎望着风痕，风痕又望着天花板。

雨声。

<br>

风痕右手搭在了额头上，虚弱：<br>「……做点什么吧」

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

+   无意识地拿起手机

-   自己还没反应过来，就点了屏幕最下面一行左数第二个图标
-   「Telegram」

+   🔞NSFW⚠️🖼 9️⃣

-   一屏幕的黄图
-   风痕心如止水

+   绘画群 2⃣️1⃣️9⃣️

-   那个高中生又在发自己的画了
-   画得马马虎虎，但比自己强
-   这样的完成度，自己得画一周
-   「怎么能每天画这么多都不累？」

+   朋友换头像了

-   风痕点进朋友的个人页面

+   「0 group in common」

-   风痕曾经拉这个朋友进一个动物之森群
-   动物之森热度下降，这个群也不可避免地变成了水群
-   风痕活跃在这个群里
-   朋友一直在群里，但很久没发言了

+   「原来她一直有在看吗？」

-   她为什么要退群？
-   是因为我吗？
-   我发的表情太多了？
-   说的话太无聊？

+   心烦意乱

-   Youtube、Telegram、Instagram、Reddit……
-   知乎、微博、哔哩哔哩、S1
-   一个个打开
-   划拉两下，全都无聊透顶

+   「啧」

-   风痕讨厌这样
-   风痕想当个创作者
-   最不起眼的创作，也强过消费
-   人不应该遗世独立
-   人应该让自己的真诚与世界碰撞

+   「这句不错，发到频道里吧」

-   风痕满足了

+   「起床吧」
-

-> episode_2.stage_2



= stage_2

VAR stage_2_pooping = false

// +   【出门】
//     -> episode_2.stage_2_go_out_content
+   {stage_2_pooping == false} 【拉屎】
    -> episode_2.stage_2_poop_shit_content
+   【画画】
    -> episode_2.stage_2_draw_content



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



= stage_2_poop_shit_content

~ poop_shit_number += 1

~ stage_2_pooping = true

【一个厕所事件】

{ poop_shit_number == 2 :
+   使用马桶吸
    -> stage_2_rei_ichi_content
}
+   冲水
    -> episode_2.stage_2


= stage_2_rei_ichi_content

【待写内容】

【零一之间】

-> ENDs.nfy



= stage_2_draw_content

【待写内容】

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

【待写内容】

【落魂魄 END】

【放松心态，面对一切】

-> ENDs.nfy



=== void_end ===

【待写内容】

【堕虚无 END】

-> ENDs.nfy
