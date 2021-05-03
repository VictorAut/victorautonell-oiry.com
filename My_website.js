


function openModal() {
  let modalTrigger = document.querySelectorAll('.modal-trigger');
  
  
  modalTrigger.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {

      // remove "#" from #modal
      const target = this.getAttribute('href').substr(1);
      
      const modalWindow = document.getElementById(target);
      
      modalWindow.style.display = "block";
      // END OF OPEN MODAL

      //this replaces the function that opens the slide modal, function showSlides(slideIndex)
    
      var slideIndex = 1;

      var slides = document.getElementById(target).querySelectorAll(".mySlides");
      var i;
      
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";



      window.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
          
          var n = slideIndex += 1;
          var i;
      
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
        }
      })

      window.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
          var n = slideIndex -= 1;
          var i;
      
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
        }
      })

      // and the transition slide logic here!!
      //
      //
      //
      let nextTrigger = document.querySelectorAll('.next');
      let prevTrigger = document.querySelectorAll('.prev');
      
    
      nextTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
          
          //get the modal id
          const modalTarget = this.parentNode.parentNode.id;
    
          var slides = document.getElementById(modalTarget).querySelectorAll(".mySlides");
          var n = slideIndex += 1;
          var i;
      
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
    
    
    
        });
      });
    
    
      prevTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
          
          //get the modal id
          const modalTarget = this.parentNode.parentNode.id;
    
          var slides = document.getElementById(modalTarget).querySelectorAll(".mySlides");
          var n = slideIndex -= 1;
          var i;
      
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
    
        });
      });

      //
      //
      //
      // end transition slide logic

    });
  });
}

/*function nextSlide() {
let nextTrigger = document.querySelectorAll('.next');

var slideIndex = 1;
nextTrigger.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    
    //get the modal id
    const modalTarget = this.parentNode.parentNode.id;

    var slides = document.getElementById(modalTarget).getElementsByClassName("mySlides");
    var n = slideIndex += 1;
    var i;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

  });
});
}



function prevSlide() {
let nextTrigger = document.querySelectorAll('.prev');

var slideIndex = 1;
nextTrigger.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    
    //get the modal id
    const modalTarget = this.parentNode.parentNode.id;
    console.log(modalTarget)
    var slides = document.getElementById(modalTarget).getElementsByClassName("mySlides");
    var n = slideIndex -= 1;
    var i;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

  });
});
}*/


/*
function transitionSlide() {
let nextTrigger = document.querySelectorAll('.next');
let prevTrigger = document.querySelectorAll('.prev');

var slideIndex = 1;

nextTrigger.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    
    //get the modal id
    const modalTarget = this.parentNode.parentNode.id;

    var slides = document.getElementById(modalTarget).querySelectorAll(".mySlides");
    var n = slideIndex += 1;
    var i;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";



  });
});


prevTrigger.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    
    //get the modal id
    const modalTarget = this.parentNode.parentNode.id;

    var slides = document.getElementById(modalTarget).querySelectorAll(".mySlides");
    var n = slideIndex -= 1;
    var i;

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

  });
});

}
*/


function closeModal() {
  let modalClose = document.querySelectorAll('.modal-close');
  let modalOverlays = document.querySelectorAll('.modal-overlay');

  modalClose.forEach(function(btn) {
      btn.addEventListener('click', function(event) {

      // target the whole modal and close when hitting the 'X'
      const modalWindow = this.parentNode;

      modalWindow.style.display = "none";
      });     
  });

  modalOverlays.forEach(function(overlay) {
      // get the whole modal using overlay argument and close when hitting anywhere outide image
      const modalWindow = overlay.parentNode;
      
      overlay.addEventListener('click', function() {
          modalWindow.style.display = "none";
      });    

      // get the whole modal using overlay argument and close when hitting esc
      // keydown events don't seem to apply unless applied to the document (and not overlay, here)
      document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
              modalWindow.style.display = "none";
              }
      });  
  });
}






function fireWhenReady(func) {
document.addEventListener('DOMContentLoaded', func);
}

fireWhenReady(openModal);
//fireWhenReady(nextSlide);
//fireWhenReady(prevSlide);
//fireWhenReady(transitionSlide);
fireWhenReady(closeModal);
