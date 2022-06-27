let idBusca = document.getElementById('idBusca')
let buscar = document.getElementById('buscar')
let home = document.getElementById('home')

idBusca.addEventListener('click', fnSearch)

function fnSearch() {
  buscar.style.display = 'block'
  home.style.display = 'none'
}

var container = document.getElementById('container')
container.classList.add('card')
document.getElementById('button-search').addEventListener('click', function () {
  container.innerText = ''
  var query = document.getElementById('input-search').value
  axios.get('https://projeto-web-3-2022.herokuapp.com/movies?name=' + query).then(function (res) {
    var data = res.data
    console.log(data)
    for (var i = 0; data.length && i < 15; i++) {
      if (data[i]) {
        var li = document.createElement('li')
        var card = document.createElement('div')
        var title = document.createElement('p')
        var genres = document.createElement('p')
        var cardImage = document.createElement('img')
        cardImage.src = data[i]?.movieImage
        title.innerHTML = data[i]?.movieName
        genres.innerHTML = data[i]?.movieGender
        title.classList.add('title')
        genres.classList.add('genres')
        li.appendChild(card)
        card.appendChild(title)
        card.appendChild(cardImage)
        card.appendChild(genres)
        container.appendChild(li)
      }
    }
  })
})
