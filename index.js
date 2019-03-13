var arraym = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var arrayi = [guitar, 'Bass Guitar', 'Lead Guitar', Drums];
var empty = ["John Lennon plays guitar"];

function theBeatlesPlay(musicians,instruments) {
  var empty = ["John Lennon plays guitar"];
for (let arrayi = 1; arrayi < 4; arrayi++) {
  for (let arraym = 1; arraym < 4; arraym++) {
 empty.push(`"${arraym} + plays ${arrayi}"`);}}
  return theBeatlesPlay(arraym,arrayi);
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
 while (facts[0] < 4) {
   facts.push(`"${facts[0]} + !!!"`)
   return facts;
 } 
}