document.getElementById('secho').addEventListener('click', ()=>{

    let filmos = document.getElementById('movos').value

    if(filmos.replaceAll(/\s/g,'') !== ""){
        filmos = filmos.split(' ');

        fetch(`https://www.omdbapi.com/?apikey=935aa85a&s=${filmos.join('+')}`)
            .then(res => {
                return res.json();
            })
            .catch(error => console.log("OOps, not good!"))
            .then(data =>{
    
               
                if(data.Response === "False"){
                    document.getElementById('boxo').classList.add('hido');
                    document.getElementById('umami').classList.remove('hido');
    
                    if(!document.getElementById('movoss').classList.contains('hido')){
                        document.getElementById('movoss').classList.add('hido');
                    }
                }
    
                else{
    
                    document.getElementById('movoss').innerHTML = "";
                    let filmos = data.Search;
    
                    let reso = document.createElement('div');
    
                    for(let film of filmos){
                        fetch(`https://www.omdbapi.com/?apikey=935aa85a&i=${film.imdbID}`)
                            .then(res => res.json())
                            .then(data => {
                                
                                document.getElementById('boxo').classList.add('hido');
                                if(!document.getElementById('umami').classList.contains('hido')){
                                    document.getElementById('umami').classList.add('hido')
                                }
                                
                                
                                reso.innerHTML+=`
                                <div class="movie">
                        <img src="${data.Poster}">
                        <div class="expla">
                            <div class="mv-title">
                                <h3>${data.Title}</h3>
                                <div class="star-score">
                                    <i class="fa-solid fa-star"></i>
                                    <a class="scoro" href="">${data.imdbRating}</a>
                                </div>
                            </div>
    
                            <div class="details">
                                <p>${data.Runtime}</p>
                                <p>${data.Genre}</p>
                                <div class="plus-ic"><i class="fa-solid fa-circle-plus"></i> Watchlist</div>
                            </div>
    
                            <div class="more">
                                <p>${data.Plot.split(0, 150)}<button id="${data.imdbID}" class="myBtn hido">...Read more</button><span class="hido">${data.Plot.split(151)}</span></p>
                                
                            </div>
                        </div>
                    </div>
                                `
                                
                                
    
                                
    
                                                       
                                var beton = document.querySelectorAll('.myBtn');
                                console.log(beton);
                            
    
                                    for(let meh of beton){
    
                                        if(meh.parentElement.textContent.length > 150){
                                            
                                            meh.classList.remove('hido');
                                            meh.addEventListener('click', ()=>{
                                                meh.classList.remove('hido');
                                                meh.nextElementSibling.classList.remove('hido');
                                                meh.parentElement.parentElement.parentElement.parentElement.style.height = 'fit-content';
                                                meh.classList.add('hido');
                                            })
                                        }
    
                                        
                                    }
                                
                                
                                
    
                            }
                            
                        )
                        
    
                    
                        
                    }
                    document.getElementById('movoss').append(reso);
                    document.getElementById('movoss').classList.remove('hido');
                }
            })
    }
   

    document.getElementById('movos').value = "";


})

