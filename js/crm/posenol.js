$(function(){
	 $(".Mfonts").mouseover(function(){
		 $(".Mhide").css({"display":"block"});
		 $("tbody tr").eq($(this).index()-1).addClass("colorh");
	 }).mouseout(function(){
		 $(".Mhide").css({"display":"none"});
		 $("tbody tr").removeClass("colorh");
	 });
	 $(".Mfonts1").mouseover(function(){
		 $(".mhide1").css({"display":"block"});
	 }).mouseout(function(){
		 $(".Mhide1").css({"display":"none"});
	 });
	 $(".Mfonts1").mouseover(function(){
		 $(".mhidex").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhidex").css({"display":"none"});
	 });
	  $(".Mfonts2").mouseover(function(){
		 $(".mhide2").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide2").css({"display":"none"});
	 });
	  $(".Mfonts3").mouseover(function(){
		 $(".mhide3").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide3").css({"display":"none"});
	 });
	  $(".Mfonts4").mouseover(function(){
		 $(".mhide4").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide4").css({"display":"none"});
	 });
	  $(".Mfonts5").mouseover(function(){
		 $(".mhide5").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide5").css({"display":"none"});
	 });
	  $(".Mfonts6").mouseover(function(){
		 $(".mhide6").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide6").css({"display":"none"});
	 });
	  $(".Mfonts7").mouseover(function(){
		 $(".mhide7").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide7").css({"display":"none"});
	 });
	  $(".Mfonts8").mouseover(function(){
		 $(".mhide8").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide8").css({"display":"none"});
	 });
	  $(".Mfonts9").mouseover(function(){
		 $(".mhide9").css({"display":"block"});
	 }).mouseout(function(){
		 $(".mhide9").css({"display":"none"});
	 });

    //$(".divinput label").click(function () {
    //    //$(this).children("span").toggleClass("bgt");
    //    //$(this).children("span").toggleClass("bor");
    //    if ($(this).children("span.Mdivbg").hasClass("bgt")) {
    //        $(this).children("span.Mdivbg").removeClass("bgt");
    //        $(this).children("span.Mdivbg").removeClass("bor");
    //        console.log($(this).children("input[name='ShowColums']").attr("checked"));
    //    } else {
    //        $(this).children("span.Mdivbg").addClass("bgt");
    //        $(this).children("span.Mdivbg").addClass("bor");
    //        console.log($(this).children("input[name='ShowColums']").attr("checked"));
    //    }
    //});
});