var hoteles = {
    SantJust: {
        name: "Sant Just hotel",
        location: "Sant just Desvern",
        img: "https://www.hotelbarcelona1882.com/wp-content/uploads/sites/1686/nggallery/home/carusel2.jpg"
    },
    W: {
        name: "hotel W",
        location: "Barcelona",
        img: "https://www.niceforyou.com/sites/default/files/styles/1920x900_resize/public/2019-05/Hotel%20W%20Barcelona.jpg?itok=NCDBLOwp"
    }
};

var estrellas={
    1: "<span>&#9733;</span><span>&#10032;</span><span>&#10032;</span><span>&#10032;</span><span>&#10032;</span>",
    2: "<span>&#9733;</span><span>&#9733;</span><span>&#10032;</span><span>&#10032;</span><span>&#10032;</span>",
    3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#10032;</span><span>&#10032;</span>",
    4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#10032;</span>",
    5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};


var hotel = prompt("Que hotel quieres puntuar, SantJust o W?");
    document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[hotel].name;
    document.getElementById("hotel-location").innerHTML = "Ubicado en " + hoteles[hotel].location;
    document.getElementById("hotel-img").src = hoteles[hotel].img;

var rating = prompt("Que puntuación le das al hotel del 1 al 5?");
    document.getElementById("rating").innerHTML = estrellas[rating];

var anonymous = confirm("Quieres que la reseña sea anónima?");
    document.getElementById("anonimo").checked = anonymous;







