/**Swiper 组件初始化**/
(function() {
  document.onreadystatechange = loading;

  function loading() {
    if (document.readyState == "complete") {
      $(".load").remove();
      $(".container").show();
      // var mySwiper = new Swiper('.swiper-container', {
      //   speed: 1000,
      //   direction: 'vertical',
      //   loop: false,
      //   noSwiping: true,
      //   preloadImages: false,
      //   onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
      //     swiperAnimateCache(swiper); //隐藏动画元素 
      //     swiperAnimate(swiper); //初始化完成开始动画
      //   },
      //   onSlideChangeEnd: function(swiper) {
      //       swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      //       if(swiper.isEnd){
      //         $(".arrow").hide();
      //       }else{
      //         $(".arrow").show();
      //       }
      //     }
      //      // initialSlide :5
      // });
    }
  }
}());
  // 函数入口
$(function() {
  $(".code img").click(function(){
    console.log($(this).attr('src'))
    $(".max-cod").html('<img src="'+$(this).attr('src')+'">').show();
  })
  $(".max-cod").click(function(){
    $(this).hide();
  })
})