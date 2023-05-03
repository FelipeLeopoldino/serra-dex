function entrar() {
   let usuario = document.querySelector('#usuario')

   let senha = document.querySelector('#senha')

   let listaUsuario = []

   let validarUsuario = {
      usuario: '',
      senha: ''
   }

   listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

   listaUsuario.forEach(item => {
      if (usuario.value == item.key && senha.value == item.value) {
         validarUsuario = {
            usuario: item.key,
            senha: item.value
         }
      }
   })

   if (
      usuario.value == validarUsuario.usuario &&
      senha.value == validarUsuario.senha
   ) {
      window.open('./pages/home.html')

      let token = Math.random().toString(16).substring(2)
      localStorage.setItem('token', token)
   } else {
      alert('Login ou Senha incorretos')
   }
}
