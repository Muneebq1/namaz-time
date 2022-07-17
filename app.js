let time = () => {
let city = document.querySelector("#city").value;
let time = document.querySelector(".timing");


axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=8`).then(function (response){
    
    const api = response.data;
    console.log(api);
    
    document.querySelector(`#Fajr`).innerText = `Fajr: ${api.data.timings.Fajr}`;
    
    
    document.querySelector(`#Dhuhr`).innerText = `Dhuhr: ${api.data.timings.Dhuhr}`;

  
    document.querySelector(`#Asr`).innerText = `Asr: ${api.data.timings.Asr}`;

   
    document.querySelector(`#Maghrib`).innerText = `Maghrib: ${api.data.timings.Maghrib}`;

    
    document.querySelector(`#Isha`).innerText = `Isha: ${api.data.timings.Isha}`;

    })
}

