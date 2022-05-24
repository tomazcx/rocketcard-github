const api = fetch("https://api.github.com/users/tomazcx")
const data = document.querySelectorAll(".data")
const dataArray = Array.from(data)

api.then(result =>
    result.json().then(data => {
        dataArray[0].textContent = data.login;
        dataArray[6].setAttribute("src", data.avatar_url)
        dataArray[1].textContent = data.followers
        dataArray[2].textContent = data.following
        dataArray[3].textContent = data.public_repos

        let company, location

        if (data.company === null) {
            company = "Não informada"
        }

        if (data.location === null) {
            location = "Não informada"
        }

        dataArray[4].textContent = company
        dataArray[5].textContent = location
    }))