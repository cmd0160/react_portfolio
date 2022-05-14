import penguin from "../assets/images/Penguin-post-login.png";
import ricolo from "../assets/images/riocolo-cup.jpg";
import portfolio from "../assets/images/React_Portfolio.png"

export const images = [
  {
    title: "PenguinPost",
    description:
      "PenguinPost is a social media website that allows a user to 'Squawk' (share up to 281 characters of information to your friends), favorite Squawks and grow your group of friends to stay engaged with your community.",
    tech: "HTML, CSS, Javscript, Node.js, Handlebar.js, Bcrypt, Express, MySQL2, Sequelize",
    url: "https://github.com/cmd0160/penguin-post",
    deployed_site: "https://ravenclaw-penguinpost.herokuapp.com/",
    img: penguin,
  },
  {
    title: "Rio Colorado Golf Course",
    description:
      "This project featured a full-scale rebuild of the Rio Colorado Golf Course's website, starting completely from a blank screen on both the design and code. Taking the site from the 1990's into the modern era, it has been future-proofed with technologies such as responsive design, React, MongoDB, and GraphQL. It has features such as a full course page with hole selector tool, user login/logout authentication containing Admin-level privileges that includes easy price customization, and queries/mutations for full CRUD capabilities.",
      tech: "HTML, CSS, Javscript, Apollo Server/Client, Bootstrap, Express, Framer Motion, GraphQL, Heroku, MongoDB, Mongoose, Node.js, React",
      url: "https://github.com/cmd0160/UTA-Final-Project",
      deployed_site: "https://www.riocoloradogolf.com/",
    img: ricolo,
  },
  {
    title: "React Portfolio",
    description:
      "This project is an application that I built to showcase the various projects that I have worked through during the course of my Full Stack Development Bootcamp. This features a fully responsize design, EmailJS integration for the contact page and a 1980's scifi theme!",
      tech: "HTML, CSS, Javscript, React, ReactRouter, EmailJS",
      url: "https://github.com/cmd0160/react_portfolio",
      deployed_site: "https://cmd0160.github.io/react_portfolio/",
    img: portfolio,
  },
];
