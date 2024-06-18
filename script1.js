

var movies = [];




if(localStorage.length > 0){
    Object.keys(localStorage).forEach(function(key){
        
        movies.push(JSON.parse(localStorage.getItem(key)));
     });


}

for(let movie of movies){
    
                /*
                document.getElementById('movoss').innerHTML+= `

                
                <div id="mov-${movie.imdbID}" class="movie">
            <div class="wrapper"><img src="${data.Poster}"></div>
            <div class="expla">
            <div class="mv-title">
                <h3>${movie.}</h3>
                <div class="star-score">
                    <i class="fa-solid fa-star"></i>
                    <a class="scoro" href="">${data.imdbRating}</a>
                </div>
            </div>

            <div class="details">
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <div id="${data.imdbID}" class="plus-ic"><i class="fa-solid fa-circle-plus"></i> Watchlist</div>
            </div>

            <div class="more">
                <p>${data.Plot}</p>
                
            </div>
            </div>
            </div>
                */

            document.getElementById('movoss').innerHTML+= `<div class="movie">${movie}</div>`
            document.getElementById('boxo').classList.add('hido');
            document.getElementById('movoss').classList.remove('hido');

           
    
}

document.getElementById('secho').addEventListener('click', ()=>{
    let mov = document.getElementById('movos').value.toLowerCase();


    if(mov){
      console.log(mov);
      let filtered =   movies.filter((movie)=>{
        //return movie.match("<h3>(.*?)</h3>").includes(mov);
        //return movie.match("<h3>(.*?)</h3>")[1].toLowerCase().contains(mov);

        return movie.match("<h3>(.*?)</h3>")[1].toLowerCase().includes(mov);
      })

      let cont = document.createElement('div');

      for(let move of filtered){
        let divoEM = document.createElement('div');
        divoEM.setAttribute('class', 'movie');
        divoEM.innerHTML = move;
        cont.append(divoEM)
      }
      document.getElementById('movoss').innerHTML = "";
      document.getElementById('movoss').append(cont)
    }
})

