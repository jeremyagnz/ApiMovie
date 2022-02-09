const cargarPeliculas = async() => {

    try{
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e1bab64f5ebced81a66dc2708a36039&languague=es-ES');
        console.log(res);


        if(res.status === 200){
            const data = await res.json();

            let peliculas = '';
            data.results.forEach(pelicula => {
                peliculas += `<h1> ${pelicula.title}</h1>`
            });

            document.getElementById('contenedor').innerHTML = peliculas;
            console.log(peliculas)


        }else if (res.status === 401){
            console.log("LLave mal");
        }else if(res.status === 404){
            console.log("Hubo un error inesperado");
        }

    }catch(err){
        console.log(err);
    }

    }

cargarPeliculas();