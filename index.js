//Este metodo sirve para cargar informacion de la API

async function TraerDatos( ){

    try {
        
        const response = await fetch("https://rickandmortyapi.com/api/character")

        const data = await response.json()

        data.results.forEach(element => {
            
            const article = document.createRange().createContextualFragment(`
            
            <article>
            
            <div class="image-container">
                <img src="${element.image}">
            </div>

            <h2>${element.name}</h2>

            <span>${element.status}</span>

            </article>
            
            
            `)
            const main = document.querySelector("main")

            main.append(article)

            console.log(data);
        });
    }  catch (error) {
    }

}

TraerDatos()