const input = document.querySelector("#input")
const dice = document.querySelector("#dice")
const button = document.querySelector("#button")
const description = document.querySelector("#description")


input.addEventListener("keydown",(event)=>{
  if (event.key === 'Enter'){ 
    const value = event.currentTarget.value
    const printValue = rollDice()
    dice.textContent = value ? printValue : 0 
    input.value = ""
    description.textContent = value ? options[printValue] : options[0] 
    
    
}
})

button.addEventListener("click",(event)=>{
  const value = input.value
  const printValue = rollDice() + 2  
  dice.textContent = value ? printValue : 0
  input.value = ""
  description.textContent = value ? options[printValue] : options[0]
 
})

const rollDice = ()=>{
  return Math.floor(Math.random() * 20);
}

// const rollDiceLck = () =>{
//     return Math.floor(Math.random() * (15 - -4) + -4);;
// }

const options = {
  0: "Escribi algo pelotudo",
  1: "Seguramente te mueras haciéndolo",
  2: "Tal vez quedes vivo pero muy mal herido",
  3: "Las probabilidades están en tu contra",
  4: "Es poco probable que tengas éxito",
  5: "Podrías enfrentar algunos obstáculos importantes",
  6: "El resultado no será favorable",
  7: "Espera algunas dificultades en el camino",
  8: "Las probabilidades están en tu contra",
  9: "No parece que vaya a ser una buena experiencia",
  10: "El resultado será neutral, ni bueno ni malo",
  11: "Podrías obtener un resultado aceptable",
  12: "Hay algunas posibilidades de éxito moderado",
  13: "Tendrás una experiencia decente",
  14: "Es probable que obtengas un resultado satisfactorio",
  15: "Las probabilidades están a tu favor",
  16: "Podrías obtener un resultado favorable",
  17: "Es probable que tengas éxito",
  18: "Tendrás buenas probabilidades de obtener un resultado positivo",
  19: "Es altamente probable que obtengas un resultado exitoso",
  20: "Ya esta realizado ni necesitas esforzarte en nada",
  21: "esto ya sucedio y obtenes sentido aracnido",
  22: "mientras lo realizas desarrollas la inmortalidad eterna "
}
