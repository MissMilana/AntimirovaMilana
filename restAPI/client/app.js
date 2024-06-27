// const nameInput = document.getElementById("name-input");
// const jobInput = document.getElementById("job-input");
// const createButton = document.getElementById("create-button");
// const mainContainer = document.querySelector(".container-2");
// createButton.addEventListener("click", () => {
//   const name = nameInput.value;
//   const job = jobInput.value;
//   console.log(name);
//   console.log(job);
//   if (name && job) {
//     const information = `
//      <div class="container-2">
//     <div class="text">
//       <span class="name">${name}</span>
//       <p class="descp">${job}</p>
//       <div class="buttons">
//         <button class="picked">Отметь</button>
//         <button class="del">Удалить</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//     mainContainer.insertAdjacentHTML("beforeend", information);
//     console.log(mainContainer);
//     console.log(information);
//   }

//   mainContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("picked")) {
//       const container = event.target.closest(".container-2");
//       const name = container.querySelector(".name");

//       if (name) {
//         name.style.color = "red";
//       }
//     }
//     if (event.target.classList.contains("del")) {
//       const container = event.target.closest(".container-2");
//       if (container) {
//         container.remove();
//       }
//     }
//   });
// });


