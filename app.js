(function () {

  let words = [
    { word: "glaver", definition: "to flatter, decieve with flattery", figure: "v." },
    { word: "beautiful", definition: "the person who is reading this", figure: "adj." },
    { word: "odyssey", definition: "a long and eventful or adventurous journey or experience ", figure: "adj." },
    { word: "redamancy", definition: "the act of loving the one who loves you; a love returned in full", figure: "n." },
  ];

  const bgColors = [
    { background: "#f4f0ea", color: "#544b43", },
    { background: "#aa5a2e", color: "#f5f3f3", },
    { background: "#dfc7a9", color: " #544b43", },
    { background: "#533320", color: "#d3cfcb", },
    { background: "#373737", color: "#d3cfcb", },
    { background: "#b5a886", color: "#544b43", },
    { background: "#d418d4", color: "#ffffff" },
    { background: "#81ad6c", color: "#ffffff" },
    { background: "#6ca0ad", color: "#ffffff" },
    { background: "#c764a6", color: "#ffffff" },
    { background: "#c76464", color: "#413f3f" },
    { background: "#c76471", color: "#ffffff" },
    { background: "#cab058", color: "#252525" },
  ];

  let vars = {
    wordIndex: 0,
    randomIndex: Math.floor(Math.random() * bgColors.length),
    helpMsgEl: document.querySelector(".help"),
    wordCountEl: document.querySelector(".word-count"),
  }

  function setWord(word) {
    document.querySelector(".word").textContent = word.word;
    document.querySelector(".figure").textContent = `(${word.figure})`;
    document.querySelector(".definition").textContent = word.definition;
  };

  function setRandomBg(arr) {
    document.body.style.backgroundColor = arr[vars.randomIndex].background;
    document.body.style.color = arr[vars.randomIndex].color;
  };

  function helpMsg(txt) {
    vars.helpMsgEl.textContent = txt;
    setTimeout(() => vars.helpMsgEl.remove(), 2999);
  };

  const hammertime = new Hammer(document.querySelector("body"));

  hammertime.on("doubletap", () => setRandomBg(bgColors));

  hammertime.on("swiperight", function () {
    if (vars.wordIndex == 0) vars.wordIndex = words.length - 1; else vars.wordIndex--;
    setWord(words[vars.wordIndex]);
    vars.wordCountEl.textContent = `${vars.wordIndex + 1} of 4`;
  });

  hammertime.on("swipeleft", function () {
    if (vars.wordIndex >= 3) vars.wordIndex = 0; else vars.wordIndex++;
    setWord(words[vars.wordIndex]);
    vars.wordCountEl.textContent = `${vars.wordIndex + 1} of 4`;
  });

  document.addEventListener("DOMContentLoaded", () => {
    setWord(words[vars.wordIndex]);
    setRandomBg(bgColors);
    helpMsg('< swipe & tap >');
  });

})();