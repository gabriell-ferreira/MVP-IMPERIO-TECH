function getData() {
  fetch('http://localhost:3333/denuncia')
    .then(res => res.json())
    .then(data => {
      data.reports.forEach(report => {
        document.querySelector('.container').innerHTML += `
        <div class="servico">
          <span><strong>Zona:</strong> ${report.area}</span>
          <span><strong>Data término:</strong> ${report.image.data}</span>
          <span><strong>Serviço:</strong> ${report.descricao}</span>
        </div>
        `
      })
    })
}

getData()