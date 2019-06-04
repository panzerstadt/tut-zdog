const modelling = () => {
  const orange = "#e62";
  const garnet = "#c25";
  const eggplant = "#636";

  let isSpinning = true;
  let t = undefined;

  // create illo
  let illo = new Zdog.Illustration({
    // set canvas with selector
    element: ".zdog-canvas2",
    zoom: 1,
    dragRotate: true,
    onDragStart: () => {
      isSpinning = false;
      if (t) clearTimeout(t);
    },
    onDragEnd: () => {
      t = setTimeout(() => {
        isSpinning = true;
      }, 1000);
    }
  });

  let zDot = new Zdog.Shape({
    addTo: illo,
    stroke: 8,
    color: eggplant
  });

  let zCircle = new Zdog.Ellipse({
    addTo: illo,
    translate: { z: 40 },
    diameter: 20,
    quarters: 2,
    closed: true,
    stroke: 8,
    scale: 1,
    fill: true,
    color: eggplant
  });
  // z line
  new Zdog.Shape({
    addTo: zCircle,
    path: [{}, zCircle.translate.copy().multiply({ z: -1 })],
    scale: 1 / zCircle.scale.z,
    stroke: 2,
    color: zCircle.color
  });

  let xRect = new Zdog.Rect({
    addTo: illo,
    translate: { x: 40 },
    height: 20,
    width: 20,
    fill: true,
    stroke: 8,
    color: garnet
  });
  // z line
  new Zdog.Shape({
    addTo: xRect,
    path: [{}, xRect.translate.copy().multiply({ x: -1 })],
    scale: 1 / xRect.scale.x,
    stroke: 2,
    color: xRect.color
  });

  let yTri = new Zdog.Polygon({
    addTo: illo,
    translate: { y: -60 },
    radius: 10,
    sides: 3,
    stroke: 8,
    fill: true,
    color: orange
  });
  // z line
  new Zdog.Shape({
    addTo: yTri,
    path: [{}, yTri.translate.copy().multiply({ y: -1 })],
    scale: 1 / yTri.scale.x,
    stroke: 2,
    color: yTri.color
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
};

modelling();
