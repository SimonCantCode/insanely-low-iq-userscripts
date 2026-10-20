// ==UserScript==
// @name     Canvas execution
// @version  1
// @match    https://canvas.kth.se/
// @grant    none
// ==/UserScript==


window.addEventListener('load', function() {
setTimeout(() => {

  const existingDiv = document.getElementsByClassName("Sidebar__TodoListContainer")[0]
  const newDiv = document.createElement("div");


  newDiv.textContent = "New div";
  newDiv.className = "execution";

  // TODO: Make it so u can click the link
  newDiv.innerHTML = `
    <b>Avrättning inbokad</b> <br>
    <p class="execution-desc">Till följd av usla studieresultat har din avrättning bokats in utanför KTH Entré nu på fredag. Obligatorisk närvaro råder. Anmälan görs via <a herf="https://www.student.ladok.se/">https://www.student.ladok.se/</a>.</p>

  `;

  existingDiv.before(newDiv);


  // Add the css
  const style = document.createElement("style");
  style.textContent = `
      .execution {
        background-color: white;
        color: black;
        border: 3px solid goldenrod;
        border-left-width: 20px;
        padding: 5px;
        font-size: 24px;
      }

      .execution-desc {
        font-size: 15px;
      }

  `;

  document.head.appendChild(style);

}, 4000);
});
