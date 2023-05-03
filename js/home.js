const pokemonNome = document.querySelector('.pokemon_nome')
const pokemonNumero = document.querySelector('.pokemon_numero')
const pokemonImage = document.querySelector('.pokemon_imagem')

const form = document.querySelector('.form')
const input = document.querySelector('.procurar_pokemon')

const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let procurarPokemon = 1

const data_base = async pokemon => {
   const APIResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
   )

   if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      return data
   }
}

const renderizarPokemon = async pokemon => {
   const data = await data_base(pokemon)

   pokemonNome.innerHTML = 'Loading...'
   pokemonNumero.innerHTML = ''

   if (data) {
      pokemonImage.style.display = 'block'
      pokemonNome.innerHTML = data.name
      pokemonNumero.innerHTML = data.id
      pokemonImage.src =
         data['sprites']['versions']['generation-v']['black-white']['animated'][
            'front_default'
         ]

      input.value = ''
      procurarPokemon = data.id
   } else {
      pokemonImage.style.display = 'none'
      pokemonNome.innerHTML = 'Pokemon não encontrado!'
      pokemonNumero.innerHTML = ''
   }
}

form.addEventListener('submit', event => {
   event.preventDefault()
   renderizarPokemon(input.value.toLowerCase())
})

if (localStorage.getItem('token') == null) {
   alert('Você precisa estar logado para essa página')
   window.open('./index.html', '_self')
}

buttonPrev.addEventListener('click', () => {
   if (procurarPokemon > 1) {
      procurarPokemon -= 1
      renderizarPokemon(procurarPokemon)
   }
})

buttonNext.addEventListener('click', () => {
   procurarPokemon += 1
   renderizarPokemon(procurarPokemon)
})

function sair() {
   localStorage.removeItem('token')
   window.open('../index.html', '_self')
}

renderizarPokemon(procurarPokemon)
