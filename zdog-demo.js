let isSpinning = true;

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas",
  // zoom up 4x
  zoom: 4,
  dragRotate: true,
  onDragStart: () => {
    isSpinning = false;
  }
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 20,
  translate: { z: 10 },
  stroke: 5,
  color: "#636"
});

new Zdog.Rect({
  addTo: illo,
  width: 20,
  height: 20,
  // position further back
  translate: { z: -10 },
  stroke: 3,
  color: "#e62",
  fill: true
});

const animate = () => {
  // rotate illo each frame
  if (isSpinning) {
    illo.rotate.y += 0.03;
  }

  illo.updateRenderGraph();

  requestAnimationFrame(animate);
};

animate();
