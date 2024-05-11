function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  // Saat, dakika ve saniyeleri iki basamaklı olarak göstermek için kontrol
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  // Saati HTML içeriğine ekle
  document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Saati her saniye güncelle
setInterval(updateClock, 1000);