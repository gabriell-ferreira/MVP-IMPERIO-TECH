module.exports = {  
  miningNetworkSocial(request, response){
    let dataBase = {
      comments: [],
      reports: []
    }

    let zones = ['sul', 'leste', 'oeste', 'norte']
    
    const actualDate = 24

    const commments = [
      {
        content: 'aqui na minha rua foi construído uma lombada irregular',
        img: {
          data: '24/10/2021',
          geolocation: [-3.1291438, -60.0284192]
        }
      },
      {
        content: 'amarelinhos não respeitam a sinalização de transito',
        img: {
          data: '20/10/2021',
          geolocation: [-3.125705, -60.0147191]
        }
      },
      {
        content: 'semaforo desligado na avenida grande circular',
        img: {
          data: '22/10/2021',
          geolocation: [-3.0214245, -59.9581159]
        }
      }
    ]

    const keywords = [
      'semaforo desligado', 'falta de sinalização', 'lombada irregular', 'faixa apagada'
    ]

    function saveComment(comment){
      dataBase.comments.push(comment)
    }

    function filterComment(comments){
      comments.forEach(comment => {

        keywords.forEach(keyword => {
        
          if(comment.content.includes(keyword) && comment.img.geolocation && ( (actualDate - Number(comment.img.data.substring(0,2)))) < 7){
            saveComment(comment)
          }
          
        })
        
      })
      generateReport(dataBase)
    }

    function generateReport(dataBase){
      dataBase.comments.forEach((data, index) => {
        dataBase.reports.push({
          status: 'em andamento',
          area: zones[index],
          descricao: data.content,
          image: data.img
        })
      })
      
      response.json(dataBase)
    }

    filterComment(commments)
  },
  formReport(request, response){

    dataBase = {
      reports: [
        {
          area: 'sul',
          descricao: 'aqui na minha rua foi construído uma lombada irregular',
          image: {
            data: '24/10/2021',
            geolocation: [-3.1291438, -60.0284192]
          }
        },
        {
          area: 'leste',
          descricao: 'semaforo desligado na avenida grande circular',
          image: {
            data: '22/10/2021',
            geolocation: [-3.0214245, -59.9581159]
          }
        }
      ]
    }

    dataBase.reports.push({
      area: 'oeste',
      descricao: 'por falta de sinalização perto da escola do meu filho, muitas crianças correm o risco de serem atropeladas',
      image: {
        data: '19/10/2021',
        geolocation: [-3.101495, -60.057874]
      }
    })

    return response.json(dataBase)
  },
  dispatchTeam(request, response){
    const dataBase = {
      reports: [
        {
          area: 'sul',
          descricao: 'aqui na minha rua foi construído uma lombada irregular',
          image: {
            data: '24/10/2021',
            geolocation: [-3.1291438, -60.0284192]
          }
        },
        {
          area: 'leste',
          descricao: 'semaforo desligado na avenida grande circular',
          image: {
            data: '22/10/2021',
            geolocation: [-3.0214245, -59.9581159]
          }
        },
        {
          area: 'oeste',
          descricao: 'por falta de sinalização perto da escola do meu filho, muitas crianças correm o risco de serem atropeladas',
          image: {
            data: '19/10/2021',
            geolocation: [-3.101495, -60.057874]
          }
        }
      ]
    }

    dataBase.reports.forEach(report => {
      if(report.area == 'sul'){
        console.log(report.area, '- Enviar para central de trânsito da zona sul')
      } else if(report.area == 'leste'){
        console.log(report.area, '- Enviar para central de trânsito da zona leste')
      } else if(report.area == 'oeste'){
        console.log(report.area, '- Enviar para central de trânsito da zona oeste')
      }
    })
  },
  generateSolutionReport(request, response){
    
  }
}