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

function anzeigen() {
  const quiz = quizzes[aktuellesQuiz];
  const item = quiz[aktuelleFrage];

  document.getElementById("fortschritt").textContent =
    `Frage ${aktuelleFrage + 1} von ${quiz.length}`;

  document.getElementById("frage").textContent = item.frage;

  const antwort = document.getElementById("antwort");
  antwort.textContent = "";
  antwort.style.display = "none";

  document.getElementById("antwortButton").textContent = "Antwort anzeigen";

  document.querySelectorAll(".quiz-buttons button").forEach((button, index) => {
    button.classList.toggle("aktiv", index === aktuellesQuiz);
  });
}

function wechselQuiz(index) {
  if (index < 0 || index >= quizzes.length) return;
  aktuellesQuiz = index;
  aktuelleFrage = 0;
  anzeigen();
}

function zeigeAntwort() {
  const quiz = quizzes[aktuellesQuiz];
  const antwort = document.getElementById("antwort");
  const button = document.getElementById("antwortButton");

  if (antwort.style.display === "block") {
    antwort.style.display = "none";
    button.textContent = "Antwort anzeigen";
  } else {
    antwort.textContent = quiz[aktuelleFrage].antwort;
    antwort.style.display = "block";
    button.textContent = "Antwort ausblenden";
  }
}

function naechsteFrage() {
  const quiz = quizzes[aktuellesQuiz];
  aktuelleFrage = (aktuelleFrage + 1) % quiz.length;
  anzeigen();
}

document.addEventListener("DOMContentLoaded", anzeigen);
