import * as THREE from 'three';
import { plane } from './object.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//
//
//
const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });

renderer.setSize(900, 900);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);

camera.position.set(0, 2, 5);

const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

orbit.update();

scene.add(plane);

// const gridHelper = new THREE.GridHelper(10, 100);
// scene.add(gridHelper);

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
