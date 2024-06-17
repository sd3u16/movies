document.getElementById('secho').addEventListener('click', ()=>{

    let filmos = document.getElementById('movos').value

    filmos = filmos.split(' ');

    fetch(`http://www.omdbapi.com/?apikey=935aa85a&s=${filmos.join('+')}`)
        .then(res => {
            return res.json();
        })
        .catch(error => console.log("OOps, not good!"))
        .then(data =>{

            console.log(data.Response);
            if(data.Response === "False"){
                document.getElementById('boxo').classList.add('hido');
                document.getElementById('umami').classList.remove('hido');
            }

            else{
                console.log(data);
            }
        })
        


})
