import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const spans = document.querySelectorAll('.nums');

const ctaH1 = document.querySelector('.hero_HL');

const textCta = ctaH1.innerText;

const textArr = textCta.split('');
const nuString = textCta.split('').join('');

const fragment = document.createDocumentFragment();
const spanArray = [];

textArr.forEach((element, i) => {
  const h1split = document.createElement('span');
  h1split.className = 'chars';

  fragment.appendChild(h1split);

  spanArray.push(h1split);

  const timer = setInterval(() => {
    let randomNum = Math.floor(Math.random() * textArr.length);
    let randomChar = nuString.charAt(randomNum);

    spanArray[i].innerText = randomChar;

    if (element == randomChar) {
      clearInterval(timer);
    }
  }, 50);

  ctaH1.innerText = '';
});

ctaH1.appendChild(fragment);

setTimeout(() => {
  for (const span of spans) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const timer = setInterval(() => {
      for (let index = 0; index < numArr.length; index++) {
        const element = numArr[index];
        let randomNum = Math.ceil(Math.random() * element);
        span.innerText = randomNum;
      }
      setTimeout(() => {
        spans[0].innerText = 2;
        setTimeout(() => {
          spans[1].innerText = 0;
        }, 1000);
        setTimeout(() => {
          spans[2].innerText = 2;
        }, 1200);
        setTimeout(() => {
          spans[3].innerText = 4;
        }, 1500);
        clearInterval(timer);
      }, 1500);
    }, 50);
  }
}, 4000);

ScrollTrigger.batch(spanArray, {
  onEnter: (batch) =>
    gsap.from(batch, {
      opacity: 0,
      stagger: 0.1,
    }),
});
const loadingTL = gsap.timeline({ defaults: { duration: 1 } });

loadingTL
  .from('.hero_HL', {
    y: 150,
    ease: 'power2.out',
  })
  .from('.hero_P', {
    y: 200,
    opacity: 0,
    ease: 'power2.out',
  })
  .from('.cta_btn_wrapp', {
    opacity: 0,
    y: 200,
    ease: 'power2.out',
  })
  .from('.copy', {
    opacity: 0,
    bottom: -50,
    ease: 'power2.out',
  })
  .from('.in', {
    y: 100,
    opacity: 0,
    ease: 'bounce.inOut',
  })
  .from('.gh', {
    y: 100,
    opacity: 0,
    ease: 'bounce.inOut',
  });

document.addEventListener('DOMContentLoaded', () => {});
