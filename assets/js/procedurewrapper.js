const wrapperprocc = document.querySelector(".wrapperprocc");
const selectBtn = wrapperprocc.querySelector(".select-btn");
const options = wrapperprocc.querySelector(".options");

let procedures = ["SOP/SOS", "Safety", "Drinks"];

function updateProcedure(element) {
  // Get the selected procedure from the clicked list item
  let selectedProcedure = element.textContent;

  // Redirect to the specific page point based on the selected procedure
  switch (selectedProcedure) {
    case "SOP/SOS":
      window.location.href = "#procedures1";
      break;
    case "Safety":
      window.location.href = "#sm";
      break;
    case "Drinks":
      window.location.href = "#procedures2";
      break;
    default:
      // If the selected procedure does not match any case, do nothing or handle it as needed
      break;
  }
}

function addProcedures() {
  options.innerHTML = "";
  procedures.forEach(procedure => {
    let li = `<li onclick="updateProcedure(this)">${procedure}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}

addProcedures();

selectBtn.addEventListener("mouseenter", () => {
  wrapperprocc.classList.add("active");
});

wrapperprocc.addEventListener("mouseleave", () => {
  wrapperprocc.classList.remove("active");
});
