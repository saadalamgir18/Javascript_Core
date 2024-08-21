const DolphinsScore1 = 96;
const DolphinsScore2 = 108;
const DolphinsScore3 = 89;

const KoalasScore1 = 88;
const KoalasScore2 = 91;
const KoalasScore3 = 110;

let AvrageScoreDolphins =
  (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
let AvrageScoreKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log(`AvrageScoreDolphins: ${AvrageScoreDolphins} 
    and AvrageScoreKoalas: ${AvrageScoreKoalas}`);

if (AvrageScoreDolphins > AvrageScoreKoalas) {
  console.log("Dolphins Win");
} else if (AvrageScoreKoalas > AvrageScoreDolphins) {
  console.log("Koalas Win");
} else {
  console.log("Match Draw");
}

let minimumScore = 100;
if (
  AvrageScoreDolphins > AvrageScoreKoalas &&
  AvrageScoreDolphins >= minimumScore
) {
  console.log("Dolphins Win");
} else if (
  AvrageScoreKoalas > AvrageScoreDolphins &&
  AvrageScoreKoalas >= minimumScore
) {
  console.log("Koalas Win");
} else {
  console.log("Match Draw");
}
