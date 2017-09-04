// JavaScript Document
 $(window).load(function(){
   $(function(){
	   var con=$(".hide1");
	   con.hide();
	   $(".Mspan").click(function(){
		   if(con.is(":visible")){
			 con.slideUp(); 
			 $(".Mp").text("查看页面").removeClass("Mspan1");
			 $(".Mdivimg").slideUp(700);
			 $(".Mpfont0").text("客户编号：A20160211"); 
			 $(".Mpfont0").css({"padding-left":20,"font-size":16,"color":"#808080"});
			 $(".Mpfont1").css({"display":"block"}); 
		   }
		   else{
			con.slideDown();
			$(".Mp").text("收起").addClass("Mspan1");
			$(".Mdivimg").slideDown(350);
			$(".Mpfont0").text("基本信息");
			$(".Mpfont0").css({"padding-left":20,"font-size":16,"color":"#808080"});
		    $(".Mpfont1").css({"display":"none"});
			}
	    });
      /*tab切换*/
      $(function(){
		$(".Mulo1").find("li").eq(0).addClass('lineborder');	
	    $(".Mdivw").not(".Mdivw:first").hide();
		$(".Mulo1").find("li").click(function(){
		   $(this).addClass("lineborder").siblings().removeClass("lineborder");
		   $(this).find("a").addClass("acolorp1");
		   $(this).find("a").parent().siblings().children().removeClass("acolorp1");
		   $(".Mdivw").eq($(this).index()).show().siblings().hide();
	       }); 
      });
  });
	// 拍照礼服显示更多
	 $(function(){
		 var con1=$("#sy_yc");
		 con1.hide();
		 $(".spanpp1").click(function(){
			 if($("#sy_yc").is(":visible")){
				 con1.slideUp();
				 $(".spanpp1").text("查看页面").removeClass("spanapp2");
			 }
			 else{
				 con1.slideDown();
				 $(".spanpp1").text("收起更多").addClass("spanapp2");
			 }
		 });
	 })
  /**/
  $(function(){
	  $(".pposi").css({"display":"none"});
	  $(".Mdivimgs").mouseover(function(){
		  $(this).css({"border":"4px solid #b2b2b2"});
		  $(this).children(".pposi").css({"display":"block"});
	  }).mouseout(function(){
		  $(this).css({"border":"none"});
		  $(this).children(".pposi").css({"display":"none"});
	  });
  });
  //文字修改
   $(function(){
	  /*input悬浮1*/
	  $(".formd1").find("input").css({"background":"#f9f9f9"});
	  $(".formd1 p").mouseover(function(){
		  $(this).addClass("bgs");
	  }).mouseout(function(){
		  $(this).removeClass("bgs");
	  });
	  /*input悬浮2*/
	  $(".formd").find("input").css({"background":"#f9f9f9"});
	  $(".formd p").mouseover(function(){
		  $(this).addClass("bgs");
	  }).mouseout(function(){
		  $(this).removeClass("bgs");
      });
  });
  /*forms1*/
  $(function(){
	  $(".forms1").find("input").focus(function(){
		  $(this).parent("p").addClass("pbg");
	  }).blur(function(){
		   $(this).parent("p").removeClass("pbg");
		   $(this).css({"background":"#fff"});
      });
	   $(".forms1").find("input").focus(function(){
		  $(this).parent("p").addClass("pbg");
	  }).blur(function(){
		   $(this).parent("p").removeClass("pbg");
		   $(this).css({"background":"#fff"});
      });
	   $(".forms2").find("input").focus(function(){
		  $(this).parent("p").addClass("pbg");
	  }).blur(function(){
		   $(this).parent("p").removeClass("pbg");
      });
  });
  /*input得到焦点li时有背景*/
   $(function(){
	   $(".Mdivd").find("input").focus(function(){
		   $(this).css({"background":"#f3f3f3"});
		   $(this).closest("li").css({"background":"#f3f3f3"});
	   });
	   $(".Mdivd").find("input").blur(function(){
		   $(this).css({"background":"#fff"});
		   $(this).closest("li").css({"background":"#fff"});
		})
   });   
   /*背景悬浮*/
/*   $(function(){
	   $(".img1").mouseover(function(){
		   $(".prev").css({"display":"block"}); 
		   $(".next").css({"display":"block"}); 
	   }).mouseout(function(){
		    $(".prev").css({"display":"none"}); 
		    $(".next").css({"display":"none"}); 
		});
   });*/
   $(function(){
	   $(".Mlabel").click(function(){
		   $(this).find(".yuanS").toggleClass("yuanS01");
	   });
   });
$(function(){
	$(".tb_sx").mouseover(function(){
		$(this).children('ul').show();
		});
	$(".tb_sx").mouseout(function(){
		$(this).children('ul').hide();
		});
//		$(".tb_sx_px li a").click(function(){
//			$(".tb_sx_px li a").removeClass('tb_sx_bg');
//			$(this).addClass('tb_sx_bg');
//			});          //筛选功能需要选中状态时候开启
	$(".tb_bj_btn").mouseover(function(){
		$(this).children('div').show();
		});
	$(".tb_bj_btn").mouseout(function(){
		$(this).children('div').hide();
		});
	$(".tb_bj a").click(function(){
		$(this).parentsUntil('table tbody').remove();
		});
	});

<!--table选中状态 -->
$(document).ready(function(){
	$('table tbody tr:odd').addClass('mtr_bg');
	$(".table tbody tr").click(function(){
		$('table tbody tr').removeClass('mtr_bg_act');
		$('table tbody tr:odd').addClass('mtr_bg');
		$(this).removeClass('mtr_bg');
		$(this).addClass('mtr_bg_act');
		});
	});
	
  });