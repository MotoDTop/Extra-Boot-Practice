const topics = ['ROCK', 'PAPER', 'SCISSORS'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (let x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'ROCK') {
   console.log("ROCK");
 } else if (randomTopic === 'PAPER') {
   console.log("PAPER");
 } else if (randomTopic === 'SCISSORS') {
   console.log("SCISSORS");
 } else {
   console.log('Please try again!');
 }
}

console.log('Rock Paper Scissors');
listTopics();
console.log('Paper over Rock, Scissors over Paper, Rock over Scissors'
);
selectTopic();