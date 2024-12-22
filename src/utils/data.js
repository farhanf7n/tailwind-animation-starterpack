const animationData = [
  {
    id: 1,
    name: "Fade In",
    animation: "Fade",
    className: "animate-fadeIn",
  },
  {
    id: 2,
    name: "Fade Out",
    animation: "Fade",
    className: "animate-fadeOut",
  },
  {
    id: 3,
    name: "Fade Up",
    animation: "Fade",
    className: "animate-fadeUp",
  },
  {
    id: 4,
    name: "Fade Down",
    animation: "Fade",
    className: "animate-fadeDown",
  },
  {
    id: 5,
    name: "Fade Left",
    animation: "Fade",
    className: "animate-fadeLeft",
  },
  {
    id: 6,
    name: "Fade Right",
    animation: "Fade",
    className: "animate-fadeRight",
  },
  {
    id: 7,
    name: "Bounce In",
    animation: "Bounce",
    className: "animate-bounceIn",
  },
  {
    id: 8,
    name: "Bounce Out",
    animation: "Bounce",
    className: "animate-bounceOut",
  },
  {
    id: 9,
    name: "Bounce Up",
    animation: "Bounce",
    className: "animate-bounceUp",
  },
  {
    id: 10,
    name: "Bounce Down",
    animation: "Bounce",
    className: "animate-bounceDown",
  },
  {
    id: 11,
    name: "Bounce Left",
    animation: "Bounce",
    className: "animate-bounceLeft",
  },
  {
    id: 12,
    name: "Bounce Right",
    animation: "Bounce",
    className: "animate-bounceRight",
  },
  {
    id: 16,
    name: "Ping",
    animation: "Reaction",
    className: "animate-ping",
  },
  {
    id: 18,
    name: "Slide Up",
    animation: "Slide",
    className: "animate-slideUp",
  },
  {
    id: 19,
    name: "Slide Down",
    animation: "Slide",
    className: "animate-slideDown",
  },
  {
    id: 20,
    name: "Slide Left",
    animation: "Slide",
    className: "animate-slideLeft",
  },
  {
    id: 21,
    name: "Slide Right",
    animation: "Slide",
    className: "animate-slideRight",
  },
  {
    id: 22,
    name: "Slide In",
    animation: "Slide",
    className: "animate-slideIn",
  },
  {
    id: 23,
    name: "Slide Out",
    animation: "Slide",
    className: "animate-slideOut",
  },
  {
    id: 24,
    name: "Scale Up",
    animation: "Scale",
    className: "animate-scaleUp",
  },
  {
    id: 25,
    name: "Scale Down",
    animation: "Scale",
    className: "animate-scaleDown",
  },
  {
    id: 26,
    name: "Scale Left",
    animation: "Scale",
    className: "animate-scaleLeft",
  },
  {
    id: 27,
    name: "Scale Right",
    animation: "Scale",
    className: "animate-scaleRight",
  },
  {
    id: 28,
    name: "Scale In",
    animation: "Scale",
    className: "animate-scaleIn",
  },
  {
    id: 29,
    name: "Scale Out",
    animation: "Scale",
    className: "animate-scaleOut",
  },
  // {
  //   id: 30,
  //   name: "Scale Up Down",
  //   animation: "Scale",
  //   className: "animate-scaleUpDown",
  // },
  // {
  //   id: 31,
  //   name: "Scale Bounce",
  //   animation: "Scale",
  //   className: "animate-scaleBounce",
  // },
  {
    id: 32,
    name: "Zoom In",
    animation: "Zoom",
    className: "animate-zoomIn",
  },
  {
    id: 33,
    name: "Zoom Out",
    animation: "Zoom",
    className: "animate-zoomOut",
  },
  {
    id: 34,
    name: "Pulse",
    animation: "Reaction",
    className: "animate-pulse",
  },
  { id: 35, name: "Rotate", animation: "Other", className: "animate-rotate" },
  {
    id: 37,
    name: "Shake",
    animation: "Reaction",
    className: "animate-shake",
  },
  {
    id: 38,
    name: "Heartbeat",
    animation: "Reaction",
    className: "animate-heartbeat",
  },
  {
    id: 39,
    name: "Flip X",
    animation: "Other",
    className: "animate-flipX",
  },
  {
    id: 40,
    name: "Flip Y",
    animation: "Other",
    className: "animate-flipY",
  },
  {
    id: 41,
    name: "Roll In",
    animation: "Other",
    className: "animate-rollIn",
  },
  {
    id: 42,
    name: "Roll Out",
    animation: "Other",
    className: "animate-rollOut",
  },
  { id: 43, name: "Wobble", animation: "Swing", className: "animate-wobble" },
  { id: 44, name: "Jello", animation: "Other", className: "animate-jello" },
  {
    id: 45,
    name: "LightSpeed Out",
    animation: "Other",
    className: "animate-lightSpeedOut",
  },
  {
    id: 46,
    name: "LightSpeed In",
    animation: "Other",
    className: "animate-lightSpeedIn",
  },

  {
    id: 47,
    name: "Spin Slow",
    animation: "Spin",
    className: "animate-spinSlow",
  },
  {
    id: 48,
    name: "Spin Fast",
    animation: "Spin",
    className: "animate-spinFast",
  },
  {
    id: 49,
    name: "Spin Clockwise",
    animation: "Spin",
    className: "animate-spinClockwise",
  },
  {
    id: 50,
    name: "Spin Counter clockwise",
    animation: "Spin",
    className: "animate-spinCounterClockwise",
  },
  {
    id: 51,
    name: "Spin Bounce",
    animation: "Spin",
    className: "animate-spinBounce",
  },
  {
    id: 52,
    name: "Spin Zigzag",
    animation: "Spin",
    className: "animate-spinZigzag",
  },
  {
    id: 53,
    name: "Ripple",
    animation: "Reaction",
    className: "animate-ripple",
  },
  {
    id: 54,
    name: "Stretch X",
    animation: "Other",
    className: "animate-stretchX",
  },
  {
    id: 55,
    name: "Stretch Y",
    animation: "Other",
    className: "animate-stretchY",
  },
  {
    id: 56,
    name: "Pendulum",
    animation: "Swing",
    className: "animate-pendulum",
  },
  {
    id: 57,
    name: "Swing Rotate",
    animation: "Swing",
    className: "animate-swingRotate",
  },
  {
    id: 58,
    name: "Blur In",
    animation: "Other",
    className: "animate-blurIn",
  },
  {
    id: 59,
    name: "Blur Out",
    animation: "Other",
    className: "animate-blurOut",
  },
  {
    id: 60,
    name: "Glow Pulse",
    animation: "Reaction",
    className: "animate-glowPulse",
  },
  {
    id: 61,
    name: "Swing Diagnoal",
    animation: "Swing",
    className: "animate-diagonalSwing",
  },
  {
    id: 62,
    name: "Swing Bounce",
    animation: "Swing",
    className: "animate-swingBounce",
  },
  {
    id: 63,
    name: "Zoom In Up",
    animation: "Zoom",
    className: "animate-zoomInUp",
  },
  {
    id: 64,
    name: "Zoom In Down",
    animation: "Zoom",
    className: "animate-zoomInDown",
  },
  {
    id: 65,
    name: "Zoom In Right",
    animation: "Zoom",
    className: "animate-zoomInRight",
  },
  {
    id: 66,
    name: "Zoom In Left",
    animation: "Zoom",
    className: "animate-zoomInLeft",
  },
  {
    id: 67,
    name: "Zoom In Bottom Left",
    animation: "Zoom",
    className: "animate-zoomInBottomLeft",
  },
  {
    id: 68,
    name: "Zoom In Bottom Right",
    animation: "Zoom",
    className: "animate-zoomInBottomRight",
  },
  {
    id: 69,
    name: "Zoom Out Left",
    animation: "Zoom",
    className: "animate-zoomOutLeft",
  },
  {
    id: 70,
    name: "Zoom Out Right",
    animation: "Zoom",
    className: "animate-zoomOutRight",
  },
  {
    id: 71,
    name: "Zoom Out Down",
    animation: "Zoom",
    className: "animate-zoomOutDown",
  },
  {
    id: 72,
    name: "Zoom Out Up",
    animation: "Zoom",
    className: "animate-zoomOutUp",
  },
];

const animationVariants = {
  "animate-fadeIn": "hover:animate-fadeIn",
  "animate-fadeOut": "hover:animate-fadeOut",
  "animate-fadeUp": "hover:animate-fadeUp",
  "animate-fadeDown": "hover:animate-fadeDown",
  "animate-fadeLeft": "hover:animate-fadeLeft",
  "animate-fadeRight": "hover:animate-fadeRight",
  "animate-slideUp": "hover:animate-slideUp",
  "animate-slideDown": "hover:animate-slideDown",
  "animate-slideLeft": "hover:animate-slideLeft",
  "animate-slideRight": "hover:animate-slideRight",
  "animate-slideIn": "hover:animate-slideIn",
  "animate-slideOut": "hover:animate-slideOut",
  "animate-rotate": "hover:animate-rotate",
  "animate-scaleUp": "hover:animate-scaleUp",
  "animate-scaleDown": "hover:animate-scaleDown",
  "animate-scaleLeft": "hover:animate-scaleLeft",
  "animate-scaleRight": "hover:animate-scaleRight",
  "animate-scaleIn": "hover:animate-scaleIn",
  "animate-scaleOut": "hover:animate-scaleOut",
  "animate-scaleUpDown": "hover:animate-scaleUpDown",
  "animate-scaleBounce": "hover:animate-scaleBounce",
  "animate-bounce": "hover:animate-bounce",
  "animate-bounceIn": "hover:animate-bounceIn",
  "animate-bounceOut": "hover:animate-bounceOut",
  "animate-bounceRight": "hover:animate-bounceRight",
  "animate-bounceLeft": "hover:animate-bounceLeft",
  "animate-bounceUp": "hover:animate-bounceUp",
  "animate-bounceDown": "hover:animate-bounceDown",
  "animate-zoomIn": "hover:animate-zoomIn 0.5s ease-out",
  "animate-zoomOut": "hover:animate-zoomOut 0.5s ease-out",
  "animate-pulse": "hover:animate-pulse 1.5s infinite",
  "animate-rotate": "hover:animate-rotate 1s linear infinite",
  "animate-shake": "hover:animate-shake 0.5s ease-in-out",
  "animate-ping": "hover:animate-ping ",
  "animate-heartbeat": "hover:animate-heartbeat",
  "animate-flipX": "hover:animate-flipX",
  "animate-flipY": "hover:animate-flipY",
  "animate-rollIn": "hover:animate-rollIn",
  "animate-rollOut": "hover:animate-rollOut",
  "animate-wobble": "hover:animate-wobble",
  "animate-jello": "hover:animate-jello",
  "animate-lightSpeedIn": "hover:animate-lightSpeedIn",
  "animate-lightSpeedOut": "hover:animate-lightSpeedOut",
  "animate-spinClockwise": "hover:animate-spinClockwise",
  "animate-spinCounterClockwise": "hover:animate-spinCounterClockwise",
  "animate-spinFast": "hover:animate-spinFast",
  "animate-spinSlow": "hover:animate-spinSlow",
  "animate-spinBounce": "hover:animate-spinBounce",
  "animate-spinZigzag": "hover:animate-spinZigzag",
  "animate-ripple": "hover:animate-ripple",
  "animate-stretchX": "hover:animate-stretchX",
  "animate-stretchY": "hover:animate-stretchY",
  "animate-pendulum": "hover:animate-pendulum",
  "animate-swingRotate": "hover:animate-swingRotate",
  "animate-blurIn": "hover:animate-blurIn",
  "animate-blurOut": "hover:animate-blurOut",
  "animate-glowPulse": "hover:animate-glowPulse",
  "animate-glow": "hover:animate-glow",
  "animate-diagonalSwing": "hover:animate-diagonalSwing",
  "animate-swingBounce": "hover:animate-swingBounce",
};

const themeData = `theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s infinite",
        fadeOut: "fadeOut 1.5s infinite",
        fadeUp: "fadeUp 1.5s infinite",
        fadeDown: "fadeDown 1.5s infinite",
        fadeLeft: "fadeLeft 1.5s infinite",
        fadeRight: "fadeRight 1.5s infinite",
        slideIn: "slideIn 0.5s infinite",
        slideOut: "slideOut 0.5s infinite",
        slideUp: "slideUp 0.5s infinite",
        slideDown: "slideDown 0.5s infinite",
        slideLeft: "slideLeft 0.5s infinite",
        slideRight: "slideRight 0.5s infinite",
        bounce: "bounce 1s infinite",
        bounceIn: "bounceIn 0.5s infinite",
        bounceOut: "bounceOut 0.5s infinite",
        bounceRight: "bounceRight 0.5s infinite",
        bounceLeft: "bounceLeft 0.5s infinite",
        bounceUp: "bounceUp 0.5s infinite",
        bounceDown: "bounceDown 0.5s infinite",
        zoomIn: "zoomIn 0.5s infinite",
        zoomInBottomRight: "zoomInBottomRight 1s infinite",
        zoomInBottomLeft: "zoomInBottomLeft 1s infinite",
        zoomInTopRight: "zoomInTopRight 1s infinite",
        zoomInTopLeft: "zoomInTopLeft 1s infinite",
        zoomInDown: "zoomInDown 1s infinite",
        zoomInRight: "zoomInRight 1s infinite",
        zoomInLeft: "zoomInLeft 1s infinite",
        zoomInUp: "zoomInUp 1s infinite",
        zoomOut: "zoomOut 1s infinite",
        zoomOutLeft: "zoom-out-left 1s infinite",
        zoomOutRight: "zoom-out-right 1s infinite",
        zoomOutUp: "zoom-out-up 1s infinite",
        zoomOutDown: "zoom-out-down 1s infinite",
        pulse: "pulse 1.5s infinite",
        rotate: "rotate 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        shake: "shake 0.5s infinite",
        flip: "flip 1s infinite",
        heartbeat: "heartbeat 1.5s infinite",
        scaleUp: "scaleUp 0.5s infinite",
        scaleDown: "scaleDown 0.5s infinite",
        scaleLeft: "scaleLeft 0.5s infinite",
        scaleRight: "scaleRight 0.5s infinite",
        scaleIn: "scaleIn 0.5s infinite",
        scaleOut: "scaleOut 0.5s infinite",
        scaleUpDown: "scaleUpDown 1s infinite infinite",
        scaleBounce: "scaleBounce 0.8s infinite infinite",
        flipX: "flipX 1s infinite",
        flipY: "flipY 1s infinite",
        rollIn: "rollIn 1s ease-out infinite",
        rollOut: "rollOut 1s ease-in infinite",
        wobble: "wobble 1s infinite",
        jello: "jello 1s infinite",
        lightSpeedIn: "lightSpeedIn 1s infinite",
        lightSpeedOut: "lightSpeedOut 1s infinite",
        spinSlow: "spinSlow 2s linear infinite",
        spinFast: "spinFast 1s linear infinite",
        spinClockwise: "spinClockwise 2s linear infinite",
        spinCounterClockwise: "spinCounterClockwise 2s linear infinite",
        spinBounce: "spinBounce 2s ease-in-out infinite",
        spinZigzag: "spinZigzag 2s ease-in-out infinite",
        ripple: "ripple 1.5s ease-in-out infinite",
        stretchX: "stretchX 1s infinite",
        stretchY: "stretchY 1s infinite",
        pendulum: "pendulum 1s infinite",
        swingRotate: "swingRotate 1s infinite",
        blurIn: "blurIn 1s infinite",
        blurOut: "blurOut 1s infinite",
        glowPulse: "glowPulse 1.5s ease-in-out infinite",
        glow: "glow 1.5s ease-in-out infinite",
        diagonalSwing: "diagonalSwing 1s ease-in-out infinite",
        swingBounce: "swingBounce 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeOut: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideIn: {
          from: {
            transform: "translateX(-30%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(30%)",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(30%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideDown: {
          from: {
            transform: "translateY(-30%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(30%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideRight: {
          from: {
            transform: "translateX(-30%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        bounceIn: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        bounceOut: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
        },
        bounceRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(15px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        bounceLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-15px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        bounceUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        bounceDown: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        zoomIn: {
          from: {
            transform: "scale(0)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        zoomInUp: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInDown: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInRight: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInLeft: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInBottomRight: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInTopRight: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInTopLeft: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomInBottomLeft: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        zoomOut: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(0)",
          },
        },
        "zoom-out-down": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
        },
        "zoom-out-up": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
        },
        "zoom-out-left": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0%, 0)",
          },
        },
        "zoom-out-right": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0%, 0)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        ping: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "75%, 100%": {
            transform: "scale(1.15)",
            opacity: "0",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(10px)",
          },
        },
        flip: {
          from: {
            transform: "rotateY(0)",
          },
          to: {
            transform: "rotateY(180deg)",
          },
        },
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "20%, 60%": {
            transform: "scale(1.1)",
          },
          "40%, 80%": {
            transform: "scale(0.9)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        scaleDown: {
          "0%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        scaleLeft: {
          "0%": {
            transform: "scaleX(0.5)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        scaleRight: {
          "0%": {
            transform: "scaleX(1.5)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        scaleOut: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0)",
            opacity: "0",
          },
        },
        scaleUpDown: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        scaleBounce: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        flipX: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(180deg)",
          },
        },
        flipY: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
        rollIn: {
          "0%": {
            transform: "rotateX(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
        rollOut: {
          "0%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
        },
        wobble: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
        },
        jello: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.1) rotate(10deg)",
          },
          "50%": {
            transform: "scale(0.9) rotate(-10deg)",
          },
          "75%": {
            transform: "scale(1.1) rotate(10deg)",
          },
        },
        lightSpeedIn: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        lightSpeedOut: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
        spinClockwise: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinCounterClockwise: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        spinFast: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinSlow: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spinBounce: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg) translateY(-10px)",
          },
          "50%": {
            transform: "rotate(180deg) translateY(10px)",
          },
          "75%": {
            transform: "rotate(270deg) translateY(-10px)",
          },
        },
        spinZigzag: {
          "0%": {
            transform: "rotate(0deg) translateX(0)",
          },
          "25%": {
            transform: "rotate(90deg) translateX(10px)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(-10px)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(10px)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(0)",
          },
        },
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        stretchX: {
          "0%": {
            transform: "scaleX(1)",
          },
          "100%": {
            transform: "scaleX(1.5)",
          },
        },
        stretchY: {
          "0%": {
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(1.5)",
          },
        },
        pendulum: {
          "0%": {
            transform: "rotate(30deg)",
          },
          "50%": {
            transform: "rotate(-30deg)",
          },
          "100%": {
            transform: "rotate(30deg)",
          },
        },
        swingRotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        blurIn: {
          "0%": {
            filter: "blur(10px)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        blurOut: {
          "0%": {
            filter: "blur(0)",
          },
          "100%": {
            filter: "blur(10px)",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(0, 205, 0, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(0, 205, 0, 1)",
          },
        },
        diagonalSwing: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
          "50%": {
            transform: "translate(-20px, 20px) rotate(45deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
        },
        swingBounce: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(15deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },`;

const textAnimationTailwindConfig = `theme: {
    extend: {
      animation: {
        "char-reveal": "charReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "word-reveal-up": "word-reveal-up 0.5s ease-in-out forwards",
        "word-reveal-side": "word-reveal-side 0.5s ease-in-out forwards",
        shimmer: "shimmer 5s infinite linear",
      },
      keyframes: {
        charReveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "word-reveal-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "word-reveal-side": {
          "0%": {
            opacity: "0",
            filter: "blur(2px)",
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            transform: "scale(1)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  `;

const scrambleTextAnimationCode = `
  "use client";
  import React, { useState, useEffect, useCallback } from "react";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const ScrambleTextAnimation = ({
    text,
    className = "",
    delay = 0,
    scrambleSpeed = 50,
    duration = 1500,
  }) => {
    const [displayChars, setDisplayChars] = useState(text.split(""));

    const scrambleChar = useCallback(() => {
      return characters[Math.floor(Math.random() * characters.length)];
    }, []);

    useEffect(() => {
      let timeoutId;
      let intervalId;
      const iterations = Math.floor(duration / scrambleSpeed);
      let currentIteration = 0;

      const startAnimation = () => {
        intervalId = setInterval(() => {
          currentIteration++;

          setDisplayChars((prev) =>
            text.split("").map((targetChar, index) => {
              if (targetChar === " ") return " "; // Preserve spaces

              // Gradually increase chance of settling on final character
              const progress = currentIteration / iterations;
              const charProgress = index / text.length;

              if (progress > charProgress && Math.random() > 0.5) {
                return targetChar;
              }

              if (prev[index] === targetChar && Math.random() > 0.3) {
                return targetChar;
              }

              return scrambleChar();
            })
          );

          if (currentIteration >= iterations) {
            clearInterval(intervalId);
            setDisplayChars(text.split(""));
          }
        }, scrambleSpeed);
      };

      timeoutId = setTimeout(startAnimation, delay * 100);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }, [text, delay, scrambleSpeed, duration, scrambleChar]);

    return (
      <span className={\`inline-block \${className}\`}>
        {displayChars.map((char, index) => (
          <span
            key={\`\${index}-\${char}\`}
            className="inline-block"
            style={{
              transition: "all 0.1s ease-out",
            }}
          >
            {char === " " ? "\\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  export default ScrambleTextAnimation;
  `;

const TextBlurRevealCode = `
"use client";
import React from "react";

const TextBlurReveal = ({ text, className = "", delay = 0, charDelay = 0.08 }) => {
  return (
    <div className="p-4">
      <span className={\`inline-block \${className} overflow-hidden\`}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-char-reveal transform opacity-0"
            style={{
              animationDelay: \`\${delay + index * charDelay}s\`,
              animationFillMode: "forwards",
            }}
          >
            {char === " " ? "\\u00A0" : char}
          </span>
        ))}
      </span>
    </div>
  );
};

export default TextBlurReveal;
`;

const TextShimmerEffectCode = `"use client";
import React from "react";

const TextShimmerEffect = ({
  text,
  className = "",
  shimmerDuration = 3, // Shimmer animation duration
}) => {
  return (
    <div>
      <div
        className={\`relative inline-block overflow-hidden text-black \${className}\`}
        style={{
          background:
            "linear-gradient(90deg, #000000 10%, #c0c0c0 40%, #707070 100%)",
          backgroundSize: "200% 100%",
          animation: \`shimmer \${shimmerDuration}s infinite linear\`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default TextShimmerEffect;
`;

const WordAnimationCode = `
"use client";
import { useEffect, useState } from "react";

const words = [
  "Creators",
  "Innovators",
  "Dreamers",
  "Builders",
  "Thinkers",
  "Visionaries",
];

function useWordCycle(words, interval) {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setIndex(Math.floor(Math.random() * words.length));
      setIsInitial(false);
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval, isInitial]);

  return words[index];
}

const WordAnimation = () => {
  const word = useWordCycle(words, 1600);
  return (
    <div className="inline-block text-primary">
      {word?.split("").map((char, index) => (
        <span
          key={\`\${word}-\${char}-\${index}\`}
          className={\`inline-block whitespace-pre opacity-0 animate-fadeUp\`}
          style={{ animationDelay: \`\${index * 0.015}s\` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default WordAnimation;
`;

const TextWordBlurRevealUpCode = `
"use client";
import React from "react";

const TextWordBlurRevealUp = ({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.15, // Adjusted delay for words
}) => {
  return (
    <div className="p-4">
      <span className={\`inline-block \${className} overflow-hidden\`}>
        {text.split(" ").map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block animate-word-reveal-up opacity-0"
            style={{
              animationDelay: \`\${delay + wordIndex * wordDelay}s\`,
              animationFillMode: "forwards",
            }}
          >
            {word === " " ? "\\u00A0" : word}
            <span>&nbsp;</span>
          </span>
        ))}
      </span>
    </div>
  );
};

export default TextWordBlurRevealUp;
`;

const TextWordBlurRevealSideCode = `
"use client";
import React from "react";

const TextWordBlurRevealSide = ({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.15, // Adjusted delay for words
}) => {
  return (
    <div className="p-4">
      <span className={\`inline-block \${className} overflow-hidden\`}>
        {text.split(" ").map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block animate-word-reveal-side opacity-0"
            style={{
              animationDelay: \`\${delay + wordIndex * wordDelay}s\`,
              animationFillMode: "forwards",
            }}
          >
            {word === " " ? "\\u00A0" : word}
            <span>&nbsp;</span>
          </span>
        ))}
      </span>
    </div>
  );
};

export default TextWordBlurRevealSide;
`;

export {
  animationData,
  animationVariants,
  themeData,
  textAnimationTailwindConfig,
  scrambleTextAnimationCode,
  TextBlurRevealCode,
  TextShimmerEffectCode,
  WordAnimationCode,
  TextWordBlurRevealUpCode,
  TextWordBlurRevealSideCode,
};
