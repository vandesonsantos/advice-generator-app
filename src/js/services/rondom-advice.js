import { baseUrl } from "/src/js/variables.js"

async function randomAdvice() {
    const response = await fetch(`${baseUrl}`) 
    return await response.json()
}

export { randomAdvice }