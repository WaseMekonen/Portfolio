import CoustomeCountdown from "./assets/CoustomeCountdown.jpg";
import Quote from "./assets/Quote-Generator.jpg";
import TicTacToe from "./assets/TicTacToe.jpg";
import Cooking from "./assets/Master-Cooking.jpg";
import Flight from "./assets/Flight-Booking.jpg";
import Memory from "./assets/Memory-Game.jpg";

export const projects = [
  {
    name: "Coustom-Countdown",
    type: "JS-vanila",
    technologys: ["Javascript", "Html", "css"],
    img: CoustomeCountdown,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/CoustomCountDown/",
    desc: "The custom countdown project is a simple application built with JavaScript, HTML, CSS, and local storage. It allows users to create personalized countdowns for events, offering a user-friendly and interactive experience with customizable features.",
  },
  {
    name: "Quote-generator",
    type: "JS-vanila",
    technologys: ["javascript", "Html/css"],

    img: Quote,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Quote-generator/",
    desc: "Random Quote Generator using HTML, CSS, JavaScript, and API. This application fetches a new random quote from an API, upon the click of a button, and displays it in the browser.",
  },
  {
    name: "Tic Tac Toe",
    type: "JS-vanila",
    technologys: ["javascript", "Html/css"],
    img: TicTacToe,
    gitLink: "https://github.com/WaseMekonen/Tic_Tac_Toe",
    projectLink: "https://wasemekonen.github.io/Tic_Tac_Toe/",
    desc: "The tic-tac-toe project is a JavaScript-based game built with HTML and CSS. It offers an interactive experience for users to play against each other. With its visually appealing design, it provides a fun and engaging gaming experience.",
  },
  {
    name: "Master-Cooking",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: Cooking,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
    desc: "",
  },
  {
    name: "Flight-Booking",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: Flight,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
    desc: "",
  },
  {
    name: "Memory-Game",
    type: "React",
    technologys: ["Html/css", "React"],
    img: Memory,
    link: "https://wasemekonen.github.io/Memory-Game/",
    gitLink: "https://github.com/WaseMekonen/Memory-Game",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
    desc: "The card memory game is a simple game to test the player’s memory. In a deck of paired cards, the player needs to select a matching pair in consecutive turns. The player wins the game when all matching pairs are selected.",
  },
];

export const filterTypes = [
  { id: 1, name: "All" },
  { id: 2, name: "JS-vanila" },
  { id: 3, name: "React" },
  { id: 4, name: "Node.js" },
];

export const skills = [
  { lang: "JavaScript", perc: "85" },
  { lang: "CSS", perc: "80" },
  { lang: "HTML", perc: "90" },
  { lang: "Node.js", perc: "80" },
  { lang: "React", perc: "85" },
  { lang: "MongoDb", perc: "85" },
  { lang: "Git", perc: "85" },
  { lang: "Ui design", perc: "80" },
];
