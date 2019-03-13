var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = [guitar, 'Bass Guitar', 'Lead Guitar', Drums];
var empty = ["John Lennon plays guitar"];

function theBeatlesPlay(musicians,instruments) {
  var empty = ["John Lennon plays guitar"];
for (let instruments = 1; instruments < 4; instruments++) {
  for (let musicians = 1; musicians < 4; musicians++) {
 empty.push(`"${musicians} + plays ${instruments}"`);}}
  return theBeatlesPlay(musicians,instruments);
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