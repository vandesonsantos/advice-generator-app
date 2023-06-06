import { randomAdvice } from "/src/js/services/rondom-advice.js"

document.getElementById("btn-generator").addEventListener("click", () => {
    apiGeradorDeConselhos()
})

const numeroDeConselho = document.querySelector(".advice-number")
const textoDeConselho = document.querySelector(".advice-text")

async function apiGeradorDeConselhos() {
    const conselhos = await randomAdvice()
    numeroDeConselho.innerHTML = `Advice #${conselhos.slip.id}`
    textoDeConselho.innerHTML = conselhos.slip.advice
}
