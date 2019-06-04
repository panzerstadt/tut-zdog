const modellingCopy = () => {
  const orange = "#e62";
  const garnet = "#c25";
  const eggplant = "#636";

  let isSpinning = true;
  let t = undefined;

  // create illo
  let illo = new Zdog.Illustration({
    // set canvas with selector
    element: "#canvas4",
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

  let rect = new Zdog.Rect({
    addTo: illo,
    height: 64,
    width: 64,
    translate: { x: -48 },
    stroke: 16,
    color: orange
  });

  new Zdog.Shape({
    addTo: rect,
    translate: { z: 20 },
    stroke: 32,
    color: garnet
  });

  rect.copyGraph({
    // overwrite options
    translate: { x: 48 },
    color: eggplant
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

modellingCopy();
