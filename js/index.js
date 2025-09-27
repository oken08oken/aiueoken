const siteWidth = document.querySelector(".site-width");
window.addEventListener("resize", (e) => {
  siteWidth.textContent = window.innerWidth;
});

gsap.registerPlugin(SplitText);

const nav = document.querySelector("nav");
const navCloseButton = document.querySelector("nav > .nav-close-button");
const navOpenButton = document.querySelector(".nav-open-button");

navOpenButton.addEventListener("click", (e) => {
  const target = e.target;
  gsap.to(navOpenButton, {
    transformOrigin: "right bottom",
    scale: 0,
    ease: "expo.out",
  });

  gsap.to(nav, {
    scale: 1,
    transformOrigin: "right bottom",
    ease: "expo.out",
  });
});

navCloseButton.addEventListener("click", (e) => {
  gsap.to(navOpenButton, {
    scale: 1,
    ease: "expo.out",
  });

  gsap.to(nav, {
    scale: 0,
    transformOrigin: "right bottom",
    ease: "expo.out",
  });
});

function split(text) {
  const item = SplitText.create(text, {
    type: "chars",
  });

  return item.chars;
}

const maTitle = document.querySelector(".ma-title");

function maMotion() {
  const tl = gsap.timeline({
    delay: 0.3,
  });

  tl.from(split(maTitle), {
    scale: 0,
    ease: "back.inOut",
    stagger: {
      amount: 0.4,
    },
  }).to(split(maTitle), {
    stagger: {
      amount: 0.2,
    },
    keyframes: {
      "10%": {
        color: "white",
      },
      "100%": {
        color: "revert",
      },
    },
  });

  tl.from(
    ".learn > li",
    {
      clipPath: "inset(0 100% 0 0)",
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    },
    "0"
  );
}

const miTitle = document.querySelector(".mi-title");
const miText = document.querySelector(".mi-text");

const muTitle = document.querySelector(".mu-title");
const meTitle = document.querySelector(".me-title");

function miMotion() {
  const tl = gsap.timeline({
    delay: 0.3,
  });
  tl.from(miTitle, {
    scale: 0,
    transformOrigin: "left",
    ease: "expo.out",
  });
  tl.from(
    miText,
    {
      scale: 0,
      transformOrigin: "right",
      ease: "expo.out",
    },
    "<"
  );
}

function muMotion() {
  const tl = gsap.timeline();

  tl.from(".mu-text", {
    scale: 0,
    duration: 0.35,
  }).to(
    split(".mu-text"),
    {
      keyframes: {
        "20%": {
          rotate: 20,
        },
        "40%": {
          rotate: -20,
        },
        "60%": {
          rotate: 20,
        },
        "80%": {
          rotate: -20,
        },
        "100%": {
          rotate: 0,
        },
      },
      duration: 0.7,
    },
    "+=0.1"
  );
}

function meMotion() {
  gsap.from(".me-item", {
    opacity: 0,
    filter: "blur(16px)",
    duration: 0.8,
  });
}

const moTitle = document.querySelector(".mo-title");

function moMotion() {
  const tl = gsap.timeline();

  tl.to(split(moTitle), {
    keyframes: {
      "0%": {
        scale: 0,
      },
      "50%": {
        scale: 2,
      },
      "100%": {
        scale: 1,
      },
    },
    stagger: {
      amount: 0.3,
    },
  }).from(
    ".mo-text",
    {
      clipPath: "inset(0 100% 0 0)",
      ease: "expo.inOut",
      stagger: 0.1,
    },
    "-=0.5"
  );
}

ScrollTrigger.create({
  trigger: maTitle,
  onEnter: () => {
    maMotion();
  },
});

ScrollTrigger.create({
  trigger: miTitle,
  onEnter: () => {
    miMotion();
  },
});

ScrollTrigger.create({
  trigger: muTitle,
  onEnter: () => {
    muMotion();
  },
});

ScrollTrigger.create({
  trigger: meTitle,
  onEnter: () => {
    meMotion();
  },
});

ScrollTrigger.create({
  trigger: moTitle,
  onEnter: () => {
    moMotion();
  },
});
