const quizzes = [
  [
    {
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie für viele digitale Übertragungsverfahren als Basis verwendet?",
      "antwort": "Antwort 1"
    },
    {
      "frage": "Zeichnen Sie ein 16-QAM-Konstellationsdiagramm und geben Sie die Bitzuordnung an.",
      "antwort": "Antwort 2"
    },
    {
      "frage": "Was versteht man unter „Gray-Code“? Warum ist es wichtig einen Gray-Code beim Symbolmapping zu verwenden?",
      "antwort": "Antwort 3"
    },
    {
      "frage": "Was sind „Soft-bits“?",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Was ist die Aufgabe des Kanalcodierers?",
      "antwort": "Antwort 5"
    },
    {
      "frage": "Welche Arten der Kanalcodierung kennen Sie?",
      "antwort": "Antwort 6"
    },
    {
      "frage": "Was versteht man unter „Hamming-Distanz“?",
      "antwort": "Antwort 7"
    },
    {
      "frage": "Nach welchem Prinzip arbeitet ein Viterbi-Decoder?",
      "antwort": "Antwort 8"
    },
    {
      "frage": "Begründen Sie den Aufbau der Präambel bei WLAN 802.11a.",
      "antwort": "Antwort 9"
    },
    {
      "frage": "Wie läuft die Synchronisation bei 802.11a ab?",
      "antwort": "Antwort 10"
    },
    {
      "frage": "Constant length?",
      "antwort": "Antwort 11"
    },
    {
      "frage": "Warum komplexes Basisband?",
      "antwort": "Antwort 12"
    },
    {
      "frage": "Normalisierungsfaktor?",
      "antwort": "Antwort 13"
    }
  ],
  [
    {
      "frage": "Quiz 2 – Platzhalterfrage 1",
      "antwort": "Antwort 1"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 2",
      "antwort": "Antwort 2"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 3",
      "antwort": "Antwort 3"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 4",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 5",
      "antwort": "Antwort 5"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 6",
      "antwort": "Antwort 6"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 7",
      "antwort": "Antwort 7"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 8",
      "antwort": "Antwort 8"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 9",
      "antwort": "Antwort 9"
    },
    {
      "frage": "Quiz 2 – Platzhalterfrage 10",
      "antwort": "Antwort 10"
    }
  ],
  [
    {
      "frage": "Quiz 3 – Platzhalterfrage 1",
      "antwort": "Antwort 1"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 2",
      "antwort": "Antwort 2"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 3",
      "antwort": "Antwort 3"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 4",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 5",
      "antwort": "Antwort 5"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 6",
      "antwort": "Antwort 6"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 7",
      "antwort": "Antwort 7"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 8",
      "antwort": "Antwort 8"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 9",
      "antwort": "Antwort 9"
    },
    {
      "frage": "Quiz 3 – Platzhalterfrage 10",
      "antwort": "Antwort 10"
    }
  ]
];

let aktuellesQuiz = 0;
let aktuelleFrage = 0;

const frageElement = document.getElementById("frage");
const fortschrittElement = document.getElementById("fortschritt");
const antwortElement = document.getElementById("antwort");
const antwortButton = document.getElementById("antwortButton");

document.getElementById("zurueckButton").addEventListener("click", vorherigeFrage);
document.getElementById("weiterButton").addEventListener("click", naechsteFrage);
antwortButton.addEventListener("click", zeigeAntwort);

function anzeigen() {
  const quiz = quizzes[aktuellesQuiz];
  const item = quiz[aktuelleFrage];

  frageElement.textContent = item.frage;
  fortschrittElement.textContent = `Frage ${aktuelleFrage + 1} von ${quiz.length}`;

  antwortElement.textContent = "";
  antwortElement.style.display = "none";
  antwortButton.textContent = "Antwort anzeigen";

  document.querySelectorAll(".quiz-btn").forEach((button, index) => {
    button.classList.toggle("aktiv", index === aktuellesQuiz);
  });
}

function wechselQuiz(index) {
  aktuellesQuiz = index;
  aktuelleFrage = 0;
  anzeigen();
}

function zeigeAntwort() {
  const item = quizzes[aktuellesQuiz][aktuelleFrage];

  if (antwortElement.style.display === "block") {
    antwortElement.style.display = "none";
    antwortButton.textContent = "Antwort anzeigen";
  } else {
    antwortElement.textContent = item.antwort;
    antwortElement.style.display = "block";
    antwortButton.textContent = "Antwort ausblenden";
  }
}

function vorherigeFrage() {
  const quiz = quizzes[aktuellesQuiz];
  aktuelleFrage = (aktuelleFrage - 1 + quiz.length) % quiz.length;
  anzeigen();
}

function naechsteFrage() {
  const quiz = quizzes[aktuellesQuiz];
  aktuelleFrage = (aktuelleFrage + 1) % quiz.length;
  anzeigen();
}

anzeigen();
