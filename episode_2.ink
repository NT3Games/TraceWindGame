=== episode_2 ===

// 这里是第二天的内容

【坠落醒来。】

【窗外下雨，不知几点。】

【待写内容】

-> episode_2.stage_1



= stage_1

+   【起床】
    -> episode_2.stage_1_get_up_content
+   【赖床】
    -> episode_2.stage_1_sleep_in_content




= stage_1_get_up_content
    
【关于起床的待写内容】

-> heart_end



= stage_1_sleep_in_content

 【关于赖床的待写内容】

【去群里看投稿，更新频道。】

【发现有熟人退群，朋友离去。】

-> episode_2.stage_2



= stage_2

VAR stage_2_pooping = false

+   【出门】
    -> episode_2.stage_2_go_out_content
+   {stage_2_pooping == false} 【拉屎】
    -> episode_2.stage_2_poop_shit_content
+   【画画】
    -> episode_2.stage_2_draw_content



= stage_2_go_out_content

【待写内容】

{
    -   go_out_number < 3:
        +   【门打不开】
            ~ go_out_number += 1
            -> episode_2.stage_2
    -   go_out_number == 3: 
        +   【门打开了】
            -> spy_eye_end
    -   else:
        +   程序错误，跳转到 episode 2 stage 2
            -> episode_2.stage_2
}



= stage_2_poop_shit_content

~ poop_shit_number += 1

~ stage_2_pooping = true

【一个厕所事件，暗示多个风痕的存在】

【道具：马桶吸的逻辑待写】

-> episode_2.stage_2



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

VAR draw_yellow = false
VAR draw_red = false
VAR draw_blue = false
VAR draw_completed = false

 { draw_completed == false }【上色选择】

 { draw_completed == true }【就这样！】

+   { draw_yellow == false } 黄色
    ~   draw_yellow = true
    ~   draw_completed = true


    -> episode_2.stage_3
+   { draw_red == false } 红色
    ~   draw_red = true
    ~   draw_completed = true


    -> episode_2.stage_3
+   { draw_blue == false } 蓝色
    ~   draw_blue = true
    ~   draw_completed = true

    -> episode_2.stage_3
+   { draw_completed == true }【就这样！】




    -> episode_2.stage_3



= stage_4

【待写内容】

-> stage_4_option



= stage_4_option

+   直播
    -> stage_4_livestream_content
+   出门
    -> stage_4_go_out_content


= stage_4_livestream_content

【弹幕判断】

【此处的逻辑暂时搁置】

-> ENDs.nfy



= stage_4_go_out_content

【待写内容】

【此处内容稍后书写】

-> ENDs.nfy






=== heart_end ===

~ unlock_entries(entry_belly)
    
# CLASS: game_end
心吐胆 END

<br>

# CLASS: tips_title
获得条例

# CLASS: tips_text
{entry_text(entry_belly)}

-> bite_the_dust.heart




=== spy_eye_end ===

【待写内容】

【窥窗眼 END】

【道具：马桶吸（皮搋子）】

-> ENDs.nfy



=== lost_soul_end ===

【待写内容】

【落魂魄 END】

【放松心态，面对一切】

-> ENDs.nfy























