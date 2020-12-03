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
    stragelove = {
        name : "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        poster : "public/images/posters/strangelove.jpg",
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
document.getElementById('releases-posters').appendChild(createList(movies)); //addition the generated list to the page
document.getElementById('series-posters').appendChild(createList(movies));
document.getElementById('movie-posters').appendChild(createList(movies));
