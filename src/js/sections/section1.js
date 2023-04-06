import image from '../../images/unnamed.jpg';

export default function section1() {

  const sections = document.querySelectorAll('.section-sections-1');

  if (sections.length) {
    sections.forEach(function(section) {

      const img = document.createElement('img');
      img.src = image;
      section.append(img);

    });
  }
}
