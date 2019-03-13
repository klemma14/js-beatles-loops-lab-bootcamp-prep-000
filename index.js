var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians,instruments) {
var musiciansString;
 var empty = [];
  for (let i = 0; i < 4; i++) {
 musiciansString = musicians[i] + 'plays' + instruments[i];
 musiciansString = empty[i];}
  return empty;
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