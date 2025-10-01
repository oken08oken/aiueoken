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

const nav = document.querySelector("nav");
const navCloseButton = document.querySelector("nav > .nav-close-button");
const navOpenButton = document.querySelector(".nav-open-button");
const navOpenTitle = document.querySelector(".nav-open-title");

navOpenButton.addEventListener("click", (e) => {
  const tl = gsap.timeline();

  gsap.to(navOpenButton, {
    transformOrigin: "right bottom",
    scale: 0,
    ease: "expo.out",
  });

  tl.to(nav, {
    scale: 1,
    transformOrigin: "right bottom",
    ease: "expo.out",
  }).from(
    ".nav-gyo",
    {
      scale: 0,
      ease: "expo.out",
      transformOrigin: "top",
      stagger: {
        amount: 0.2,
      },
    },
    "<0.2"
  );
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

const titleTimeline = gsap.timeline({
  delay: 1,
});
titleTimeline
  .add(aiueTextMotion())
  .add(okenTextMotion(), "<0.7")
  .add(navOpenButtonInitMotion());

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

function navOpenButtonInitMotion() {
  const tl = gsap.timeline();
  tl.from(navOpenButton, {
    rotate: 720,
    scale: 0,
    ease: "expo.inOut",
  }).from(split(navOpenTitle), {
    scale: 0,
    ease: "back.out",
    stagger: {
      amount: 0.15,
    },
  });

  return tl;
}

// アニメ
const animeTitle = document.querySelector(".anime-title");
const animeTitleSpan = document.querySelector(".anime-title > span");
const animeTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: animeTitle,
    start: "top 80%",
  },
});

animeTitleTl
  .from(split(animeTitle), {
    scale: 0,
    transformOrigin: "left",
    ease: "expo.out",
    stagger: {
      amount: 0.3,
    },
  })
  .to(
    animeTitleSpan,
    {
      backgroundSize: "100% 100%",
      color: "white",
      ease: "expo.out",
    },
    "<0.4"
  );

const animeNames = document.querySelectorAll(".anime-titles li");
animeNames.forEach((list, i) => {
  gsap.from(list, {
    clipPath: "inset(0 100% 0 0)",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: list,
    },
  });
});

gsap.from(".rank-item1", {
  scale: 0,
  rotate: 20,
  transformOrigin: "bottom left",
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".rank-item1",
  },
});

const rankItem2Text = document.querySelector(".rank-item2-text");
const rankItem2TextSpan = document.querySelector(".rank-item2-text > span");
const rankItem2TextTl = gsap.timeline({
  scrollTrigger: {
    trigger: rankItem2Text,
    start: "top 50%",
  },
});

rankItem2TextTl
  .from(split(rankItem2Text), {
    scale: 0,
    ease: "expo.out",
    stagger: {
      amount: 0.3,
    },
  })
  .to(
    rankItem2TextSpan,
    {
      backgroundSize: "100% 100%",
      ease: "expo.out",
    },
    "<0.2"
  );

// いわて
const iwateItem2Title = document.querySelector(".iwate-item2-title");
gsap.from(split(iwateItem2Title), {
  scale: 0,
  ease: "expo.out",
  stagger: {
    amount: 0.2,
  },
  scrollTrigger: {
    trigger: iwateItem2Title,
  },
});

const iwateItem2Lists = document.querySelectorAll(".iwate-item2-list > li");
iwateItem2Lists.forEach((list) => {
  gsap.from(list, {
    scale: 0,
    ease: "expo.out",
    duration: 0.35,
    scrollTrigger: {
      trigger: list,
    },
  });
});

// うまとま
const umatoma1 = document.querySelector(".u-word1");
const umatoma2 = document.querySelector(".u-word2");
const umatoma3 = document.querySelector(".u-word3");
const umatoma4 = document.querySelector(".u-word4");
const uText2 = document.querySelector(".u-text2");

const umatomaTl = gsap.timeline({
  scrollTrigger: {
    trigger: umatoma1,
    start: "top 70%",
  },
});

umatomaTl
  .to(umatoma1, {
    backgroundSize: "100% 100%",
    ease: "expo.in",
  })
  .from(
    split(umatoma2),
    {
      scale: 0,
      transformOrigin: gsap.utils.wrap(["top", "bottom"]),
      ease: "expo.out",
    },
    "<0.2"
  )
  .from(
    umatoma3,
    {
      rotate: -40,
      scale: 0,
      ease: "ease.in",
    },
    "<0.2"
  )
  .from(
    split(umatoma4),
    {
      scale: 0,
      ease: "expo.out",
    },
    "<0.2"
  );

gsap.from(uText2, {
  scale: 0,
  rotate: 50,
  ease: "expo.out",
  scrollTrigger: {
    trigger: uText2,
  },
});

// エックス
const eTitle = document.querySelector(".e-title");

gsap.from(split(eTitle), {
  xPercent: -100,
  scale: 0,
  ease: "expo.out",
  stagger: {
    amount: 0.4,
  },
  scrollTrigger: {
    trigger: eTitle,
  },
});

// オープニング
const oTitle = document.querySelector(".o-title");
const oTitleWord1 = document.querySelector(".o-title-word1");
const oTitleWord2 = document.querySelector(".o-title-word2");
const oTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: oTitle,
  },
});

oTitleTl
  .from(oTitleWord1, {
    clipPath: "inset(0 100% 0 0)",
    ease: "expo.out",
  })
  .from(
    split(oTitleWord2),
    {
      scale: 0,
      transformOrigin: gsap.utils.wrap(["top", "bottom"]),
      ease: "expo.out",
      stagger: {
        aomount: 0.3,
      },
    },
    "<0.15"
  );

const openingItems = document.querySelectorAll(".opening-slide");

openingItems.forEach((item) => {
  gsap.to(item, {
    xPercent: 100,
    ease: "expo.inOut",
    duration: 0.4,
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
    },
  });
});

// か
const kaTitle = document.querySelector(".ka-title");
const kaTitleSpan = document.querySelector(".ka-title > span");
const kaTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: kaTitle,
    start: "top center",
  },
});

kaTitleTl
  .from(split(kaTitle), {
    opacity: 0,
    stagger: {
      amount: 0.3,
    },
  })
  .to(
    split(kaTitleSpan),
    {
      rotate: 360,
      duration: 4,
    },
    "<0.5"
  );

// キウイ
const kiTitle = document.querySelector(".ki-title");
const kiTitleTl = gsap.timeline({
  defaults: {
    ease: "expo.out",
  },
  scrollTrigger: {
    trigger: kiTitle,
    start: "top 80%",
  },
});

kiTitleTl.to(split(kiTitle), {
  color: gsap.utils.wrap(["pink", "yellow", "green"]),
  stagger: {
    amount: 0.3,
  },
});
kiTitleTl.to(
  split(kiTitle),
  {
    color: "#333",
    stagger: {
      amount: 0.3,
    },
  },
  "-=0.1"
);

const kiwiItems = document.querySelectorAll(".kiwi-items > .item");
kiwiItems.forEach((item) => {
  gsap.to(item, {
    clipPath: "circle(75% at 50% 50%)",
    ease: "expo.out",
    scrollTrigger: {
      trigger: item,
      start: "top 70%",
    },
  });
});

// くつ
const kuTitle = document.querySelector(".ku-title");
gsap.from(kuTitle, {
  scale: 0,
  rotate: -100,
  ease: "back.out",
  duration: 0.3,
  scrollTrigger: {
    trigger: kuTitle,
  },
});

// けんすい
const kShape = document.querySelector(".k-shape");
gsap.from(kShape, {
  rotate: 80,
  scale: 0,
  ease: "expo.inOut",
  scrollTrigger: {
    trigger: kShape,
    start: "top 70%",
  },
});

// こめ
const riceTop = document.querySelector(".rice-top");
const riceBottom = document.querySelector(".rice-bottom");

const koTitle = document.querySelector(".ko-title");
const koTitleTl = gsap.timeline({
  defaults: {
    ease: "expo.out",
    duration: 0.2,
  },
  scrollTrigger: {
    trigger: koTitle,
    start: "top 80%",
  },
});

koTitleTl
  .from(split(koTitle)[0], {
    scale: 0,
  })
  .from(split(koTitle)[1], {
    scale: 0,
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
