const geradorDeConselhos = document.getElementById("btn-generator")
const numeroConselho = document.querySelector(".advice-number")
const textoConselho = document.querySelector(".advice-text")

const apiGeradorDeConselhos = async() => {
    const respostas = await fetch("https://api.adviceslip.com/advice")
    const data = await respostas.json()
   
    numeroConselho.innerHTML = `Advice #${data.slip.id}`
    textoConselho.innerHTML = data.slip.advice
}

geradorDeConselhos.addEventListener("click", apiGeradorDeConselhos)
