"use strict";var myCartItem=[];!function(){function t(t,e,i){return c.replace(/PNAME/g,t).replace(/PSPEC/g,e).replace(/PIMGURL/g,i)}function e(t,e){var i="目前沒有商品";void 0!=e&&(i=e),0==t.length?($(".list-quick-cart").html('<li class="msg-empty">'+i+"</li>"),$(".quick-cart").find(".style-btn").addClass("style-disabled")):$(".quick-cart").find(".style-btn").removeClass("style-disabled")}function i(){$.getJSON("data/mycart.json",function(t,e){if("OK"==t.RS)$.each(t.PRODUCTS,function(t,e){myCartItem[t]={},myCartItem[t].name=e.MODEL,myCartItem[t].spec=e.SPEC,myCartItem[t].imgurl=e.IMAGE,myCartItem[t].dayprice=e.PRICE,myCartItem[t].bondprice=e.PRICE_YA});else{var i=t.RS;$(".list-quick-cart").html('<li class="msg-empty">'+i+"</li>"),$(".quick-cart").find(".style-btn").addClass("style-disabled")}}).success(function(){console.log("get json success!"),myCartItem.length&&$(".list-quick-cart").html(""),$.each(myCartItem,function(i,c){$(".list-quick-cart").append(t(c.name,c.spec,c.imgurl)),e(myCartItem)})}).fail(function(){console.log("get json fail!")}).done(function(){console.log("get json done!")})}var c=$(".header-template").find(".template-quickcart").html();$(".header-template").find(".template-quickcart").remove(),i(),$(".quick-cart").on("click",".btn-x",function(t){var i=$(this).closest(".item-quick-cart").find(".name").text(),c=$(this).closest(".item-quick-cart").find(".spec").text();console.log("del this item : MODEL = "+i+",SPEC = "+c),$(".item-product").each(function(t,e){$(e).find(".name").text()==i&&$(e).find(".spec").text()==c&&$(e).find(".btn-wrap").html('<a class="style-btn btn-rent">預約租借</a>')}),$(this).closest(".item-quick-cart").addClass("style-fade").slideUp(300,function(){$(this).remove().queue(function(){e($(".item-quick-cart")),$(this).dequeue()})})}),$("body").on("click",".btn-rent",function(e){var i=$(this).closest(".item-product").find(".name").text(),c=$(this).closest(".item-product").find(".spec").text(),s=$(this).closest(".item-product").find(".img").attr("style");console.log("add cart : name = "+i+" , myspec =  "+c),$(this).closest(".item-product").find(".btn-wrap").html('<a class="style-btn style-orange">已放入租賃車</a>'),$(".btn-cart").addClass("is-active").queue(function(){$(".list-quick-cart").append(t(i,c,"")).find(".item-quick-cart:last-child .img").attr("style",s),$(this).dequeue()}).delay(1e3).queue(function(){$(".btn-cart").removeClass("is-active"),$(this).dequeue()})})}();