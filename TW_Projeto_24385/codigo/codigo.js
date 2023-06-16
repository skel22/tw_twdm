//https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=QuDZhmdxs6jls90aA7M32ZyZmN3MF2Zc

async function getNews(){
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=QuDZhmdxs6jls90aA7M32ZyZmN3MF2Zc').then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = 0; i < response.results.length; i++){
            console.log(response.results[i].title);
            const output = document.getElementById('output');

            try{
                output.innerHTML += `
                <div class="card" style = "border-color: #333">
                
                <div class="card-body">
               
                <center><img class = "article-image" src="${response.results[i]['media'][0]['media-metadata'][2].url}" 
                alt="${response.results[i]['media'][0].caption}" 
                title = "${response.results[i]['media'][0].caption}" style = ""></img></center>
                
                <h2>${response.results[i].title}</h2>
                
                <div class="card-text">
                    <p>${response.results[i].abstract}</p>
                </div>
                </div>
                </div>
                <br>
                <br>
                `
            }
            catch(error){
                console.log(error);
            }
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
}
getNews()