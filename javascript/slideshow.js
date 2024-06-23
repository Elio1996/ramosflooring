// slideshow

function slideShow(backBtn, forwardBtn, slide){

  const carouselSlide = document.querySelector(slide);
  const carouselImages = document.querySelectorAll(slide + ' img');

  const prevBtn = document.querySelector(backBtn);
  const nextBtn = document.querySelector(forwardBtn);

  let counter = 1;
  const size = carouselImages[0].clientWidth;

  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

  nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
  });

  prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
  });

  carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - 2 ;
      carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
  });

}

slideShow('.prevBtn1', '.nextBtn1', '.carousel-slide1' );
slideShow('.prevBtn2', '.nextBtn2', '.carousel-slide2' );
slideShow('.prevBtn3', '.nextBtn3', '.carousel-slide3' );
slideShow('.prevBtn4', '.nextBtn4', '.carousel-slide4' );
slideShow('.prevBtn5', '.nextBtn5', '.carousel-slide5' );
slideShow('.prevBtn6', '.nextBtn6', '.carousel-slide6' );
slideShow('.prevBtn8', '.nextBtn8', '.carousel-slide8' );
slideShow('.prevBtn9', '.nextBtn9', '.carousel-slide9' );
slideShow('.prevBtn10', '.nextBtn10', '.carousel-slide10' );
slideShow('.prevBtn11', '.nextBtn11', '.carousel-slide11' );
slideShow('.prevBtn12', '.nextBtn12', '.carousel-slide12' );




