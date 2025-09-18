gsap.registerPlugin(ScrollTrigger, SplitText);

const maMainChars = document.querySelectorAll(".ma-main-char");

const maContent = document.getElementById("ma");
const maTitle = maContent.querySelector("h2");
const maTexts = maContent.querySelectorAll("p");

const miContent = document.getElementById("mi");
const miTitle = miContent.querySelector("h2");

const muContent = document.getElementById("mu");
const muTitle = muContent.querySelector("h2");
const muTexts = muContent.querySelectorAll("p");
const split = SplitText.create(muTitle, { type: "chars" });

const meContent = document.getElementById("me");
const meTitle = meContent.querySelector("h2");
const meItems = meContent.querySelector(".me-items");

const moContent = document.getElementById("mo");
const moTitle = moContent.querySelector("h2");
const moText = moContent.querySelector("p");
const moChars = SplitText.create(moTitle, { type: "chars" });

gsap.set(maTitle, {
  scale: 0,
});
gsap.set(maTexts, {
  scale: 0,
});
gsap.set(miTitle, {
  scale: 0,
});
gsap.set(muTitle, {
  scale: 0,
});
gsap.set(muTexts, {
  scale: 0,
});
gsap.set(meItems, {
  opacity: 0,
});
gsap.set(moTitle, {
  scale: 0,
});

ScrollTrigger.create({
  trigger: maMainChars[0],
  start: "top 70%",
  onEnter: maContentMotion,
  once: true,
});
ScrollTrigger.create({
  trigger: maMainChars[1],
  start: "top 70%",
  onEnter: miContentMotion,
  once: true,
});
ScrollTrigger.create({
  trigger: maMainChars[2],
  start: "top 70%",
  onEnter: muContentMotion,
  once: true,
});
ScrollTrigger.create({
  trigger: maMainChars[3],
  start: "top 70%",
  onEnter: meContentMotion,
  once: true,
});
ScrollTrigger.create({
  trigger: maMainChars[4],
  start: "top 70%",
  onEnter: moContentMotion,
  once: true,
});

function maContentMotion() {
  const char = maMainChars[0];
  const tl = gsap.timeline();

  tl.to(char, {
    scale: 0,
    ease: "expo.in",
    duration: 0.3,
  })
    .to(maTitle, {
      scale: 1,
      ease: "expo.out",
    })
    .to(
      maTexts,
      {
        scale: 1,
        ease: "back.out",
        duration: 0.3,
        stagger: {
          each: 0.05,
          from: "center",
        },
      },
      "-=0.25"
    );
}

function miContentMotion() {
  const char = maMainChars[1];
  const tl = gsap.timeline();

  tl.to(char, {
    scale: 0,
    ease: "expo.in",
    duration: 0.3,
  }).to(miTitle, {
    scale: 1,
    rotate: 360,
    ease: "expo.out",
  });
}

function muContentMotion() {
  const tl = gsap.timeline();
  const char = maMainChars[2];

  tl.to(char, {
    scale: 0,
    ease: "expo.in",
    duration: 0.3,
  })
    .to([muTitle, muTexts], {
      scale: 1,
      ease: "expo.out",
    })
    .to([split.chars, muTexts], {
      duration: 0.7,
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
    });
}

function meContentMotion() {
  const char = maMainChars[3];
  const tl = gsap.timeline();

  tl.to(char, {
    opacity: 0,
    duration: 0.3,
  }).to(meItems, {
    opacity: 1,
  });
}

function moContentMotion() {
  const char = maMainChars[4];
  const tl = gsap.timeline();

  tl.to(char, {
    scale: 0,
    duration: 0.3,
    ease: "back.in",
  })
    .to(moTitle, {
      scale: 1,
      ease: "back.out",
    })
    .to(moChars.chars, {
      stagger: 0.05,
      keyframes: {
        "20%": {
          scale: 2.5,
        },
        "40%": {
          scale: 1.4,
        },
        "60%": {
          scale: 4,
        },
        "80%": {
          scale: 2,
        },
        "100%": {
          scale: 1,
        },
      },
    })
    .from(moText, {
      clipPath: "inset(0 0 0 100%)",
      ease: "expo.inOut",
    });
}

// const maContent = document.querySelector(".ma-contents > article");
// const contentWidth = maContent.clientWidth;
// const contentHeight = maContent.clientHeight;
// const moveX = contentWidth / 3;
// const moveY = contentHeight / 3;

// gsap.to(ma, {
//   x: `random(${-moveX}, ${moveX}, 20)`,
//   y: `random(${-moveY}, ${moveY}, 20)`,
// });
