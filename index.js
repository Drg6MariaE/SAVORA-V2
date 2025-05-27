let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.img-slider');
let items = document.querySelectorAll('.img-slider .itemm');
let contents = document.querySelectorAll('.content-slider .item');


let rotate = 0;
    let active = 0;
    let countItem = items.length;
    let rotateAdd = 360 / countItem;
    
    function nextSlider(){
        active = active + 1 > countItem - 1 ? 0 : active + 1;
        rotate = rotate + rotateAdd; 
        show();
    }
    function prevSlider(){
        active = active - 1 < 0 ? countItem - 1 : active - 1;
        rotate = rotate - rotateAdd; 
        show();     
         
    }
    function show(){
        image.style.setProperty("--rotate", rotate + 'deg');
        image.style.setProperty("--rotate", rotate + 'deg');
        contents.forEach((content, key) => {
            if(key == active){
                content.classList.add('itemactive');
            }else{
                content.classList.remove('itemactive');
            }
        })
    }
    next.onclick = nextSlider;
    prev.onclick = prevSlider;
    const autoNext = setInterval(nextSlider, 4000);


    window.addEventListener('load', () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 50); 
          }
        }
      });
      


      const filmStrip = document.querySelector('.film-strip');
      const btnPrev = document.getElementById('scrollp');
      const btnNext = document.getElementById('scrolln');

      btnPrev.addEventListener('click', () => {
      filmStrip.scrollBy({
      left: -620, // approx. one image width
      behavior: 'smooth'
      });
      });

     btnNext.addEventListener('click', () => {
     filmStrip.scrollBy({
     left: 620,
     behavior: 'smooth'
     });
     }); 

  

