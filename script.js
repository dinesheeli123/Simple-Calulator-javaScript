
const btn = document.querySelectorAll(".btn")
const inputValue = document.querySelector(".input-value")

const back = document.querySelector(".back")
back.addEventListener("click", () => {

    let res = inputValue.value

    inputValue.value = res.slice(0, -1)
})

btn.forEach((buttons) => {

    buttons.addEventListener('click', (e) => {


        if (buttons.textContent == "C") {

            inputValue.value = " "
        }

        else if (buttons.textContent != "C" && buttons.textContent != "=") {
            inputValue.value += buttons.textContent

        }

        else if (buttons.textContent == "=") {
            if (inputValue.value == "") {
                inputValue.value = ""
            }
            else {
                let cal = inputValue.value
                inputValue.value = eval(cal)
            }
        }

    })


})

