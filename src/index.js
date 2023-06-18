import './style.css';
import heroImg from './heroImg1.png';

const p = document.createElement('p');
p.textContent = 'Hello from Webpack';

document.body.append(p);

const element = document.createElement('div');

const bgImg = new Image();
bgImg.src = heroImg;

element.appendChild(bgImg);

document.body.append(element);
