const calcAverage = (score1, score2, score13) =>
  (score1 + score2 + score13) / 3;
const DolphinsAvr = calcAverage(85, 54, 41);
const KoalasAvr = calcAverage(23, 34, 27);

function checkWinner(DolphinsAvr, KoalasAvr) {
  if (DolphinsAvr >= 2 * KoalasAvr) {
    console.log(`Dolphins win (${DolphinsAvr} vs. ${KoalasAvr})`);
  } else if (KoalasAvr >= 2 * DolphinsAvr) {
    console.log(`Koalas win (${KoalasAvr} vs. ${DolphinsAvr})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(DolphinsAvr, KoalasAvr);
