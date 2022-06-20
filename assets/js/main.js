const API_URL = `https://randomuser.me/api?results=50`

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getPeople(API_URL)
async function getPeople(url) {
    const res = await fetch(url)
    const data = await res.json()

    showPeople(data.results)
}

function showPeople(people) {
    people.forEach((info) => {
        const {picture, name, location, dob, phone, email } = info

    const peopleEl = document.createElement('div')
    peopleEl.classList.add('people')
    
    peopleEl.innerHTML = `
        <div class="image">
            <img src="${picture.large}" alt="">
        </div>
        <div class="info">
            <h2 class="name"> ${name.title + " " + name.first + " " + name.last} </h2>
            <h4 class="number">${phone}</h4>
            <h4 class="email">${email}</h4>
            <h4 class="location">${location.city + " " + location.state + " " + location.country}</h4>
            <h4 class="dob"> age: ${dob.age}</h4>
        </div>   
    `
    main.appendChild(peopleEl)
    });
};

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const searchP = search.value 

//     if(searchP && searchP !== " "){
//         getPeople(API_URL + searchP)
//         search.value = " "
//     }
//     else{
//         window.location.reload()
//     }
// })


