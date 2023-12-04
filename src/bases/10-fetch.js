const apiKey = 'hZUxWanWgVt057MOnVnb9gbkCxwnK0NE';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Promesas en cadena y Fetch API
peticion
    .then(resp => resp.json())
    .then(({data}) =>{
       const {url} =  data.images.original;

       const img = document.createElement('img');
       img.src = url;

       document.body.append(img);
    })
    .catch(console.warn)