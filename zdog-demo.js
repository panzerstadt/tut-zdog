// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas"
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 40 },
  stroke: 20,
  color: "#636"
});

new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  // position further back
  translate: { z: -40 },
  stroke: 12,
  color: "#e62",
  fill: true
});

const animate = () => {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();

  requestAnimationFrame(animate);
};

animate();
