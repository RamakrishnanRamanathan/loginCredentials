

function capWords(words) {
  const myNameCap = words.split(" ");
  const captilizeWords = myNameCap.map((names) => {
    return names.charAt(0).toUpperCase() + names.slice(1);
  });
  return captilizeWords.join(" ");
}
function inputChecker(){
    let inputName = inputNameEl.value.trim();

    if (inputName) {
      if (!(inputName.length > 3 && inputName.length < 20)) {
        alert(`dont be over smart`);
        return;
      }
  
      greetUserEl.textContent = `Welcome 🙋🏻‍♂️ ${capWords(inputName)}`;
    } else {
      alert(`cant get your name`);
    }
 }
const inputNameEl = document.querySelector("#inputName");
const proceedBtnEl = document.querySelector("#proceedBtn");
const greetUserEl = document.querySelector("#greetWithUserName");
proceedBtnEl.addEventListener("click", () => {
  
inputChecker()
})



document.addEventListener("keypress",(event)=>{
   if(event.key==='Enter'){
    inputChecker()
   }
})
 