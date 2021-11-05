'use strict';

//on Document Ready
(function() {

  /* FIX INPUT MAXLENGTH */
  $("input[type=number]").on('input',  function(event) {
    if( $(this).val().length > $(this).attr("maxlength") ){
      $(this).val( $(this).val().substr(0, parseInt( $(this).attr("maxlength") ) ) );
    }
    if( $(this).val().length == $(this).attr("maxlength") ){
      $(this).next("input").focus();
    }
  });

  function calculateSize(){
  }

  var scrollNow = 0;
  function calculateScroll(){
    var scrollVal = $(window).scrollTop();    
    scrollNow = scrollVal;   
  };

  calculateSize();
  $(window).resize(function() {
    calculateSize();
  });

  calculateScroll();
  $(window).scroll(function() {
    calculateScroll();
  });

  // 執行 FastClick
  FastClick.attach(document.body);

})();