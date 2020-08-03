import { RotateDirection, OutMode, ShapeType } from "react-tsparticles"
import { colors } from "../GlobalStyles"
import {
  InlineArrangement as PolygonInlineArrangement,
  Type as PolygonType,
  MoveType as PolygonMoveType,
} from "tsparticles/dist/Plugins/PolygonMask/Enums"
import lh from "./lh4.svg"
const modes = {
  attract: {
    distance: 200,
    duration: 0.4,
    speed: 1,
  },
  bubble: {
    distance: 40,
    duration: 3,
    opacity: 1,
    size: 6,
  },
  push: {
    quantity: 10,
  },
  repulse: {
    distance: 200,
    duration: 0.4,
    speed: 1,
  },
}

export default {
  background: {
    color: {
      value: "#000000",
    },
  },
  detectRetina: true,
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "attract",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: modes,
  },
  particles: {
    color: {
      value: Object.values(colors),
    },
    links: {
      enable: true,
      color: {
        value: "random",
      },
      distance: 50,
      opacity: 0.5,
      width: 1,
      warp: true,
    },
    move: {
      angle: 90,
      enable: true,
      outMode: OutMode.bounce,
      speed: 0.7,
    },
    number: {
      limit: 0,
      value: 500,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 1,
        sync: false,
      },
      value: 0.5,
    },
    rotate: {
      direction: RotateDirection.clockwise,
      path: false,
      random: false,
      value: 0,
    },
    shape: {
      type: ShapeType.circle,
      polygon: {
        sides: 1,
      },
      star: {
        sides: 1,
      },
    },
    size: {
      value: 1.5,
    },
  },
  pauseOnBlur: true,
  polygon: {
    enable: true,
    inline: {
      arrangement: PolygonInlineArrangement.equidistant,
    },
    move: {
      radius: 5,
      type: PolygonMoveType.path,
    },
    scale: 1,
    type: PolygonType.inline,
    url: lh,
    position: {
      x: 30,
      y: 45,
    },
  },
}
