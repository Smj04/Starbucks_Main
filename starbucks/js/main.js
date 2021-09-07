'use strict';
const searchEl = document.querySelector('.search');     /*search 클래스 선택*/
const searchInputEl = searchEl.querySelector('input')       /*document대신 위에 변수에서 찾는것이라서 .search input로 안써도 됨*/

searchEl.addEventListener('click', function(){
    searchInputEl.focus();     /*input요소에 focus*/
});  /*클릭하면 함수에 들어있는 기능 이벤트*/

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');   /*검색부분에 focused가 추가됨 */
    searchInputEl.setAttribute('placeholder','통합검색');   /*input에 지정*/
});    /*focus가 두번 */

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');  
    searchInputEl.setAttribute('placeholder','');  /**blur상태일때 비어있기 */
});

//gsap.to(요소 , 지속시간 , 옵션)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');      //최상단

window.addEventListener('scroll', _.throttle (function () {
   
    if(window.scrollY > 500){     /**배지 숨기기 */
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'  /**스크롤 내릴 시 커서 포인터 사라짐 */
        });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
        x: 0
      })

    } else{//배지 보이기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        });

        //버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300));       /*스크롤 시 함수를 0.3초 단위로 부활 기능 rodash제공 기능*/
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

/**
 * 순서대로 나타나는 기능
 */
const fadeEls = document.querySelectorAll('.visual .fade-in');       /**중복선택자를 전부다 찾아서 변숭 할당 */
fadeEls.forEach(function (fadeEl, index, ){
    gsap.to(fadeEl, 1, {
        delay:(index + 1 )* .7,      /**실행 지연시간  0.7, 1.4, 2.1, 2.7*/
        opacity: 1
    });
});              /**갯수만큼 순차적으로 함수에게 내어줌*/

//new Swiper(선택자, 옵션)      //생성자
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
   autoplay:true,      //자동재생
    loop:true
}); 

new Swiper('.promotion .swiper-container',{
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay: 500
   },
   pagination: {
       el: '.promotion .swiper-pagination',
       clickable:true
   },
   navigation:{
       prevEl: '.promotion .swiper-prev',
       nextEl: '.promotion .swiper-next'
   }
});

new Swiper('.awards .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween: 30,        //사이사이 여백
    slidesPerView:5,              //한번에 5개 슬라이드
    navigation:{
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
}
);    

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    } else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y:size,          //y축으로 20만큼 에니메이션
        repeat:-1,       //무한반복
        yoyo:true,         //한번재생되면 역재생
        ease:Power1.easeOut.easeOut,
        delay:random(0, delay)           //1초뒤 실행
    });      //에니메이션    gsap.to(요소, 시간, 옵션);
}
floatingObject('.floating1', 1, 15);   
floatingObject('.floating2', .5, 15);   
floatingObject('.floating3', 1.5, 20);   


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent =  new Date().getFullYear();        //글자 내용을 값을 검색하거나 지정
//2021