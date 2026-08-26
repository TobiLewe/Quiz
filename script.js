const quizze = [
  [
    {
      frage: "Was versteht man unter Quadraturmodulation und warum wird sie für viele digitale Übertragungsverfahren als Basis verwendet?",
      antwort: "Antwort 1"
    },
    {
      frage: "Zeichnen Sie ein 16-QAM-Konstellationsdiagramm und geben Sie die Bitzuordnung an.",
      antwort: "Antwort 2"
    },
    {
      frage: "Was versteht man unter „Gray-Code“? Warum ist es wichtig einen Gray-Code beim Symbolmapping zu verwenden?",
      antwort: "Antwort 3"
    },
    {
      frage: "Was sind „Soft-bits“?",
      antwort: "Antwort 4"
    },
    {
      frage: "Was ist die Aufgabe des Kanalcodierers?",
      antwort: "Antwort 5"
    },
    {
      frage: "Welche Arten der Kanalcodierung kennen Sie?",
      antwort: "Antwort 6"
    },
    {
      frage: "Was versteht man unter „Hamming-Distanz“?",
      antwort: "Antwort 7"
    },
    {
      frage: "Nach welchem Prinzip arbeitet ein Viterbi-Decoder?",
      antwort: "Antwort 8"
    },
    {
      frage: "Begründen Sie den Aufbau der Präambel bei WLAN 802.11a.",
      antwort: "Antwort 9"
    },
    {
      frage: "Wie läuft die Synchronisation bei 802.11a ab?",
      antwort: "Antwort 10"
    },
    {
      frage: "Constant length?",
      antwort: "Antwort 11"
    },
    {
      frage: "Warum komplexes Basisband?",
      antwort: "Antwort 12"
    },
    {
      frage: "Normalisierungsfaktor?",
      antwort: "Antwort 13"
    }
  ],
  [
    { frage: "Platzhalterfrage 1 – Quiz 2", antwort: "Antwort 1 – Quiz 2" },
    { frage: "Platzhalterfrage 2 – Quiz 2", antwort: "Antwort 2 – Quiz 2" },
    { frage: "Platzhalterfrage 3 – Quiz 2", antwort: "Antwort 3 – Quiz 2" },
    { frage: "Platzhalterfrage 4 – Quiz 2", antwort: "Antwort 4 – Quiz 2" },
    { frage: "Platzhalterfrage 5 – Quiz 2", antwort: "Antwort 5 – Quiz 2" }
  ],
  [
    { frage: "Platzhalterfrage 1 – Quiz 3", antwort: "Antwort 1 – Quiz 3" },
    { frage: "Platzhalterfrage 2 – Quiz 3", antwort: "Antwort 2 – Quiz 3" },
    { frage: "Platzhalterfrage 3 – Quiz 3", antwort: "Antwort 3 – Quiz 3" },
    { frage: "Platzhalterfrage 4 – Quiz 3", antwort: "Antwort 4 – Quiz 3" },
    { frage: "Platzhalterfrage 5 – Quiz 3", antwort: "Antwort 5 – Quiz 3" }
  ]
];

let aktuellesQuiz = 0;
let aktuelleFrage = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const counterElement = document.getElementById("counter");
const answerButton = document.getElementById("answerButton");
const nextButton = document.getElementById("nextButton");
const quizButtons = document.querySelectorAll(".quiz-button");

function zeigeFrage() {
  const fragen = quizze[aktuellesQuiz];
  const eintrag = fragen[aktuelleFrage];

  questionElement.textContent = eintrag.frage;
  answerElement.textContent = eintrag.antwort;
  counterElement.textContent = `Frage ${aktuelleFrage + 1} von ${fragen.length}`;

  answerElement.classList.add("hidden");
  nextButton.classList.add("hidden");
  answerButton.classList.remove("hidden");
}

answerButton.addEventListener("click", () => {
  answerElement.classList.remove("hidden");
  answerButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
});

nextButton.addEventListener("click", () => {
  const fragen = quizze[aktuellesQuiz];
  aktuelleFrage = (aktuelleFrage + 1) % fragen.length;
  zeigeFrage();
});

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    aktuellesQuiz = Number(button.dataset.quiz);
    aktuelleFrage = 0;

    quizButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    zeigeFrage();
  });
});

zeigeFrage();
