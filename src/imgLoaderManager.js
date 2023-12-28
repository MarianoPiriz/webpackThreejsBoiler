import * as THREE from 'three';
import heroImg1 from './images/heroImg1.png';
import heroImg2 from './images/heroImg2.png';
import distImg from './images/dist.png';

// console.log(heroImg1);
// console.log(heroImg2);
// console.log(distImg);

//const images = [heroImg1, heroImg2, distImg];

//console.log(images);

// const textures = images.map((t) => {
//   console.log(t);
//   const newImg = new Image();
// });

// images.forEach((imageSrc) => {
//   console.log(imageSrc);
// });

// for (let i = 0; i < images.length; i++) {
//   console.log(images[i]);
// }

const img1 = new Image();
console.log(img1);
const img2 = new Image();
console.log(img2);
const img3 = new Image();
console.log(img3);

const imgSrc1 = heroImg1;
const imgSrc2 = heroImg2;
const imgSrc3 = distImg;

export const imgTexture1 = new THREE.Texture(img1);
//console.log(imgTexture1);

export const imgTexture2 = new THREE.Texture(img2);
//console.log(imgTexture2);

export const imgTexture3 = new THREE.Texture(img3);
//console.log(imgTexture3);

img1.onload = () => {
  imgTexture1.needsUpdate = true;
};

img1.src = imgSrc1;

img2.onload = () => {
  imgTexture2.needsUpdate = true;
};

img2.src = imgSrc2;

img3.onload = () => {
  imgTexture3.needsUpdate = true;
};

img3.src = imgSrc3;
