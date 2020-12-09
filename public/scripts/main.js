//database of movies
let movies = [
    troy = {
        name : "Troy",
        poster : "public/images/posters/troy.jpg",
        page : "details.html",
        description : "It is the year 1250 B.C. during the late Bronze age. Two emerging nations begin to clash after Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband, Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans. But they come to a stop by Hector, Prince of Troy. The whole movie shows their battle struggles and the foreshadowing of fate in this adaptation of Homer's classic \"The Iliad.\"(Troy, 2004)",
        genre : "historical"
    },
    shawshank = {
        name : "The Shawshank Redemption",
        poster : "public/images/posters/shawshank.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre : "drama"
    },
    schindler = {
        name : "Schindler's List",
        poster : "public/images/posters/schindler.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre: "biography"
    },
    return_of_the_king = {
        name : "The Lord of the Rings: The Return of the King",
        poster : "public/images/posters/return_of_the_king.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre: "adventure"
    },
    strangelove = {
        name : "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        poster : "public/images/posters/strangelove.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre: "comedy"
    }
],
 series = [
    planet_earth = {
        name : "Planet Earth II",
        poster : "public/images/posters/planet_earth.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre : "historical"
    },
    breaking_bad = {
        name : "Breaking Bad",
        poster : "public/images/posters/breaking_bad.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre : "drama"
    },
    chernobyl = {
        name : "Chernobyl",
        poster : "public/images/posters/chernobyl.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre: "biography"
    },
    firefly = {
        name : "Firefly",
        poster : "public/images/posters/firefly.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre: "adventure"
    },
    rick_and_morty = {
        name : "Rick and Morty",
        poster : "public/images/posters/rick_and_morty.jpg",
        page : "details.html",
        description : "lorem ipsum",
        genre: "comedy"
    }
]

//the array for every movie. Needed for the function below
let allTitles = movies.concat(series);

//variables for comment functions
let Input = document.getElementById('input');
let Btn = document.getElementById('send-btn');
let commentList = document.getElementById('comment-list');
let comments = [];

function createList(array)  //function to create list of posters
{
    //list of posters
    
    let poster_box = document.createElement('div'),
    list = document.createElement('ul');
    
    
    poster_box.className = "poster-box";

    for(let i = 0; i < array.length; i++)
    {
        //separate posters for each element of the databese
         item = document.createElement('li'),
         link = document.createElement('a'),
         poster = document.createElement('img'),
         figure = document.createElement('figure'),
         caption = document.createElement('figcaption'),
         
        //internal parameters        
        poster.src = array[i].poster;
        link.href = array[i].page;

        //appending everything together 
        caption.appendChild(document.createTextNode(array[i].name));
        link.appendChild(poster);
        figure.appendChild(link);
        figure.appendChild(caption);
        item.appendChild(figure);
        list.appendChild(item); 
    }

    poster_box.appendChild(list);
    

    return poster_box;
}

//the function for creating the list of the chosen genre
function genreSelection(genre)
{
    let genreList = [];

    for(let i = 0; i < allTitles.length; i++)
    {
        if (allTitles[i].genre === String(genre))
        {   
            genreList.push(allTitles[i]);
        }
    }
    return genreList;
}

//the function for showing the information of the chosen movie
function movieDetails(title)
{
    let poster = document.getElementById('movie-poster'),
    name = document.getElementById('movie-name'),
    description = document.getElementById('movie-description');
    

    for(i=0; i < allTitles.length; i++)
    {
        if(allTitles[i].name === String(title))
        {
            poster.src = allTitles[i].poster;
            name.innerHTML = allTitles[i].name;
            description.innerHTML = allTitles[i].description;
        }
    }
}


//for responsive navbar
function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

    //switch for passing different parameters to the functions. Implement a better way of doing so later

window.onload = function () {
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
    case "/genre.html" :
        document.getElementById('movie-posters').appendChild(createList(genreSelection("historical")));
       break;
    case "/details.html" :
        movieDetails("Troy");
        break;
    default: 
        console.log("Unknown");
}
}


//adding comments
Btn.addEventListener('click', () => {
    //input validation
    if (Input.value.length === 0) {
      alert('Add comment before sending!');
    } else if (Input.value.length > 0 && Input.value.length < 3) {
      alert('Too short comment! It should be at least 3 chars!');
    } else {
        comments.push(Input.value);   
        populateCommentList(comments);    
        Input.value = ''
    }
  });
//goes through the array of comments and adds them to html
  function populateCommentList (List) {
    commentList.innerHTML = '';
    
    for (let i = 0; i < List.length; i++) {
      let item = createCommentItem(List[i]);
        commentList.appendChild(item);
    }
  }
//creates html structure for every array elemnt above
  function createCommentItem (comment) {
    let commentItem = document.createElement('li'),
        commentItemText = document.createElement('span');
        
    
    commentItem.classList.add('comment-item');
    commentItemText.classList.add('comment-text');
    
  
    commentItemText.innerText = comment;
    commentItem.appendChild(commentItemText);
    return commentItem;
  }
  


  