document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.banner-slider .slide');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);

  showSlide(current);
});



         <img src="images/bannernew1.jpg" alt="배너" class="slide active">    
                                <img src="images/bannernew2.jpg" alt="배너" class="slide">     
                                <img src="images/bannernew3.jpg" alt="배너" class="slide">  

                                 .banner-slider {
  position: relative;
  width: 1440px;
  height: 1440px;
/*   overflow: hidden;
 */  margin-top: 40px;
  margin: auto; 
}

.slide {
  position: absolute;
  margin: auto ;  
  width: 1440x;
  height: 1440px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s;
}

.slide.active {
  opacity: 1;
  z-index: 1; 
}