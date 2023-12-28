import * as THREE from 'three';
import { imgTexture1, imgTexture2, imgTexture3 } from './imgLoaderManager.js';

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

//
const texturesArr = [imgTexture1, imgTexture2, imgTexture3];

// const textures = texturesArr.map((t) => new THREE.TextureLoader().load(t));
// console.log(textures);

const planeGeometry = new THREE.PlaneBufferGeometry(3, 3);
//const planeMaterial = new THREE.MeshStandardMaterial();
// const planeMaterial = new THREE.MeshBasicMaterial({
//   map: texturesArr[0],
// });
// console.log(planeMaterial);
const planeMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  side: THREE.DoubleSide,
});
planeMaterial.uniforms.uTime = { value: 0 };
planeMaterial.uniforms.uTexture1 = { value: imgTexture1 };
planeMaterial.uniforms.uTexture2 = { value: imgTexture2 };
planeMaterial.uniforms.uTexture3 = { value: imgTexture3 };
planeMaterial.uniforms.uTexture = {
  value: new THREE.TextureLoader().load(texturesArr),
};

console.log(planeMaterial);
console.log(planeGeometry.attributes);
console.log(imgTexture1);
console.log(imgTexture2);
console.log(imgTexture3);

export const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// console.log(fragmentShader);
// console.log(vertexShader);
