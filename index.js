const fs = require("fs");
const pdf = require("pdf-parse");

// Ścieżka do pliku PDF
const pdfFilePath = "./tyranids.pdf";

// Odczytaj plik PDF
fs.readFile(pdfFilePath, async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Analiza pliku PDF
  const pdfData = await pdf(data);

  // Treść PDF jako pojedynczy tekst
  const pdfText = pdfData.text;

  // Nazwy jednostek rozpoczynające jednostki
  const unitStartPhrases = [
    "Barbgaunts",
    "Biovores",
    "Broodlord",
    "Carnifexes",
    "Deathleaper",
    "Exocrine",
    "Gargoyles",
    "Genestealers",
    "Harpy",
    "Haruspex",
    "Hive Crone",
    "Hive Guard",
    "Hive Tyrant",
    "Hormagaunts",
    "Lictor",
    "Maleceptor",
    "Mawloc",
    "Mucolid Spores",
    "Neurogaunts",
    "Neurotyrant",
    "Old One Eye",
    "Parasite of Mortrex",
    "Psychophage",
    "Pyrovores",
    "Raveners",
    "Ripper Swarms",
    "Screamer-Killer",
    "Spore MInes",
    "Sporocyst",
    "Termagants",
    "Tervigon",
    "The Swarmlord",
    "Toxicrene",
    "Trygon",
    "Tyranid Warriors with Melee Bio-weapons",
    "Tyranid Warriors with Ranged Bio-weapons",
    "Tyrannocyte",
    "Tyrannofex",
    "Tyrant Guard",
    "Venomthropes",
    "Von Ryan’s Leapers",
    "Winged Hive Tyrant",
    "Winged Tyranid Prime",
    "Zoanthropes",
  ];

  // Iteruj przez nazwy jednostek rozpoczynające jednostki
  for (const startPhrase of unitStartPhrases) {
    const startIndex = pdfText.indexOf(startPhrase);

    if (startIndex !== -1) {
      // Znaleziono jednostkę na podstawie frazy startowej
      const nextStartPhraseIndex = pdfText.indexOf(startPhrase, startIndex + 1);
      let endIndex = pdfText.indexOf("This model is equipped with", startIndex);

      if (
        endIndex !== -1 &&
        (nextStartPhraseIndex === -1 || endIndex < nextStartPhraseIndex)
      ) {
        endIndex += 1;
        // Treść jednostki
        const unitText = pdfText.substring(startIndex, endIndex);

        // Tutaj możesz przekształcić tekst jednostki w JSON
        //  const unitJson = transformPageToUnit(unitText);

        // Wypisz jednostkę na konsoli
        console.log(unitText);
        console.log("---"); // Oddziel jednostki

        // W tym miejscu możesz również zapisać jednostkę do pliku JSON lub bazy danych
        // Zależy to od twoich potrzeb
      }
    }
  }
});

function transformPageToUnit(pageText) {
  // Tutaj możesz przekształcić tekst jednostki w jednostkę JSON
  // To może być podobna logika, jak w poprzednich przykładach

  return unitJson;
}
