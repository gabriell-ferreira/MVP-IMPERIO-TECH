let marker = null
const myCustomColour = '#47e166'

const markerHtmlStyles = `
  background-color: ${myCustomColour};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const icon = L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles}" />`
})

function getData() {
  fetch('http://localhost:3333/denuncia')
    .then(res => res.json())
    .then(data => {
      data.reports.forEach(report => {
        console.log(report.image.geolocation)

        marker = new L.marker(report.image.geolocation, {icon}).addTo(map).bindPopup("Serviço finalizado").openPopup();
      })
    })
}

getData()

let map = L.map('map').setView([-3.1291438, -60.0284192], 13);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);