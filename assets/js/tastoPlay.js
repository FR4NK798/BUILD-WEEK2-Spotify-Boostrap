const btnImg = document.querySelector("div .playerDiv");
const arrowPlayer = document.querySelector("div .arrow-player");

btnImg.addEventListener("mouseenter", () => {
  console.log("stato di hover");

  //   element.addEventListener('mouseenter', enter)
  //   element.addEventListener('mouseleave', leave)
  arrowPlayer.classList.remove("d-none");
});

btnImg.addEventListener("mouseleave", () => {
  arrowPlayer.classList.add("d-none");
});

// pulsante like
// INIZIO

const like = document.querySelector("div .heart");

let classLike = "NonPremuto";

like.onclick = () => {
  if (classLike === "NonPremuto") {
    like.classList.add("like");
    classLike = "premuto";
    console.log("premuto");
  } else {
    like.classList.remove("like");
    classLike = "NonPremuto";
    console.log("non premuto");
  }
};

// PULSANTE SHUFFLE

const shuffle = document.querySelector("div .shuffle");

let classShuffle = "NonPremuto";

shuffle.onclick = () => {
  if (classLike === "NonPremuto") {
    shuffle.classList.add("shuffleActive");
    classLike = "premuto";
    console.log("premuto");
  } else {
    shuffle.classList.remove("shuffleActive");
    classLike = "NonPremuto";
    console.log("non premuto");
  }
};

// prec

const prec = document.querySelector("div .prec");

let classPrec = "NonPremuto";

prec.onclick = () => {
  if (classPrec === "NonPremuto") {
    prec.classList.add("precActive");
    classPrec = "premuto";
    console.log("premuto");
  } else {
    prec.classList.remove("precActive");
    classPrec = "NonPremuto";
    console.log("non premuto");
  }
};

// play

let classPlay = "NonPremuto";

const btnPlay = document.querySelector(".play img");

btnPlay.onclick = () => {
  if (classPlay === "NonPremuto") {
    btnPlay.classList.add("premuto");
    classPlay = "premuto";
    console.log("premuto");
  } else {
    btnPlay.classList.remove("premuto");
    classPlay = "NonPremuto";
    console.log("non premuto");
  }
};

// next

const next = document.querySelector("div .next");

let classNext = "NonPremuto";

next.onclick = () => {
  if (classNext === "NonPremuto") {
    next.classList.add("nextActive");
    classNext = "premuto";
    console.log("premuto");
  } else {
    next.classList.remove("nextActive");
    classNext = "NonPremuto";
    console.log("non premuto");
  }
};

// repeat

const btnRepeat = document.querySelector(".d-flex .repeat");

let classRepeat = "NonPremuto";

btnRepeat.onclick = () => {
  if (classRepeat === "NonPremuto") {
    btnRepeat.classList.add("premuto-repeat");
    classRepeat = "premuto";
    console.log("premuto");
  } else {
    btnRepeat.classList.remove("premuto-repeat");
    classRepeat = "NonPremuto";
    console.log("non premuto");
  }
};

// micro

const btnMicro = document.querySelector("div .micro");
let classAttualeMicro = "NonPremuto";

btnMicro.onclick = () => {
  if (classAttualeMicro === "NonPremuto") {
    btnMicro.classList.add("premuto-micro");
    classAttualeMicro = "premuto";
    console.log("premuto");
  } else {
    btnMicro.classList.remove("premuto-micro");
    classAttualeMicro = "NonPremuto";
    console.log("non premuto");
  }
};

// menu

const btnMenu = document.querySelector("div .menu");

let classMenu = "NonPremuto";

btnMenu.onclick = () => {
  if (classMenu === "NonPremuto") {
    btnMenu.classList.add("premuto-menu");
    classMenu = "premuto";
    console.log("premuto");
  } else {
    btnMenu.classList.remove("premuto-menu");
    classMenu = "NonPremuto";
    console.log("non premuto");
  }
};

// volume

const volume = document.querySelector("div .volume");

let classVolume = "NonPremuto";

volume.onclick = () => {
  if (classMenu === "NonPremuto") {
    volume.classList.add("volumeNo");
    classVolume = "premuto";
    console.log("premuto");
  } else {
    volume.classList.remove("volumeNo");
    classVolume = "NonPremuto";
    console.log("non premuto");
  }
};
