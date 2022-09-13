const billAmount = document.querySelector("#bill-amount");
const inputLabel = document.querySelector("#cash-label");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const returnMsg = document.querySelector("#return-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const validDenominations = [2000, 500, 100, 20, 10, 5, 1];

function hideMessage() {
  errorMsg.style.display = "none";
}

function showMessage(msg) {
  errorMsg.style.display = "block";
  errorMsg.innerText = msg;
}

function hideInput() {
  inputLabel.style.display = "none";
  cashGiven.style.display = "none";
}

function showInput() {
  inputLabel.style.display = "block";
  cashGiven.style.display = "block";
}

function calculateReturn() {
  let returnAmount = +cashGiven.value - +billAmount.value;
  showMessage(`Return Amount: ${returnAmount}`);
  for (let i = 0; i < validDenominations.length; i++) {
    let num = Math.trunc(returnAmount / validDenominations[i]);
    returnAmount = returnAmount % validDenominations[i];
    noOfNotes[i].innerText = num;
  }
}

hideInput();
function validateInput() {
  hideMessage();
  if (+billAmount.value > 0) {
    showInput();
    if (+cashGiven.value >= +billAmount.value) {
      calculateReturn();
    } else if (cashGiven.value !== "") {
      showMessage("Do you want to go to jail?");
    }
  } else {
    showMessage("Bill amount is not valid!");
  }
}

checkBtn.addEventListener("click", validateInput);
