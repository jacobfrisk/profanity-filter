const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// DOM elementer og sætning defineres her
let sentence = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
const profanityButton = document.querySelector(".filter-button");
const paragraph = document.querySelector("p");
const dialog = document.querySelector("dialog");
const dialogClose = document.querySelector(".close-dialog");
const container = document.querySelector(".container");

// Sætning skydes ud i DOM'en
paragraph.textContent = sentence;

// Event listener til checkAndChange funktionen
profanityButton.addEventListener("click", checkAndChange);

function checkAndChange() {
  // Der loopes gennem arrayet af gode og dårlige ord for at kunne bruge dem til at søge med
  curseWords.forEach((word) => {
    // Søgeord bliver gjort til de dårlige ord
    let searchWords = word.bad;
    // Hvis sætningen inkluderer søgeordene, bliver sætningen defineret som en ny variabel, der indeholder curseWords.good i stedet for curseWords.bad
    if (sentence.includes(searchWords)) {
      sentence = sentence.replace(searchWords, `<span>${word.good}</span>`);
    }
  });
  // Her bliver paragraphs textContent defineret som den nye sentence
  paragraph.innerHTML = sentence;

  // Her lyttes der efter nr 2 klik på profanityButton
  profanityButton.addEventListener("click", () => {
    // Hvis teksten indeholder de gode ord, skal modal vises
    if ((paragraph.innerHTML = sentence)) {
      dialog.showModal();
    }
    // Eventlistener til at lukke modal igen
    dialogClose.addEventListener("click", () => {
      dialog.close();
    });
  });
}
