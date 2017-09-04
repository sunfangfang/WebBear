/*** Created by y on 2016/6/13.*/
$(function(){
    $(window).load(function(){
        setLeftWidth();
    });
    $(window).resize(function(){
        setLeftWidth();
    });
    var setLeftWidth=function(){
        var aa=$(".con_mid").width()-265;
        if(kaiguan2){
            $(".left").css("width",aa);
        }

    };

    //标题右边菜单添加选中状态
    $(".pc_right li").click(function(){
        $(".pc_right li").removeClass("sel_font");
        $(this).addClass("sel_font");
        $(".search").removeClass("search_00");
        $(this).find(".search").addClass("search_00");
    });
    $(".chakan").click(function(){
        $(this).find(".search").addClass("search_00");
    });
    $(".chakan").hover(function(){
        $(this).find(".search").addClass("search_01");
    },function(){
        $(this).find(".search").removeClass("search_01");
    });


    //选项卡切换
    $(".title_link li").each(function(i){
        $(this).data("index",i);
    });
    $(".title_link li").click(function(){
        $(".title_link li").removeClass("sel_link");
        $(this).addClass("sel_link");
        var n=$(this).data("index");
        $(".link_con").removeClass("con_block_show");
        $($(".link_con")[n]).addClass("con_block_show");
    });

    //摄影师、化妆师切换
    var selectlink=function(name1,name2,name3){
        $(name1).each(function(i){
            $(this).data("index",i);
        });
        $(name1).click(function(){
            $(name1).removeClass("sel_name");
            $(this).addClass("sel_name");
            $(name2).removeClass("duibg");
            $(this).find(".circle").addClass("duibg");
            var i=$(this).data("index");
            $(name3).removeClass("con_block_show");
            $($(name3)[i]).addClass("con_block_show");
        });
    };
    selectlink(".left_li01",".circle01",".con_block01");
    selectlink(".left_li02",".circle02",".con_block02");
    selectlink(".left_li03",".circle03",".con_block03");
    selectlink(".left_li04",".circle04",".con_block04");
    selectlink(".left_li05",".circle05",".con_block05");
    selectlink(".left_li06",".circle06",".con_block06");
    selectlink(".left_li07",".circle07",".con_block07");
    selectlink(".left_li08",".circle08",".con_block08");
    selectlink(".left_li09",".circle09",".con_block09");

    //箭头切换
    //var dirShow=function(){
        var cc=$(".con_left").height();
        var dd=$(".name_tab").height();
        if(dd>cc){
            $(".dir_contain").show();
            var bb=cc-14;
            $(".con_block").css("height",bb);
        }else{
            $(".dir_contain").hide();
            $(".con_block").css("height",cc);
        }
    //};


    var direct=function(n1,n2,n3,kaiguan){
        kaiguan=true;
        $(n1).click(function(){
            $(n2).toggleClass("c_topcur");
            if(kaiguan){
                $(n3).css({"height":"auto"});
                kaiguan=false;
            }else{

                $(n3).css({"height":cc});
                kaiguan=true;
            }
        });
    };
    direct(".dir_con01",".c_bottomcur01",".con_block01","onoff01");
    direct(".dir_con02",".c_bottomcur02",".con_block02","onoff02");
    direct(".dir_con03",".c_bottomcur03",".con_block03","onoff03");
    direct(".dir_con04",".c_bottomcur04",".con_block04","onoff04");
    direct(".dir_con05",".c_bottomcur05",".con_block05","onoff05");
    direct(".dir_con06",".c_bottomcur06",".con_block06","onoff06");
    direct(".dir_con07",".c_bottomcur07",".con_block07","onoff07");
    direct(".dir_con08",".c_bottomcur08",".con_block08","onoff08");
    direct(".dir_con09",".c_bottomcur09",".con_block09","onoff09");
    


    //名字选中状态
    $(".name_tab li").click(function(){
        $(".name_tab li").removeClass("sel_name_tab");
        $(this).addClass("sel_name_tab");
    });

    //日历选中状态
    //var setbg=function(name,class1,class2,class3,class4,class5,class6){
    //    $(name).hover(function(){
    //        $(this).toggleClass(class1);
    //        $(this).find(".date_num").toggleClass(class2);
    //        $(this).find(".yingli").toggleClass(class2);
    //        //$(this).find(".yangli").toggleClass(class5);
    //    });
    //    $(name).click(function(){
    //        $(".rili tbody td").removeClass(class3);
    //        $(this).addClass(class3);
    //        $(".date_num").removeClass("sel_white01 sel_white03 sel_white05");
    //        $(this).find(".date_num").addClass(class4);
    //        $(".yingli").removeClass("sel_white01 sel_white03 sel_white05");
    //        $(this).find(".yingli").addClass(class4);
    //        $(".yangli").removeClass("sel_black02 sel_black04");
    //        $(this).find(".yangli").addClass(class6);
    //    });
    //};
    //setbg(".rili tbody td","sel_td","sel_white","sel_td01","sel_white01");
    //setbg(".rili tbody td:first-child","sel_td02","sel_white02","sel_td03","sel_white03","sel_black01","sel_black02");
    //setbg(".rili tbody td:last-child","sel_td04","sel_white04","sel_td05","sel_white05","sel_black03","sel_black04");
    //$(".rili tbody td:first-child").hover(function(){
    //    $(this).find(".yangli").toggleClass("sel_black01");
    //});
    //$(".rili tbody td:last-child").hover(function(){
    //    $(this).find(".yangli").toggleClass("sel_black03");
    //});

    //显示、隐藏日历
    var kaiguan1=true;
    $(".hide_date").click(function(){
        if(kaiguan1){
            $(".riqi").hide();
            kaiguan1=false;
            $(this).html("显示日期");
            $(".beizhu").removeClass("bz_after_hide");
        }else{
            $(".riqi").show();
            kaiguan1=true;
            $(this).html("隐藏日期");
            if(!kaiguan2){
                $(".beizhu").addClass("bz_after_hide");
                $(".riqi").addClass("rl_after_hide");
            }
        }

    });

    //显示、隐藏时间分区
    var kaiguan2=true;
    $(".hide_time").click(function(){
        if(kaiguan2){
            $(".right").hide();
            kaiguan2=false;
            $(this).html("显示时间分区");
            $(".left").css({"width":'100%'});
            if(kaiguan1){
                $(".beizhu").addClass("bz_after_hide");
                $(".riqi").addClass("rl_after_hide");
            }else{
                $(".beizhu").removeClass("bz_after_hide");
            }
        }else{
            $(".right").show();
            kaiguan2=true;
            $(this).html("隐藏时间分区");
            var bb=$(window).width()-315;
            $(".left").css("width",bb);
            $(".beizhu").removeClass("bz_after_hide");
            $(".riqi").removeClass("rl_after_hide");
        }
    });

    $(".date").click(function(){
        $(".date").removeClass("dat_act");
        $(this).addClass("dat_act");
    })






});
