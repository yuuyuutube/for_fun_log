"use strict";!function(){function e(e){return a.replace("{CNAME}",e)}function t(e,t,n,a,i,o,r){return c.replace("{PNAME}",e).replace("{PSPEC}",t).replace("{IMGURL}",n).replace("{LINKURL}",a).replace("{DAYPRICE}",i).replace("{BONDPRICE}",o).replace("{ORIGINPRICE}",r)}function n(){var n=[],a=["","變焦鏡","定焦鏡","轉接鏡","增距鏡"];$.each(a,function(e,t){n[e]=[]});var c=[];$.getJSON("data/product.json",function(e,t){if("OK"==e.RS)$.each(e.DATA,function(e,t){c[e]={},c[e].type=t.TYPE,c[e].name=t.MODEL,c[e].spec=t.SPEC,c[e].imgurl=t.IMAGE,c[e].linkurl=t.LINK,c[e].dayprice=numberWithCommas(t.PRICE),c[e].bondprice=numberWithCommas(t.PRICE_YA),c[e].stock=e%4,c[e].originprice=numberWithCommas(1e3*e+100),n[t.TYPE].push(c[e])});else{e.RS}}).success(function(){console.log("get product json success!"),c.length&&$(".section-product .inner-wrap").html(""),$.each(n,function(n,c){var p=a[n],l=n+1;c.length>0&&($(".product-nav ul").append("<li>"+p+"</li>"),$(".section-product .inner-wrap").append(e(p)),$(".section-product .inner-wrap").find(".wrap-category:last-child").attr("data-index",l),s.push($(".section-product .inner-wrap").find(".wrap-category:last-child").offset().top),$.each(c,function(e,n){if($(".section-product .inner-wrap").find(".wrap-category[data-index="+l+"] .list-product").append(t(n.name,n.spec,n.imgurl,n.linkurl,n.dayprice,n.bondprice,n.originprice)),n.stock>0){var a=i;$.each(myCartItem,function(e,t){t.name==n.name&&t.spec==n.spec&&(a=r)})}else var a=o;$(".section-product .inner-wrap").find(".wrap-category[data-index="+l+"] .item-product:last-child .btn-wrap").prepend(a)}))})}).fail(function(){console.log("get product json fail!")}).done(function(){console.log("get product json done!")})}var a=$(".section-template").find(".template-category").html(),c=$(".section-template").find(".template-product").html(),i=$(".section-template").find(".template-btn-addcart").html(),o=$(".section-template").find(".template-btn-outstock").html(),r=$(".section-template").find(".template-btn-incart").html();$(".section-template").find(".template-category").remove(),$(".section-template").find(".template-product").remove(),$(".section-template").find(".template-btn-addcart").remove(),$(".section-template").find(".template-btn-outstock").remove();var s=[];n();var p=0,l=$(".style-stick").offset().top;$(window).scroll(function(){var e=$(this).scrollTop(),t=$(window).height(),n=e+t/2;e>l?$(".style-stick").addClass("is-stick"):$(".style-stick").removeClass("is-stick"),n<s[0]?$(".product-nav li").removeClass("is-active").eq(0).addClass("is-active"):n>s[s.length-1]?$(".product-nav li").removeClass("is-active").eq(s.length-1).addClass("is-active"):$.each(s,function(e,t){n>t&&n<s[e+1]&&$(".product-nav li").removeClass("is-active").eq(e).addClass("is-active")}),p=e}),$(window).resize(function(){$(".wrap-category").each(function(e,t){s[e]=$(t).offset().top})})}();