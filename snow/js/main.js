var SCREEN_WIDTH = 1920,
  SCREEN_HEIGHT = 950,
  container,
  particle,
  camera,
  scene,
  renderer,
  mouseX = 0,
  mouseY = 0,
  windowHalfX = 1920 / 2,
  windowHalfY = 950 / 2,
  particles = [],
  particleImage = new Image();
  particleImage.src = 'img/triangulo.png';

function init() {
  container = document.createElement('div');
  container.setAttribute('id','snow');
  document.body.insertBefore(container,document.body.firstChild);
  camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
  camera.position.z = 1000;
  scene = new THREE.Scene();
  scene.add(camera);

  renderer = new THREE.CanvasRenderer();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  var material = new THREE.ParticleBasicMaterial({
    map: new THREE.Texture(particleImage)
  });

  for (var i = 0; i < 500; i++) {
    particle = new Particle3D(material);
    particle.position.x = Math.random() * 2000 - 1000;
    particle.position.y = Math.random() * 2000 - 1000;
    particle.position.z = Math.random() * 2000 - 1000;
    particle.scale.x = particle.scale.y = 1;
    scene.add(particle);

    particles.push(particle);
  }
  container.appendChild(renderer.domElement);

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  // document.addEventListener('touchstart', onDocumentTouchStart, false);
  // document.addEventListener('touchmove', onDocumentTouchMove, false);

  setInterval(loop, 1000 / 60);

}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {
  if (event.touches.length == 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function onDocumentTouchMove(event) {
    if (event.touches.length == 1) {
      event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }
  //
function loop() {
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    particle.updatePhysics();

    with(particle.position) {
      if (y < -1000) y += 2000;
      if (x > 1000) x -= 2000;
      else if (x < -1000) x += 2000;
      if (z > 1000) z -= 2000;
      else if (z < -1000) z += 2000;
    }
  }

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);

}

init();