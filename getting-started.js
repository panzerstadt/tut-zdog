const gettingStarted = () => {
  // placed inside a function to make sure variables don't clash between files
  // meaning 'to scope variables'
  let isSpinning = true;
  let t = undefined;

  // create illo
  let illo = new Zdog.Illustration({
    // set canvas with selector
    element: "#canvas1",
    // zoom up 4x
    zoom: 4,
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
};

gettingStarted();
