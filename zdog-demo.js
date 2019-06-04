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

illo.updateRenderGraph();
