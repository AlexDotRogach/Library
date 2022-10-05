window.addEventListener("DOMContentLoaded", () => {
  const control = require("./control").default;
  const render = require("./render/render").default;
  const formControl = require("./formControl").default;
  const deleteElement = require("./deleteElement").default;

  control();
  render();
  formControl();
  deleteElement();
});

// // 1.

// // https://api.github.com/users/

// console.log("work");

// async function getUser(userArr) {
//   const result = [];

//   for (const user of userArr) {
//     const url = `https://api.github.com/users/${user}`;
//     const responce = await fetch(url);
//     if (!responce.ok) {
//       result.push(null);
//     } else {
//       const json = await responce.json();
//       result.push(json);
//     }
//   }
//   return result;
// }
// getUser(["AlexDotRogach", "saintajax", "luxplanjay"]).then(console.log);

// ['AlexDotRogach', 'saintajax', 'luxplanjay'];
