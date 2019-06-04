const modellingAnchors = () => {
  const orange = "#e62";
  const garnet = "#c25";
  const eggplant = "#636";

  let isSpinning = true;
  let t = undefined;

  // create illo
  let illo = new Zdog.Illustration({
    // set canvas with selector
    element: "#canvas3",
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

  let zAnchor = new Zdog.Anchor({
    addTo: illo,
    scale: 1.5,
    translate: { z: 40 },
    rotate: { z: -Zdog.TAU / 8 }
  });
  new Zdog.Shape({
    addTo: zAnchor,
    path: [{}, zAnchor.translate.copy().multiply({ z: -1 })],
    scale: 1 / zAnchor.scale.z,
    stroke: 2,
    color: eggplant
  });

  let xAnchor = new Zdog.Anchor({
    addTo: zAnchor,
    translate: { x: 40 }
  });
  new Zdog.Shape({
    addTo: xAnchor,
    path: [{}, xAnchor.translate.copy().multiply({ x: -1 })],
    scale: 1 / xAnchor.scale.x,
    stroke: 2,
    color: garnet
  });

  let yTri = new Zdog.Polygon({
    addTo: xAnchor,
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

modellingAnchors();
