import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const stars = [];

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

camera.position.setZ(5);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

function addSphere() {
  for (let z = -1000; z < 2000; z += 20) {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = Math.random() * 1000 - 500;
    sphere.position.y = Math.random() * 1000 - 500;
    sphere.position.z = z;
    sphere.scale.x = sphere.scale.y = 2;
    scene.add(sphere);
    stars.push(sphere);
  }
}

function animateStars() {
  // loop through each star
  for (var i = 0; i < stars.length; i++) {
    const star = stars[i];
    // and move it forward dependent on the mouseY position.
    star.position.z += i / 10;
    // if the particle is too close move it to the back
    if (star.position.z > 1000) star.position.z -= 2000;
  }
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  animateStars();
}

addSphere();
render();
