const quizze = [
  [
    ["Was versteht man unter Quadraturmodulation und warum wird sie für viele digitale Übertragungsverfahren als Basis verwendet?", "Antwort 1"],
    ["Zeichnen Sie ein 16-QAM-Konstellationsdiagramm und geben Sie die Bitzuordnung an.", "Antwort 2"],
    ["Was versteht man unter „Gray-Code“? Warum ist es wichtig einen Gray-Code beim Symbolmapping zu verwenden?", "Antwort 3"],
    ["Was sind „Soft-bits“?", "Antwort 4"],
    ["Was ist die Aufgabe des Kanalcodierers?", "Antwort 5"],
    ["Welche Arten der Kanalcodierung kennen Sie?", "Antwort 6"],
    ["Was versteht man unter „Hamming-Distanz“?", "Antwort 7"],
    ["Nach welchem Prinzip arbeitet ein Viterbi-Decoder?", "Antwort 8"],
    ["Begründen Sie den Aufbau der Präambel bei WLAN 802.11a.", "Antwort 9"],
    ["Wie läuft die Synchronisation bei 802.11a ab?", "Antwort 10"],
    ["Constant length?", "Antwort 11"],
    ["Warum komplexes Basisband?", "Antwort 12"],
    ["Normalisierungsfaktor?", "Antwort 13"]
  ],
  [
    ["Platzhalterfrage 1 – Quiz 2", "Antwort 1 – Quiz 2"],
    ["Platzhalterfrage 2 – Quiz 2", "Antwort 2 – Quiz 2"],
    ["Platzhalterfrage 3 – Quiz 2", "Antwort 3 – Quiz 2"],
    ["Platzhalterfrage 4 – Quiz 2", "Antwort 4 – Quiz 2"],
    ["Platzhalterfrage 5 – Quiz 2", "Antwort 5 – Quiz 2"]
  ],
  [
    ["Platzhalterfrage 1 – Quiz 3", "Antwort 1 – Quiz 3"],
    ["Platzhalterfrage 2 – Quiz 3", "Antwort 2 – Quiz 3"],
    ["Platzhalterfrage 3 – Quiz 3", "Antwort 3 – Quiz 3"],
    ["Platzhalterfrage 4 – Quiz 3", "Antwort 4 – Quiz 3"],
    ["Platzhalterfrage 5 – Quiz 3", "Antwort 5 – Quiz 3"]
  ]
];

let aktuellesQuiz = 0;
let aktuelleFrage = 0;

function init() {
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const counterElement = document.getElementById("counter");
  const answerButton = document.getElementById("answerButton");
  const nextButton = document.getElementById("nextButton");
  const quizButtons = document.querySelectorAll(".quiz-button");

  function zeigeFrage() {
    const fragen = quizze[aktuellesQuiz];
    const [frage, antwort] = fragen[aktuelleFrage];

    questionElement.textContent = frage;
    answerElement.textContent = antwort;
    counterElement.textContent = `Frage ${aktuelleFrage + 1} von ${fragen.length}`;

    answerElement.classList.add("hidden");
    nextButton.classList.add("hidden");
    answerButton.classList.remove("hidden");
  }

  answerButton.addEventListener("click", function () {
    answerElement.classList.remove("hidden");
    answerButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  });

  nextButton.addEventListener("click", function () {
    aktuelleFrage = (aktuelleFrage + 1) % quizze[aktuellesQuiz].length;
    zeigeFrage();
  });

  quizButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      aktuellesQuiz = Number(button.getAttribute("data-quiz"));
      aktuelleFrage = 0;

      quizButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      button.classList.add("active");

      zeigeFrage();
    });
  });

  zeigeFrage();
}

document.addEventListener("DOMContentLoaded", init);
