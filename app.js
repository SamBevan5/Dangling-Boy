/////////////////////////
//=====================//
//==== HANGMAN GAME ===//
//=====================//
/////////////////////////


////////////////////////
//==Variables==//
////////////////////////

//jQuery Variables 
const $button = $('.button');
const $randomStringDisplay = $('#random-string-display');
const $letterCounter = $('#letters-remaining');
const $guessCounter = $('#guesses-remaining');
const $playerOneScore = $('#player-one-score');
const $playerTwoScore = $('#player-two-score');
const $hangmanImages = $('#hangman-images');

//gameplay variables
const words = [`SPORTS`, `FOOT`, `HAMSTER`, `DOGS`, `CATS`, `RAIN`, `OOPS`, `SOME`, `SAINT`, `PENNY`, `ROSIE`, `ROVER`, `FRENCH`, `HELLO`, `DEMO`, `MUSIC`, `POOF`, `EXPLORE`, `COUNT`, `EGGS`, `EGGO`, `STRANGE`, `OUTER`];
let userWord = [];
let randomWord = ``;
let splitRandomWord;

//counters
let guessesRemaining = 5;
let lettersRemaining;

//players
let playerOneScore = 0;
let playerTwoScore = 0;
let player = 1;

///////////////////
//===Functions===//
///////////////////

