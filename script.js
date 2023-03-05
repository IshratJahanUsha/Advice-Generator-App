let adviceID = document.getElementById('adviceID')
let advice = document.getElementById('advice')
let loadAdvice = document.getElementById('loadAdvice')

const fetchAdvice = async () => {
    adviceID.innerText = "Loading Advice No.."
    advice.innerText = "Loading Advice.."
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    adviceID.innerText = data.slip.id
    advice.innerText = data.slip.advice
}

fetchAdvice()

loadAdvice.addEventListener("click", fetchAdvice)



