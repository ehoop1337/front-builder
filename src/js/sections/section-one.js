export default function sectionOne() {
  console.log('This is JS from section-one.js');

  $(".slider-test").slick({
    slidesToShow: 2,
  });

  const swiper = new Swiper('.swiper-test', {
    slidesPerView: 3,
    spaceBetween: 30,
  });

}
