const calc = document.getElementById("calc")
const result = document.getElementById("result")

calc.addEventListener("click", (e) => {
   if(!e.target.classList.contains("btn"))
      return null
   if(result.innerText == "Infinity" || result.innerText == "NaN")
      result.innerText = 0

   const value = e.target.innerText

   switch(value){
      case "=":
         result.innerText = eval(result.innerText)
         break;

      case "CE":
         result.innerText = 0
         break;
      
      case "rem":
         if(result.innerText !== 0)
            result.innerText = result.innerText.slice(0, -1)

         if(!result.innerText)
            result.innerText = 0
         
         break;

      default:
         if(result.innerText == 0 && !isNaN(value) && value !== 0)
            return result.innerText = value
         result.innerText += value
   }
})