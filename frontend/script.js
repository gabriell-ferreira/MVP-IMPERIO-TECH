const dataBase = {}

document.getElementById('enviar').addEventListener('click', e => {
  enviar()
}) 

function enviar() {
  let sendOption = confirm('Enviar solicitação?')

  if(sendOption){
    fetch('http://localhost:3333/denuncia')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
}