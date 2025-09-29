gsap.registerPlugin(SplitText, ScrollTrigger);

function split(text) {
  const item = SplitText.create(text, {
    type: "chars",
  });

  return item.chars;
}

const siteWidth = document.querySelector(".site-width");
window.addEventListener("resize", (e) => {
  siteWidth.textContent = window.innerWidth;
});

// タイトル
const aiue = document.querySelector(".aiue");
const oken = document.querySelector(".oken");

const okenSplit = split(oken);
const okenChar1 = okenSplit[0];
const okenChar2 = okenSplit[1];
const okenChar3 = okenSplit[2];

gsap.set(okenChar1, {
  xPercent: 100,
});

const titleTimeline = gsap.timeline();
titleTimeline.add(aiueTextMotion()).add(okenTextMotion(), "<0.7");

function aiueTextMotion() {
  const tl = gsap.timeline();

  tl.from(split(aiue), {
    scale: 0,
    rotate: 10,
    transformOrigin: gsap.utils.wrap(["left", "right", "top", "bottom"]),
    ease: "expo.out",
    stagger: {
      amount: 0.4,
    },
  }).to(
    split(aiue),
    {
      color: gsap.utils.wrap(["red", "orange", "blue", "green"]),
      ease: "expo.out",
      stagger: {
        amount: 0.1,
      },
    },
    "<0.25"
  );

  return tl;
}

function okenTextMotion() {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
    },
  });

  tl.from(okenChar1, {
    scale: 0,
  })
    .to(
      okenChar1,
      {
        xPercent: 0,
      },
      "<0.5"
    )
    .to(okenChar1, {
      scale: 1.75,
    })
    .from(
      okenChar2,
      {
        scale: 0,
      },
      "<0.15"
    )
    .from(
      okenChar3,
      {
        scale: 0,
      },
      "<0.15"
    )
    .to(
      okenChar1,
      {
        scale: 1,
        ease: "expo.in",
      },
      "<"
    );

  return tl;
}

// アニメ
gsap.from(".anime-titles li", {
  clipPath: "inset(0 100% 0 0)",
  stagger: {
    amount: 0.4,
  },
  scrollTrigger: {
    trigger: ".anime-titles",
  },
});
// オープニング
const openingItems = document.querySelector(".opening-items");

gsap.to(".opening-slide", {
  xPercent: 100,
  ease: "expo.out",
  stagger: {
    amount: 0.6,
  },
  scrollTrigger: {
    trigger: openingItems,
    start: "top 70%",
  },
});

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
