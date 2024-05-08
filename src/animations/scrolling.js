import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

function typeSplitter(selector) {
  return new SplitType(selector, { types: 'chars' });
}

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});

lenis.on('scroll', (e) => {});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to('.heroImg', {
  y: -800,
  scale: 0,
  duration: 2,
  ease: 'expoScale',
  scrollTrigger: {
    trigger: '#about',
    scrub: 1,
  },
});

function staggerAnimation(selector, amount, start) {
  return {
    y: amount,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: selector,
      scrub: 1,
      start: start,
      end: 'top 10%',
    },
  };
}
function staggerTypeAnimation(selector, start) {
  return {
    y: 100,
    opacity: 0.2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: selector,
      scrub: 1,
      start: start,
      end: 'top 10%',
    },
  };
}
function showUp(selector, start) {
  return {
    y: 500,
    scrollTrigger: {
      trigger: selector,
      scrub: 1,
      start: start,
      end: 'top 10%',
    },
  };
}
gsap.to(
  '[data-animation="home-stagger"]',
  staggerAnimation('#about', '-200', 'top 80%')
);

gsap.from('.model', {
  scale: 0,
  scrollTrigger: {
    trigger: '#about',
    scrub: 1,
    start: 'top 80%',
    end: 'top 10%',
  },
});

gsap.from(
  typeSplitter('[aria-label="About Me"]').chars,
  staggerTypeAnimation('#about', 'top 80%')
);

gsap.to('.model', {
  y: -400,
  scrollTrigger: {
    trigger: '#education',
    scrub: 1,
    start: 'top 80%',
    end: 'top 10%',
  },
});

gsap.to(
  '[data-animation="about-stagger"]',
  staggerAnimation('#education', '-200', 'top 80%')
);

gsap.from('.academic_section', showUp('#education', 'top 80%'));
gsap.from(
  typeSplitter('[aria-label="Academics"]').chars,
  staggerTypeAnimation('#education')
);

gsap.from(
  '[data-animation="education"]',
  staggerAnimation('#education', '500', 'top 50%')
);

const selector = document.querySelector('.skill_section');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.from('.level_bar', {
        width: 0,
        duration: 2,
        ease: 'expoScale',
        stagger: 0.1,
        delay: 0.5,
      });
    }
  });
});

skillObserver.observe(selector);

gsap.from('.work_section', showUp('#experience', 'top 80%'));
gsap.from(
  typeSplitter('[aria-label="Work Experience"]').chars,
  staggerTypeAnimation('#experience')
);

gsap.from('.group', staggerAnimation('#experience', '500', 'top 50%'));

const digits = document.querySelector('.num');

const value = digits.getAttribute('data-value');

const targetObs = document.querySelector('.item-5');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.from('.item-5', {
        opacity: 0,
        duration: 2,
        ease: 'exposcale',
      });
      let contador = 0;
      const timer = setInterval(() => {
        contador++;
        digits.innerText = contador;
        if (contador == value) clearInterval(timer);
      }, 50);
    }
  });
});

counterObserver.observe(targetObs);

gsap.from('.freelance_section', showUp('#projects', 'top 90%'));
gsap.from(
  typeSplitter('[aria-label="Freelance Projects"]').chars,
  staggerTypeAnimation('#projects')
);
gsap.from('.demo', showUp('#projects', 'top 80%'));
gsap.from('.demo-item', staggerAnimation('#projects', '300', 'top 20%'));

gsap.from('.contact_section', showUp('#contact', 'top 80%'));
gsap.from(
  typeSplitter('[aria-label="Contact"]').chars,
  staggerTypeAnimation('#contact')
);

gsap.from(
  '[data-animation="contact"]',
  staggerAnimation('#contact', '500', 'top 50%')
);
