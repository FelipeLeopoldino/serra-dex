let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validarUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validarSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validarConfirmarSenha = false

usuario.addEventListener('keyup', () => {
   if (usuario.value.length <= 4) {
      labelUsuario.setAttribute('style', 'color: red')
      labelUsuario.innerHTML = '*Insira no min 5 caracteres*'
      usuario.setAttribute('style', 'border-color: red')
      validarUsuario = false
   } else {
      labelUsuario.setAttribute('style', 'color: green')
      labelUsuario.innerHTML = 'Usuário'
      usuario.setAttribute('style', 'border-color: green')
      validarUsuario = true
   }
})

senha.addEventListener('keyup', () => {
   if (senha.value.length <= 5) {
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = '*Insira no min 6 caracteres*'
      senha.setAttribute('style', 'border-color: red')
      validarSenha = false
   } else {
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'Senha'
      senha.setAttribute('style', 'border-color: green')
      validarSenha = true
   }
})

confirmarSenha.addEventListener('keyup', () => {
   if (senha.value != confirmarSenha.value) {
      labelConfirmarSenha.setAttribute('style', 'color: red')
      labelConfirmarSenha.innerHTML = '*Senha incorreta*'
      confirmarSenha.setAttribute('style', 'border-color: red')
      validarConfirmarSenha = false
   } else {
      labelConfirmarSenha.setAttribute('style', 'color: green')
      labelConfirmarSenha.innerHTML = 'Confirmar Senha'
      confirmarSenha.setAttribute('style', 'border-color: green')
      validarConfirmarSenha = true
   }
})

function cadastrar() {
   if (validarUsuario && validarSenha && validarConfirmarSenha) {
      let listaUsuario = JSON.parse(
         localStorage.getItem('listaUsuario') || '[]'
      )

      listaUsuario.push({
         key: usuario.value,
         value: senha.value
      })

      localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))

      alert('Cadastro Realizado com Sucesso!')
   }
}
