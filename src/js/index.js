document.getElementById("btn-generator").addEventListener("click", () => {
    apiGeradorDeConselhos()
})

async function conselhosAleatorios() {
    const url = "https://api.adviceslip.com/advice"
    const respostas = await fetch(url)
    return await respostas.json()
}

const numeroDeConselho = document.querySelector(".advice-number")
const textoDeConselho = document.querySelector(".advice-text")

async function apiGeradorDeConselhos() {
    const conselhos = await conselhosAleatorios()
    numeroDeConselho.innerHTML = `Advice #${conselhos.slip.id}`
    textoDeConselho.innerHTML = conselhos.slip.advice
}
