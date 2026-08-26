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
      "frage": "Was ist Quadraturmodulation?",
      "antwort": "Antwort 1"
    },
    {
      "frage": "Zeichne 16-QAM.",
      "antwort": "Antwort 2"
    },
    {
      "frage": "Was ist Gray-Code?",
      "antwort": "Antwort 3"
    },
    {
      "frage": "Wofür braucht man Gray-Code?",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Was macht der Modulator noch?",
      "antwort": "Antwort 5"
    },
    {
      "frage": "Warum wird sowohl ein Empfangsfilter als auch ein Sendefilter verwendet?",
      "antwort": "Antwort 6"
    },
    {
      "frage": "Warum sind das Sende- und Empfangsfilter beide Root-Raised-Cosine-Filter?",
      "antwort": "Antwort 7"
    },
    {
      "frage": "Wie werden Softbits bestimmt?",
      "antwort": "Antwort 8"
    },
    {
      "frage": "Wofür braucht man Softbits?",
      "antwort": "Antwort 9"
    },
    {
      "frage": "Kann man Softbits mit Blockcodes verwenden?",
      "antwort": "Antwort 10"
    },
    {
      "frage": "Wie funktioniert die Synchronisation bei WLAN (Frequenz- und Timing-Synchronisation)?",
      "antwort": "Antwort 11"
    },
    {
      "frage": "Was sind die Grenzen der Frequenzsynchronisation?",
      "antwort": "Antwort 12"
    },
    {
      "frage": "Wie sichern sich Broadcastsysteme wie DVB-T neben dem Viterbi-Decoder noch gegen Fehler ab?",
      "antwort": "Antwort 13"
    },
    {
      "frage": "Wie sichert sich WLAN noch weiter gegen Fehler ab?",
      "antwort": "Antwort 14"
    },
    {
      "frage": "Was versteht man unter einem komplexen Basisbandmodell?",
      "antwort": "Antwort 15"
    },
    {
      "frage": "Warum ist die Impulsantwort des Kanals komplexwertig?",
      "antwort": "Antwort 16"
    },
    {
      "frage": "Zeichne einen Faltungscodierer.",
      "antwort": "Antwort 17"
    },
    {
      "frage": "Welche Attribute kann man an einem Faltungscodierer ablesen?",
      "antwort": "Antwort 18"
    },
    {
      "frage": "Muss man die Coderate erhöhen oder verkleinern, um einen besseren Fehlerschutz zu bekommen?",
      "antwort": "Antwort 19"
    },
    {
      "frage": "Wie kann ich eine Coderate von 2/3 erzeugen?",
      "antwort": "Antwort 20"
    },
    {
      "frage": "Wie kann ich eine Coderate von 1/3 erzeugen?",
      "antwort": "Antwort 21"
    },
    {
      "frage": "Wie kann ich eine Coderate von 2/3 ohne Punktierung erreichen?",
      "antwort": "Antwort 22"
    },
    {
      "frage": "Was ist Rayleigh-Fading?",
      "antwort": "Antwort 23"
    },
    {
      "frage": "Was ist Rice-Fading?",
      "antwort": "Antwort 24"
    },
    {
      "frage": "Was sind die Unterschiede zwischen Rayleigh-Fading und Rice-Fading?",
      "antwort": "Antwort 25"
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
const zurueckButton = document.getElementById("zurueckButton");
const weiterButton = document.getElementById("weiterButton");
const quizButtons = document.querySelectorAll(".quiz-button");

function anzeigen() {
  const quiz = quizzes[aktuellesQuiz];
  const item = quiz[aktuelleFrage];

  frageElement.textContent = item.frage;
  fortschrittElement.textContent =
    "Frage " + (aktuelleFrage + 1) + " von " + quiz.length;

  antwortElement.textContent = "";
  antwortElement.style.display = "none";
  antwortButton.textContent = "Antwort anzeigen";

  quizButtons.forEach((button, index) => {
    button.classList.toggle("aktiv", index === aktuellesQuiz);
  });
}

function wechselQuiz(index) {
  aktuellesQuiz = index;
  aktuelleFrage = 0;
  anzeigen();
}

function zeigeAntwort() {
  if (antwortElement.style.display === "block") {
    antwortElement.style.display = "none";
    antwortButton.textContent = "Antwort anzeigen";
  } else {
    antwortElement.textContent = quizzes[aktuellesQuiz][aktuelleFrage].antwort;
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

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    wechselQuiz(Number(button.dataset.quiz));
  });
});

antwortButton.addEventListener("click", zeigeAntwort);
zurueckButton.addEventListener("click", vorherigeFrage);
weiterButton.addEventListener("click", naechsteFrage);

anzeigen();
