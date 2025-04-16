document.addEventListener("DOMContentLoaded", () => {
    const resultElement = document.querySelector(".result");
    const buttons = document.querySelectorAll(".buttons button");
  
    let currentInput = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (value === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch {
            currentInput = "Ошибка";
          }
        } else if (value === "C") {
          currentInput = "";
        } else {
          currentInput += value;
        }
  
        resultElement.textContent = currentInput;
      });
    });
  });
  