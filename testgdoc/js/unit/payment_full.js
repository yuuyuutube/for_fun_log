"use strict";function CART_FEATURE(){this.dataUrl="/api/cart.ashx"}CART_FEATURE.prototype={delItem:function(t,e){$.post(this.dataUrl+"&B1=DEL&MODEL="+t+"&SPEC="+e,function(n){return console.log(n),"OK"==n.RS&&console.log("del this item success : MODEL = "+t+",SPEC = "+e),n})},addItem:function(t,e){$.post(this.dataUrl+"&B1=ADD&MODEL="+t+"&SPEC="+e,function(n){return console.log(n),"OK"==n.RS&&console.log("add this item success : MODEL = "+t+",SPEC = "+e),n})},getList:function(){$.post(this.dataUrl,function(t){return"OK"==t.RS,t})},getTest:function(){var t={};return t.RS="OK",console.log("test OK"),t}};var rentCart=new CART_FEATURE;!function(){function t(t,e){var n=0,a=0,c=0;t<e[0]?($(".product-nav li").removeClass("is-active").eq(0).addClass("is-active"),n=0,a=0):t>e[e.length-1]?($(".product-nav li").removeClass("is-active").eq(e.length-1).addClass("is-active"),n=$(".product-nav li").eq(e.length-1).offset().left,a=$(".product-nav").scrollLeft()):$.each(e,function(c,i){t>i&&t<e[c+1]&&($(".product-nav li").removeClass("is-active").eq(c).addClass("is-active"),n=$(".product-nav li").eq(c).offset().left,a=$(".product-nav").scrollLeft())}),c=n+a,$(".product-nav").stop(!0,!1).animate({scrollLeft:c},400)}function e(t,e,n){return h.replace(/\{+(PNAME)+\}/g,t).replace(/\{+(PSPEC)+\}/g,e).replace(/\{+(PIMGURL)+\}/g,n)}function n(t,e){var n="目前沒有商品";void 0!=e&&(n=e),0==t.length?($(".list-quick-cart").html('<li class="msg-empty">'+n+"</li>"),$(".quick-cart").find(".style-btn").addClass("style-disabled")):$(".quick-cart").find(".style-btn").removeClass("style-disabled")}function a(t){return k.replace(/\{+(CNAME)+\}/g,t)}function c(t,e,n,a,c,i,o,l){return b.replace(/\{+(PNAME)+\}/g,t).replace(/\{+(PSPEC)+\}/g,e).replace(/\{+(IMGURL)+\}/g,n).replace(/\{+(LINKURL)+\}/g,a).replace(/\{+(DAYPRICE)+\}/g,c).replace(/\{+(BONDPRICE)+\}/g,i).replace(/\{+(ORIGINPRICE)+\}/g,o).replace(/\{+(STOCK)+\}/g,l)}function i(t,e,n,a,c,i,o){return w.replace(/\{+(NAME)+\}/g,t).replace(/\{+(SPEC)+\}/g,e).replace(/\{+(IMGURL)+\}/g,n).replace(/\{+(DAYPRICE)+\}/g,a).replace(/\{+(BONDPRICE)+\}/g,c).replace(/\{+(TOTALPRICE)+\}/g,i).replace(/\{+(DAYCOUNT)+\}/g,o)}function o(t,e){$.each(t,function(t,n){e[t]={},e[t].name=n.MODEL,e[t].spec=n.SPEC,e[t].imgurl=n.IMAGE,e[t].dayprice=n.PRICE,e[t].bondprice=n.PRICE_YA})}function l(t){t.length&&$(".list-quick-cart").html(""),$.each(t,function(a,c){$(".list-quick-cart").append(e(c.name,c.spec,c.imgurl)),n(t)})}function s(t,e){var n=0;t.length>0&&$(".item-table:not(.style-head)").remove(),$.each(t,function(t,a){var c=e*parseInt(a.dayprice)+parseInt(a.bondprice);n+=c,$(".list-table").append(i(a.name,a.spec,a.imgurl,numberWithCommas(a.dayprice),numberWithCommas(a.bondprice),numberWithCommas(c),e))}),$(".summaryprice").html(numberWithCommas(n))}function r(t,e,n){$.each(t,function(t,a){e[t]={},e[t].type=a.TYPE,e[t].name=a.MODEL,e[t].spec=a.SPEC,e[t].imgurl=a.IMAGE,e[t].linkurl=a.LINK,e[t].dayprice=numberWithCommas(a.PRICE),e[t].bondprice=numberWithCommas(a.PRICE_YA),e[t].originprice=numberWithCommas(a.PRICE_SALE),e[t].stock=a.QTY,n[a.TYPE].push(e[t])})}function d(e,n,i){e.length&&$(".section-product .inner-wrap").html(""),$.each(n,function(t,e){var n=I[t],o=t+1;e.length>0&&($(".product-nav ul").append("<li>"+n+"</li>"),$(".section-product .inner-wrap").append(a(n)),$(".section-product .inner-wrap").find(".wrap-category:last-child").attr("data-index",o),P.push($(".section-product .inner-wrap").find(".wrap-category:last-child").offset().top),$.each(e,function(t,e){if($(".section-product .inner-wrap").find(".wrap-category[data-index="+o+"] .list-product").append(c(e.name,e.spec,e.imgurl,e.linkurl,e.dayprice,e.bondprice,e.originprice,e.stock)),e.stock>0){var n=E;$.each(i,function(t,a){a.name==e.name&&a.spec==e.spec&&(n=R)})}else var n=S;$(".section-product .inner-wrap").find(".wrap-category[data-index="+o+"] .item-product:last-child .btn-wrap").prepend(n)}))}),t($(window).scrollTop(),P),$(".product-nav li").each(function(t,e){var n=$("#header").height(),a=$(".product-nav").height(),c=parseInt(n)+parseInt(a)+10;$(this).on("click",function(e){$("html,body").animate({scrollTop:P[t]-c},800)})})}function p(){$.getJSON("data/mycart.json",function(t,e){if("OK"==t.RS)o(t.PRODUCTS,_);else{var n=t.RS;$(".list-quick-cart").html('<li class="msg-empty">'+n+"</li>"),$(".quick-cart").find(".style-btn").addClass("style-disabled")}}).success(function(){console.log("get json success!"),l(_);var t=$("[name=rent_day_count]").val();s(_,t)}).fail(function(){console.log("get json fail!")}).done(function(){console.log("get json done!")})}function m(){var t=[];$.getJSON("data/product.json",function(e,n){if("OK"==e.RS)r(e.DATA,t,q);else{e.RS}}).success(function(){console.log("get product json success!"),d(t,q,_)}).fail(function(){console.log("get product json fail!")}).done(function(){console.log("get product json done!")})}function u(){var t=new Date;A=$(".datepicker[name=start_date]").pickadate({format:"yyyy/m/d",formatSubmit:"yyyy/m/d",min:t,monthsFull:O,monthsShort:M,weekdaysFull:T,weekdaysShort:x,showMonthsShort:!0,today:"",clear:"",onOpen:function(){console.log("open start!"),U=$(".datepicker[name=start_date]").val()},onSet:function(){console.log("setted up!");var t=$(".datepicker[name=start_date]").val();t!=U&&($(".block-end_date").html(L),$("[name=rent_day_count]").val(""),f())}})}function f(){var t=(new Date,$("[name=start_date]").val()?new Date($("[name=start_date]").val()):new Date),e=parseInt($(".wrap-date").find("input[name=rentday_maximum]").val()),n=new Date($("[name=start_date]").val());t.setDate(t.getDate()+1),n.setDate(n.getDate()+e-1),$(".datepicker[name=end_date]").val(t.getFullYear()+"/"+(parseInt(t.getMonth())+1)+"/"+t.getDate()),$("[name=rent_day_count]").val("1"),console.log(_),s(_,1),D=$(".datepicker[name=end_date]").pickadate({format:"yyyy/m/d",formatSubmit:"yyyy/m/d",min:t,max:n,monthsFull:O,monthsShort:M,weekdaysFull:T,weekdaysShort:x,showMonthsShort:!0,today:"",clear:"",onSet:function(){var t=daysBetween($("[name=start_date]").val(),$("[name=end_date]").val());$("[name=rent_day_count]").val(t),console.log(_),s(_,t)}})}var h=$(".header-template").find(".template-quickcart").html(),g=$(".quick-cart").find("input[name=user_maximum]").val(),v=$(".quick-cart").find("input[name=total_maximum]").val();parseInt(g);var y=$(".section-product").length>0?$(".section-product").find(".intro").html().replace(/\{+(MAX)+\}/g,v):0,C=$(".section-product").length>0?$(".section-template").find(".template-msg-maximum").html().replace(/\{+(MAX)+\}/g,v):0,k=($(".section-product").length>0?$(".section-template").find(".template-msg").html():0,$(".section-product").length>0?$(".section-template").find(".template-category").html():0),b=$(".section-product").length>0?$(".section-template").find(".template-product").html():0,E=$(".section-product").length>0?$(".section-template").find(".template-btn-addcart").html():0,S=$(".section-product").length>0?$(".section-template").find(".template-btn-outstock").html():0,R=$(".section-product").length>0?$(".section-template").find(".template-btn-incart").html():0,w=$(".section-payment").length>0?$(".section-template").find(".template-ptable").html():0;$(".quick-cart").find("input[name=user_maximum]").remove(),$(".quick-cart").find("input[name=total_maximum]").remove(),$(".header-template").find(".template-quickcart").remove(),$(".section-template").find(".template-category").remove(),$(".section-template").find(".template-product").remove(),$(".section-template").find(".template-btn-addcart").remove(),$(".section-template").find(".template-btn-outstock").remove(),$(".section-template").find(".template-btn-incart").remove(),$(".section-template").find(".template-msg-maximum").remove(),$(".section-product").find(".intro").html(y),$(".section-template").find(".template-ptable").remove(),$(".section-product").length>0,$(".section-payment").length>0;var _=[],q=[],P=[],I=["","變焦鏡","定焦鏡","轉接鏡","增距鏡"];$.each(I,function(t,e){q[t]=[]});var A,D,O=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],M=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],T=["週日","週一","週二","週三","週四","週五","週六"],x=["日","一","二","三","四","五","六"],L=$(".block-end_date").html(),U=$(".datepicker[name=start_date]").val();if(p(),$(".section-product").length>0&&m(),$(".section-payment").length>0&&u(),$(".quick-cart").on("click",".btn-x",function(t){var e=$(this).closest(".item-quick-cart").find(".name").text(),a=$(this).closest(".item-quick-cart").find(".spec").text();console.log("del this item : MODEL = "+e+",SPEC = "+a);var c=rentCart.getTest();"OK"==c.RS?($(".item-product").each(function(t,n){$(n).find(".name").text()==e&&$(n).find(".spec").text()==a&&$(n).find(".btn-wrap").find(".style-btn").replaceWith(E)}),$(this).closest(".item-quick-cart").addClass("style-fade").slideUp(300,function(){$(this).remove().queue(function(){n($(".item-quick-cart")),$(this).dequeue()})})):popAlert(c.RS)}),$(".list-table").on("click",".btn-del",function(t){var e=$(this).closest(".item-table").find(".name").text(),n=$(this).closest(".item-table").find(".spec").text();console.log("del this item : MODEL = "+e+",SPEC = "+n);var a=rentCart.getTest();if("OK"==a.RS){var c=[];console.log(_),$.each(_,function(t,a){console.log(a),a.name!=e&&a.spec!=n&&c.push(a)}),console.log(c);$("[name=rent_day_count]").val()}else popAlert(a.RS)}),$("body").on("click",".btn-rent",function(t){var n=$(this).closest(".item-product").find(".name").text(),a=$(this).closest(".item-product").find(".spec").text(),c=$(this).closest(".item-product").find(".img").attr("style");console.log("add cart : name = "+n+" , myspec =  "+a);var i=rentCart.getTest();"OK"==i.RS?$(".item-quick-cart").length<g?($(this).closest(".item-product").find(".btn-wrap").find(".style-btn").replaceWith(R),$(".btn-cart").addClass("is-active").queue(function(){$(".list-quick-cart").find(".msg-empty").remove(),$(".list-quick-cart").append(e(n,a,"")).find(".item-quick-cart:last-child .img").attr("style",c),$(this).dequeue()}).delay(1e3).queue(function(){$(".btn-cart").removeClass("is-active"),$(this).dequeue()})):popAlert(C):popAlert(i.RS)}),$(".section-product").length>0){var K=0,N=$(".style-stick").offset().top;$(window).scroll(function(){var e=$(this).scrollTop(),n=$(window).height(),a=e+n/2;e>N?$(".style-stick").addClass("is-stick"):$(".style-stick").removeClass("is-stick"),t(a,P),K=e}),$(window).resize(function(){$(".wrap-category").each(function(t,e){P[t]=$(e).offset().top})})}}();