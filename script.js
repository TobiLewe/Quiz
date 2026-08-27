const quizzes = [
  [
    {
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie für viele digitale Übertragungsverfahren als Basis verwendet?",
      "antwort": `Bei der Quadraturmodulation werden zwei Trägersignale verwendet, die um 90° phasenverschoben sind. Diese beiden Signale nennt man I- und Q-Komponente. Dadurch kann man zwei unabhängige Informationsanteile gleichzeitig über denselben Frequenzbereich übertragen.
      
      Der große Vorteil ist also, dass man Amplitude und Phase des Signals gezielt verändern kann und dadurch viele verschiedene Symbole darstellen kann. Deshalb bildet die Quadraturmodulation die Grundlage für Verfahren wie QPSK und QAM. Sie ermöglicht eine hohe spektrale Effizienz, weil mehrere Bits pro Symbol übertragen werden können.`
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
      "frage": "Was ist die Constant length?",
      "antwort": "Antwort 11"
    },
    {
      "frage": "Warum benutzt man ein komplexes Basisband?",
      "antwort": "Antwort 12"
    },
    {
      "frage": "Was ist der Normierungsfaktor?",
      "antwort": "Antwort 13"
    }
  ],
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
      "frage": "Wofür braucht man Gray-Code?",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Welche Aufgaben hat der Modulator bei der Bandpassübertragung?",
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
      "frage": "Auf was muss man bei der Frequenzsynchronisation achten?",
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
      "frage": "Was versteht man unter einem Nyquist-Filter und warum ist er wichtig in der Basisbandübertragung?",
      "antwort": "Antwort 1"
    },
    {
      "frage": "Warum wird das Raised-Cosine-Filter in zwei Root-Raised-Cosine-Filter aufgeteilt?",
      "antwort": "Antwort 2"
    },
    {
      "frage": "Wie funktioniert die Faltung im Frequenzbereich und was bedeutet das für die Modulation?",
      "antwort": "Antwort 3"
    },
    {
      "frage": "Erklären Sie das Prinzip der Amplitudenmodulation (AM).",
      "antwort": "Antwort 4"
    },
    {
      "frage": "Was passiert mit dem Spektrum, wenn ein Signal mit einer Cosinus-Schwingung multipliziert wird?",
      "antwort": "Antwort 5"
    },
    {
      "frage": "Warum ist das Spektrum eines realen Signals konjugiert-symmetrisch?",
      "antwort": "Antwort 6"
    },
    {
      "frage": "Was versteht man unter Quadraturmodulation und warum wird sie eingesetzt?",
      "antwort": "Antwort 7"
    },
    {
      "frage": "Was bedeutet „kohärente Demodulation“ und wann ist sie notwendig?",
      "antwort": "Antwort 8"
    },
    {
      "frage": "Wie funktioniert die synchrone Demodulation im Zeit- und Frequenzbereich?",
      "antwort": "Antwort 9"
    },
    {
      "frage": "Welche Rolle spielt der Tiefpassfilter nach der Demodulation?",
      "antwort": "Antwort 10"
    },
    {
      "frage": "Welche Vorteile bietet die IQ-Demodulation?",
      "antwort": "Antwort 11"
    },
    {
      "frage": "Wie funktioniert die Frequenzmodulation mathematisch?",
      "antwort": "Antwort 12"
    },
    {
      "frage": "Warum ist FM kein LTI-System?",
      "antwort": "Antwort 13"
    },
    {
      "frage": "Welche Vorteile bietet die Frequenzmodulation gegenüber AM?",
      "antwort": "Antwort 14"
    },
    {
      "frage": "Warum kann FM trotz theoretisch unendlichem Spektrum praktisch eingesetzt werden?",
      "antwort": "Antwort 15"
    },
    {
      "frage": "Was ist das komplexe Basisbandmodell und warum wird es in Simulationen bevorzugt?",
      "antwort": "Antwort 16"
    },
    {
      "frage": "Wie wird ein digitales Bandpasssystem im Blockschaltbild dargestellt?",
      "antwort": "Antwort 17"
    },
    {
      "frage": "Welche Vorteile bietet die Simulation im komplexen Basisband gegenüber einer Simulation im realen Bandpassbereich?",
      "antwort": "Antwort 18"
    },
    {
      "frage": "Wie funktioniert das Symbolmapping bei BPSK, QPSK und QAM?",
      "antwort": "Antwort 19"
    },
    {
      "frage": "Was ist ein Gray-Code und warum wird er verwendet?",
      "antwort": "Antwort 20"
    },
    {
      "frage": "Wie unterscheiden sich 16-QAM und 64-QAM in der Symbolzuordnung?",
      "antwort": "Antwort 21"
    },
    {
      "frage": "Was bedeutet „Decision Boundaries in Symbol Space“ (DUB-S)?",
      "antwort": "Antwort 22"
    },
    {
      "frage": "Wie arbeitet ein Maximum-Likelihood-Detektor?",
      "antwort": "Antwort 23"
    },
    {
      "frage": "Wie wird beim Demodulator das empfangene Symbol ausgewählt?",
      "antwort": "Antwort 24"
    },
    {
      "frage": "Was ist der Unterschied zwischen symbolweiser und bitweiser Detektion?",
      "antwort": "Antwort 25"
    },
    {
      "frage": "Erklären Sie den Begriff „Softbits“.",
      "antwort": "Antwort 26"
    },
    {
      "frage": "Wie wird der Log-Likelihood-Ratio (LLR) berechnet und interpretiert?",
      "antwort": "Antwort 27"
    },
    {
      "frage": "Wie funktioniert ein Faltungskodierer?",
      "antwort": "Antwort 28"
    },
    {
      "frage": "Was ist ein Trellisdiagramm und wie wird es genutzt?",
      "antwort": "Antwort 29"
    },
    {
      "frage": "Wie funktioniert der Viterbi-Algorithmus?",
      "antwort": "Antwort 30"
    },
    {
      "frage": "Was bedeutet „Full-Trace-Back“ und „Partial-Trace-Back“ beim Viterbi-Decoder?",
      "antwort": "Antwort 31"
    },
    {
      "frage": "Was ist ein Blockcode und wie ist er aufgebaut?",
      "antwort": "Antwort 32"
    },
    {
      "frage": "Wie bestimmt man die Hamming-Distanz und was bedeutet sie?",
      "antwort": "Antwort 33"
    },
    {
      "frage": "Was ist der Unterschied zwischen Fehlererkennung und Fehlerkorrektur?",
      "antwort": "Antwort 34"
    },
    {
      "frage": "Wie funktioniert ein Reed-Solomon-Code?",
      "antwort": "Antwort 35"
    },
    {
      "frage": "Was ist Punktierung und wie beeinflusst sie die Coderate?",
      "antwort": "Antwort 36"
    },
    {
      "frage": "Wie funktioniert die Wiederherstellung punktierter Bits im Empfänger?",
      "antwort": "Antwort 37"
    },
    {
      "frage": "Welche Arten der Synchronisation sind in der Nachrichtentechnik relevant?",
      "antwort": "Antwort 38"
    },
    {
      "frage": "Wie funktioniert die Burst-Erkennung bei WLAN?",
      "antwort": "Antwort 39"
    },
    {
      "frage": "Wie hilft die Korrelation bei der Frequenz- und Zeitsynchronisation?",
      "antwort": "Antwort 40"
    },
    {
      "frage": "Was ist die „Short Training Sequence“ (STS) und wofür wird sie verwendet?",
      "antwort": "Antwort 41"
    },
    {
      "frage": "Warum wird Interleaving eingesetzt?",
      "antwort": "Antwort 42"
    },
    {
      "frage": "Wie funktioniert ein Block-Interleaver?",
      "antwort": "Antwort 43"
    },
    {
      "frage": "Was ist der Zweck des „Energy Dispersal“ Blocks im DVB-T?",
      "antwort": "Antwort 44"
    },
    {
      "frage": "Wie unterscheidet sich das Interleaving bei DVB von dem bei WLAN?",
      "antwort": "Antwort 45"
    },
    {
      "frage": "Was ist der Unterschied zwischen CSMA/CD und CSMA/CA?",
      "antwort": "Antwort 46"
    },
    {
      "frage": "Warum ist bei Funkkanälen keine Kollisionserkennung möglich?",
      "antwort": "Antwort 47"
    },
    {
      "frage": "Was bedeutet ARQ und wie funktioniert es?",
      "antwort": "Antwort 48"
    },
    {
      "frage": "Wie verbessert Hybrid-ARQ die Übertragungsqualität?",
      "antwort": "Antwort 49"
    },
    {
      "frage": "Welche Rolle spielt der „Backoff-Timer“ im Medium Access?",
      "antwort": "Antwort 50"
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

const fragenListe = document.getElementById("fragenListe");
let gespeicherteMarkierungen = null;

try {
  gespeicherteMarkierungen = JSON.parse(
    localStorage.getItem("quizGelernt") || "null"
  );
} catch (error) {
  gespeicherteMarkierungen = null;
}

const gelernt = quizzes.map((quiz, quizIndex) => {
  const gespeichert = gespeicherteMarkierungen?.[quizIndex];
  return Array.from({ length: quiz.length }, (_, index) =>
    Boolean(gespeichert?.[index])
  );
});

function speichereMarkierungen() {
  localStorage.setItem("quizGelernt", JSON.stringify(gelernt));
}

function aktualisiereFragenListe() {
  const quiz = quizzes[aktuellesQuiz];
  fragenListe.innerHTML = "";

  quiz.forEach((item, index) => {
    const zeile = document.createElement("div");
    zeile.className = "frage-zeile";

    const frageButton = document.createElement("button");
    frageButton.type = "button";
    frageButton.className = "frage-link";
    frageButton.textContent = String(index + 1);
    frageButton.title = item.frage;
    frageButton.addEventListener("click", () => {
      aktuelleFrage = index;
      anzeigen();
    });

    if (index === aktuelleFrage) {
      frageButton.classList.add("aktiv");
    }

    const statusButton = document.createElement("button");
    statusButton.type = "button";
    statusButton.className = "frage-status";
    statusButton.textContent = "✓";
    statusButton.title = gelernt[aktuellesQuiz][index]
      ? "Als ungelernt markieren"
      : "Als gelernt markieren";

    if (gelernt[aktuellesQuiz][index]) {
      statusButton.classList.add("gelernt");
    }

    statusButton.addEventListener("click", () => {
      gelernt[aktuellesQuiz][index] = !gelernt[aktuellesQuiz][index];
      speichereMarkierungen();
      aktualisiereFragenListe();
    });

    zeile.appendChild(frageButton);
    zeile.appendChild(statusButton);
    fragenListe.appendChild(zeile);
  });
}

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

  aktualisiereFragenListe();
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

document.getElementById("fragenZuruecksetzen").addEventListener("click", () => {
  gelernt[aktuellesQuiz].fill(false);
  speichereMarkierungen();
  aktualisiereFragenListe();
});

anzeigen();
