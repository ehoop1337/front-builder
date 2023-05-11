// Libs
import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Sections
import sectionOne from './sections/section-one';

// Loaded
document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox=""]');
  sectionOne();
});
