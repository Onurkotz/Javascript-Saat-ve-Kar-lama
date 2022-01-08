let kullanıcı = prompt("Daha sıcak bir karşılama için lütfen adınızı giriniz.")
let isim = document.querySelector('#myName')


if (kullanıcı != ""){
    isim.innerHTML = `${kullanıcı}`
} else if (kullanıcı = "null"){
    isim.innerHTML = "adsız kişi"
}


function showTime(){
    let time = document.querySelector("#myClock")

    let today = new Date();
    let saat = today.getHours();
    let dakika = today.getMinutes();
    let saniye = today.getSeconds();
    let toplam = saat + "." + dakika + "." + saniye


    

    let günler = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ]

    time.innerHTML = toplam + "   " + (günler[new Date().getDay()]);

    setTimeout(showTime, 1000);
}

showTime()




