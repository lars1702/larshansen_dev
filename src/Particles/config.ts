export default {
  background: {
    color: {
      value: "#00022e",
    },
  },
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#000000",
      },
      polygon: {
        nbSides: 7,
      },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: true,
        speed: 0.4,
        opacityMin: 0.2,
        sync: false,
      },
    },
    size: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        sizeMin: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      random: false,
      straight: false,
      outMode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      onClick: {
        enable: true,
        mode: "remove",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 174,
        size: 3,
        duration: 0.32,
        opacity: 0.17,
        speed: 3,
      },
      remove: {
        particlesNb: 2,
      },
    },
  },
  detectRetina: true,
}
