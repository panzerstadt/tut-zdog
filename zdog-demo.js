// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas"
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: "#636"
});

const animate = () => {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();

  requestAnimationFrame(animate);
};

animate();
