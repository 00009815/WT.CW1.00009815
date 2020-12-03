let movies = [
    troy = {
        name : "Troy",
        poster : "public/images/posters/troy.jpg",
        page : "index.html",
        genre : "Historical"
    },
    shawshank = {
        name : "The Shawshank Redemption",
        poster : "public/images/posters/shawshank.jpg",
        page : "index.html",
        genre : "drama"
    },
    schindler = {
        name : "Schindler's List",
        poster : "public/images/posters/schindler.jpg",
        page : "index.html",
        genre: "biography"
    },
    return_of_the_king = {
        name : "The Lord of the Rings: The Return of the King",
        poster : "public/images/posters/return_of_the_king.jpg",
        page : "index.html",
        genre: "adventure"
    },
    strangelove = {
        name : "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        poster : "public/images/posters/strangelove.jpg",
        page : "index.html",
        genre: "comedy"
    }
],
 series = [
    planet_earth = {
        name : "Planet Earth II",
        poster : "public/images/posters/planet_earth.jpg",
        page : "index.html",
        genre : "Historical"
    },
    breaking_bad = {
        name : "Breaking Bad",
        poster : "public/images/posters/breaking_bad.jpg",
        page : "index.html",
        genre : "drama"
    },
    chernobyl = {
        name : "Chernobyl",
        poster : "public/images/posters/chernobyl.jpg",
        page : "index.html",
        genre: "biography"
    },
    firefly = {
        name : "Firefly",
        poster : "public/images/posters/firefly.jpg",
        page : "index.html",
        genre: "adventure"
    },
    rick_and_morty = {
        name : "Rick and Morty",
        poster : "public/images/posters/rick_and_morty.jpg",
        page : "index.html",
        genre: "comedy"
    }
]



function createList(array)  //function to create list of posters
{
    //list of posters
    
    let poster_table = document.createElement('div'),
    poster_box = document.createElement('div'),
    list = document.createElement('ul');
    
    poster_table.className = "posters";
    poster_box.className = "poster-box";

    for(let i = 0; i < array.length; i++)
    {
        
         item = document.createElement('li'),
         link = document.createElement('a'),
         poster = document.createElement('img'),
         figure = document.createElement('figure'),
         caption = document.createElement('figcaption'),
         
                
        poster.src = array[i].poster;
        link.href = array[i].page;

        caption.appendChild(document.createTextNode(array[i].name));
        link.appendChild(poster);
        figure.appendChild(link);
        figure.appendChild(caption);
        item.appendChild(figure);
        list.appendChild(item); 
    }

    poster_box.appendChild(list);
    poster_table.appendChild(poster_box);

    return poster_table;
}

let pathname = window.location.pathname;
switch(pathname) {
   case "/index.html" :
        document.getElementById('releases-posters').appendChild(createList(movies)); 
        document.getElementById('series-posters').appendChild(createList(series));
        document.getElementById('movie-posters').appendChild(createList(movies));
        break;
   case "/movies.html" :
        document.getElementById('movie-posters').appendChild(createList(movies));
       break;
    case "/series.html" : 
        document.getElementById('series-posters').appendChild(createList(series));
        break;
}