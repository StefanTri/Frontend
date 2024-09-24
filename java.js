function kopija() {
    alert("Uhvacen si da kopiras tekst!");
}
document.addEventListener("DOMContentLoaded", function() {
    var halfElements = document.querySelectorAll('.half-element');

    window.addEventListener('scroll', function() {
        halfElements.forEach(function(element) {
            var top = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (top < windowHeight * 0.75 ) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scrollButton');
    var targetElement = document.getElementById('targetElement');

    scrollButton.addEventListener('click', function() {
        // Pomičemo se polako do ciljanog elementa
        smoothScroll(targetElement);
    });
});

function smoothScroll(target) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000; // Vreme animacije u milisekundama
    var start = null;

    // Funkcija animacije
    function animation(currentTime) {
        if (start === null) start = currentTime;
        var timeElapsed = currentTime - start;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing funkcija za glatko kretanje
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Pokretanje animacije
    requestAnimationFrame(animation);
}
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.scroll-element');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

function scrollToTerm(id) {
    const element = document.getElementById(id);
    if (!element) return;

    // Visina koja će biti uzeta u obzir (150px ispod vrha)
    const offset = -150;

    // Izračunaj trenutnu poziciju elementa i novu poziciju uz offset
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset - (window.innerHeight / 2) + (element.clientHeight / 2);

    // Skrolovanje do elementa
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });

    // Markiranje elementa
    element.classList.add('highlight');

    // Uklanjanje markiranja nakon 1 sekunde
    setTimeout(() => {
        element.classList.remove('highlight');
    }, 1300);
}
     function openPopup() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('backgroundOverlay').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('backgroundOverlay').style.display = 'none';
    }