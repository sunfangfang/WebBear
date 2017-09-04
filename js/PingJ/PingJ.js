/**
 * Created by y on 2016/3/22.
 */
$(function(){
    $('.pj_link li').each(function(i){
        $(this).data('index',i)
    });
    $('.pj_link li').click(function(){
        $('.pj_link li').css({
            border:"1px solid #fff",
            borderBottom:"1px solid #c5c8cf",
            background:"#fff",
			color:"#6c6c6c"
        })
        $(this).css({
            border:"1px solid #c5c8cf",
            borderBottom:"1px solid #f9f9f9",
            background:"#f9f9f9",
			color:"#212121"
        })
        $('.pj_conblock').css("display","none");
        var i = $(this).data('index');
        $($('.pj_conblock')[i]).css("display","block");


    })
})
