const form = document.querySelector('form')
const user = document.querySelector('.userInput')
const container = document.querySelector('.repo__container')



async function gitHubUserRepos() {
    try {
        let repositories = await fetch(`http://api.github.com/users/${user.value}/repos`)
        let convertedData = await repositories.json();
        console.log(convertedData);

        convertedData.map(repo => {
            let ul = document.createElement('ul')
            let li = document.createElement('li')
            let a = document.createElement('a')
            let update = document.createElement('p')

            a.href = repo.html_url
            a.innerHTML = repo.name
            update.innerHTML = repo.pushed_at

            li.appendChild(a)
            ul.appendChild(li)
            container.appendChild(ul)

        })

    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    gitHubUserRepos()
})