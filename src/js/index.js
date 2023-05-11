// Libs

// Fancybox
import { Fancybox } from "@fancyapps/ui";

// Jquery
import $ from 'jquery';

// Slick
import 'slick-carousel';

// Swiper
import Swiper from 'swiper';


Fancybox.bind('[data-fancybox=""]');
window.jQuery = window.$ = $;
window.Swiper = Swiper;


// Sections
import sectionOne from './sections/section-one';

// Loaded
document.addEventListener('DOMContentLoaded', () => {

  sectionOne();
});
