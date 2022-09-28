let images = [
    "https://i.pinimg.com/originals/ed/0b/58/ed0b58eeb6225b4ecee5d476e228a28c.jpg" ,
    "https://i.pinimg.com/originals/b9/4e/9d/b94e9db53640fcf31f3da4063827272d.jpg" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ginZG0ZmAWQ9FAnEFqwvCtPViFPILHixAg&usqp=CAU" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxhHxBfixKXf2_ttrqWC_jvmJHrnYlL_iKA&usqp=CAU"
];

let i = 1;
let container = document.getElementById("slideshow");

container.innerHTML = null;
let img = document.createElement("img");
img.src = images[0];
container.append(img);

let id = setInterval(function(){
    if(i==images.length){
        i=0;
    }
    let image = images[i];
    container.innerHTML = null;
    let img = document.createElement("img");
    img.src = image;
    container.append(img);
    i++;
}, 2000)



let movieData =[];
function movie(name, date, poster, rating){
    this.name = name;
    this.releaseDate = date;
    this.poster = poster;
    this.rating = rating;
};

let m1 = new movie("Reacher", "02/01/2021", "https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg2YTEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UY562_CR0,0,380,562_.jpg", 8.3);
movieData.push(m1);

let m2 = new movie("Don't Look Up", "15/10/2021", "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR35,0,380,562_.jpg",7.2);
movieData.push(m2);

let m3 = new movie("Peacemaker", "12/02/2022", "https://m.media-amazon.com/images/M/MV5BODk2NjAyOWMtM2FjZC00MjZhLTkxMjQtZTM3NjJlYTE5MDdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg", 8.1);
movieData.push(m3);

let m4 = new movie("Boba Fett", "23/01/2022", "https://m.media-amazon.com/images/M/MV5BZjllZjE1MWEtYTJhZC00MWIyLTliMjEtYzM3ODc4YzQ2MjFlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UY720_.jpg", 7.5);
movieData.push(m4);

let m5 = new movie("The Mandalorian", "20/07/2018", "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_QL75_UX380_CR0,0,380,562_.jpg", 8.8);
movieData.push(m5);

let m6 = new movie("Game of Thrones", "13/04/2015", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UY562_CR17,0,380,562_.jpg", 9.3);
movieData.push(m6);

let m7 = new movie("Gangubai", "25/02/2022", "https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_QL75_UY562_CR35,0,380,562_.jpg", 7.0);
movieData.push(m7);

let m8 = new movie("Son of India", "05/03/2022", "https://m.media-amazon.com/images/M/MV5BNTcxMDM2N2ItMTUxZC00MjYzLTk3NDUtYzZhYTAzOGUyNmY0XkEyXkFqcGdeQXVyMTkyNDAyNjY@._V1_QL75_UY562_CR9,0,380,562_.jpg", 9.2);
movieData.push(m8);

let m9 = new movie("Pushpa", "25/12/2021", "https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX800_.jpg", 8.0);
movieData.push(m9);

localStorage.setItem("movies", JSON.stringify(movieData));

function showMovies(movieData){
    document.getElementById("movies").innerHTML = null;
    movieData.map(function(elem){
        
        let mainDiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.poster;

        let name = document.createElement("h3");
        name.innerText = elem.name;

        let date = document.createElement("p");
        date.innerText = elem.releaseDate;

        let rating = document.createElement("p");
        rating.innerText = elem.rating + "⭐";

        let imgDiv = document.createElement("div");
        imgDiv.append(img);

        let dataDiv = document.createElement("div");
        dataDiv.append(name, date, rating);

        mainDiv.append(imgDiv, dataDiv);
        document.getElementById("movies").append(mainDiv);
    })

}

showMovies(movieData);


document.getElementById("sort-lh").addEventListener("click", function(){
    movieData.sort((a,b)=>(a.rating-b.rating));
    showMovies(movieData);
})

document.getElementById("sort-hl").addEventListener("click", function(){
    movieData.sort((a,b)=>(b.rating-a.rating));
    showMovies(movieData);
})