$(document).ready(function() {
  // Slick Slider initialization
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  // Bootstrap Carousel initialization
  const heroCarousel = new bootstrap.Carousel('#heroCarousel', {
    interval: 5000,
    pause: 'hover',
    wrap: true
  });

  // Add event listeners for the Bootstrap Carousel
  const carouselElement = document.getElementById('heroCarousel');

  carouselElement.addEventListener('slide.bs.carousel', function () {
    console.log('Slide starting');
  });

  carouselElement.addEventListener('slid.bs.carousel', function () {
    console.log('Slide completed');
  });
});