"use strict";function CART_FEATURE(){this.dataUrl="/api/cart.ashx"}CART_FEATURE.prototype={delItem:function(t,e){$.post(this.dataUrl+"&B1=DEL&MODEL="+t+"&SPEC="+e,function(n){return console.log(n),"OK"==n.RS&&console.log("del this item success : MODEL = "+t+",SPEC = "+e),n})},addItem:function(t,e){$.post(this.dataUrl+"&B1=ADD&MODEL="+t+"&SPEC="+e,function(n){return console.log(n),"OK"==n.RS&&console.log("add this item success : MODEL = "+t+",SPEC = "+e),n})},getList:function(){$.post(this.dataUrl,function(t){return"OK"==t.RS,t})},getTest:function(){var t={};return t.RS="OK",console.log("test OK"),t}};var rentCart=new CART_FEATURE;!function(){function t(t,e){var n=0,i=0,c=0;t<e[0]?($(".product-nav li").removeClass("is-active").eq(0).addClass("is-active"),n=0,i=0):t>e[e.length-1]?($(".product-nav li").removeClass("is-active").eq(e.length-1).addClass("is-active"),n=$(".product-nav li").eq(e.length-1).offset().left,i=$(".product-nav").scrollLeft()):$.each(e,function(c,a){t>a&&t<e[c+1]&&($(".product-nav li").removeClass("is-active").eq(c).addClass("is-active"),n=$(".product-nav li").eq(c).offset().left,i=$(".product-nav").scrollLeft())}),c=n+i,$(".product-nav").stop(!0,!1).animate({scrollLeft:c},400)}function e(t,e,n){return p.replace(/\{+(PNAME)+\}/g,t).replace(/\{+(PSPEC)+\}/g,e).replace(/\{+(PIMGURL)+\}/g,n)}function n(t,e){var n="目前沒有商品";void 0!=e&&(n=e),0==t.length?($(".list-quick-cart").html('<li class="msg-empty">'+n+"</li>"),$(".quick-cart").find(".style-btn").addClass("style-disabled")):$(".quick-cart").find(".style-btn").removeClass("style-disabled")}function i(t){return g.replace(/\{+(CNAME)+\}/g,t)}function c(t,e,n,i,c,a,o,s){return v.replace(/\{+(PNAME)+\}/g,t).replace(/\{+(PSPEC)+\}/g,e).replace(/\{+(IMGURL)+\}/g,n).replace(/\{+(LINKURL)+\}/g,i).replace(/\{+(DAYPRICE)+\}/g,c).replace(/\{+(BONDPRICE)+\}/g,a).replace(/\{+(ORIGINPRICE)+\}/g,o).replace(/\{+(STOCK)+\}/g,s)}function a(t,e){$.each(t,function(t,n){e[t]={},e[t].name=n.MODEL,e[t].spec=n.SPEC,e[t].imgurl=n.IMAGE,e[t].dayprice=n.PRICE,e[t].bondprice=n.PRICE_YA})}function o(t){t.length&&$(".list-quick-cart").html(""),$.each(t,function(i,c){$(".list-quick-cart").append(e(c.name,c.spec,c.imgurl)),n(t)})}function s(t,e,n){$.each(t,function(t,i){e[t]={},e[t].type=i.TYPE,e[t].name=i.MODEL,e[t].spec=i.SPEC,e[t].imgurl=i.IMAGE,e[t].linkurl=i.LINK,e[t].dayprice=numberWithCommas(i.PRICE),e[t].bondprice=numberWithCommas(i.PRICE_YA),e[t].originprice=numberWithCommas(i.PRICE_SALE),e[t].stock=i.QTY,n[i.TYPE].push(e[t])})}function r(e,n,a){e.length&&$(".section-product .inner-wrap").html(""),$.each(n,function(t,e){var n=R[t],o=t+1;e.length>0&&($(".product-nav ul").append("<li>"+n+"</li>"),$(".section-product .inner-wrap").append(i(n)),$(".section-product .inner-wrap").find(".wrap-category:last-child").attr("data-index",o),b.push($(".section-product .inner-wrap").find(".wrap-category:last-child").offset().top),$.each(e,function(t,e){if($(".section-product .inner-wrap").find(".wrap-category[data-index="+o+"] .list-product").append(c(e.name,e.spec,e.imgurl,e.linkurl,e.dayprice,e.bondprice,e.originprice,e.stock)),e.stock>0){var n=C;$.each(a,function(t,i){i.name==e.name&&i.spec==e.spec&&(n=k)})}else var n=E;$(".section-product .inner-wrap").find(".wrap-category[data-index="+o+"] .item-product:last-child .btn-wrap").prepend(n)}))}),t($(window).scrollTop(),b),$(".product-nav li").each(function(t,e){var n=$("#header").height(),i=$(".product-nav").height(),c=parseInt(n)+parseInt(i)+10;$(this).on("click",function(e){$("html,body").animate({scrollTop:b[t]-c},800)})})}function l(){$.getJSON("data/mycart.json",function(t,e){if("OK"==t.RS)a(t.PRODUCTS,q);else{var n=t.RS;$(".list-quick-cart").html('<li class="msg-empty">'+n+"</li>"),$(".quick-cart").find(".style-btn").addClass("style-disabled")}}).success(function(){console.log("get json success!"),o(q);var t=$("[name=rent_day_count]").val();printPTable(q,t)}).fail(function(){console.log("get json fail!")}).done(function(){console.log("get json done!")})}function u(){var t=[];$.getJSON("data/product.json",function(e,n){if("OK"==e.RS)s(e.DATA,t,y);else{e.RS}}).success(function(){console.log("get product json success!"),r(t,y,q)}).fail(function(){console.log("get product json fail!")}).done(function(){console.log("get product json done!")})}var p=$(".header-template").find(".template-quickcart").html(),d=$(".quick-cart").find("input[name=user_maximum]").val(),m=$(".quick-cart").find("input[name=total_maximum]").val();d=parseInt(d),m=parseInt(m);var f=$(".section-product").length>0?$(".section-product").find(".intro").html().replace(/\{+(MAX)+\}/g,m):0,h=$(".section-product").length>0?$(".section-template").find(".template-msg-maximum").html().replace(/\{+(MAX)+\}/g,m):0,g=($(".section-product").length>0?$(".section-template").find(".template-msg").html():0,$(".section-product").length>0?$(".section-template").find(".template-category").html():0),v=$(".section-product").length>0?$(".section-template").find(".template-product").html():0,C=$(".section-product").length>0?$(".section-template").find(".template-btn-addcart").html():0,E=$(".section-product").length>0?$(".section-template").find(".template-btn-outstock").html():0,k=$(".section-product").length>0?$(".section-template").find(".template-btn-incart").html():0;$(".quick-cart").find("input[name=user_maximum]").remove(),$(".quick-cart").find("input[name=total_maximum]").remove(),$(".header-template").find(".template-quickcart").remove(),$(".section-template").find(".template-category").remove(),$(".section-template").find(".template-product").remove(),$(".section-template").find(".template-btn-addcart").remove(),$(".section-template").find(".template-btn-outstock").remove(),$(".section-template").find(".template-btn-incart").remove(),$(".section-template").find(".template-msg-maximum").remove(),$(".section-product").find(".intro").html(f),$(".section-template").find(".template-ptable").remove(),$(".section-product").length>0;var q=[],y=[],b=[],R=["","變焦鏡","定焦鏡","轉接鏡","增距鏡"];if($.each(R,function(t,e){y[t]=[]}),l(),$(".section-product").length>0&&u(),$(".quick-cart").on("click",".btn-x",function(t){var e=$(this).closest(".item-quick-cart").find(".name").text(),i=$(this).closest(".item-quick-cart").find(".spec").text();console.log("del this item : MODEL = "+e+",SPEC = "+i);var c=rentCart.getTest();"OK"==c.RS?($(".item-product").each(function(t,n){$(n).find(".name").text()==e&&$(n).find(".spec").text()==i&&$(n).find(".btn-wrap").find(".style-btn").replaceWith(C)}),$(this).closest(".item-quick-cart").addClass("style-fade").slideUp(300,function(){$(this).remove().queue(function(){n($(".item-quick-cart")),$(this).dequeue()})})):popAlert(c.RS)}),$("body").on("click",".btn-rent",function(t){var i=$(this).closest(".item-product").find(".name").text(),c=$(this).closest(".item-product").find(".spec").text(),a=$(this).closest(".item-product").find(".img").attr("style");console.log("add cart : name = "+i+" , myspec =  "+c);var o=rentCart.getTest();"OK"==o.RS?$(".item-quick-cart").length<d?($(this).closest(".item-product").find(".btn-wrap").find(".style-btn").replaceWith(k),$(".btn-cart").queue(function(){$(".list-quick-cart").find(".msg-empty").remove(),$(".list-quick-cart").append(e(i,c,"")).find(".item-quick-cart:last-child .img").attr("style",a),n($(".item-quick-cart")),$(this).dequeue()}).queue(function(){$(".btn-cart").addClass("is-active"),$(this).dequeue()}).delay(1e3).queue(function(){$(".btn-cart").removeClass("is-active"),$(this).dequeue()})):popAlert(h):popAlert(o.RS)}),$(".section-product").length>0){var P=0,S=$(".style-stick").offset().top;$(window).scroll(function(){var e=$(this).scrollTop(),n=$(window).height(),i=e+n/2;e>S?$(".style-stick").addClass("is-stick"):$(".style-stick").removeClass("is-stick"),t(i,b),P=e}),$(window).resize(function(){$(".wrap-category").each(function(t,e){b[t]=$(e).offset().top})})}}();