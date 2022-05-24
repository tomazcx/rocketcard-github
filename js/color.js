const border = document.querySelector(".phone")
const hex = "0123456789ABCDEF"
const hexArray = Array.from(hex)


const randomColor = () => {
    let color = "";
    for (let i = 0; i < 6; i++) {
        const letter = Math.floor(Math.random() * hexArray.length)
        color += hexArray[letter]
    }


    return `#${color}`

}

document.querySelector("button").addEventListener("click", e => {

    border.style.borderColor = randomColor()
})