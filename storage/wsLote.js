let ws ={
    async consultaApi(fActual,fAntes){
        try{
            let dataApi = await fetch(`https://api.nasa.gov/planetary/apod?api_key=f3Z7FJLTQgj2vWXyWVki2KaeGURpf26RmZGdm5W6&start_date=${fAntes}&end_date=${fActual}&thumbs`);
            const data = dataApi.json();
            return data;
        }catch(error){
            console.log(error);
        }
    },
    pintar(data){
        console.log(data);
        let res="";
        data.forEach(e => {
            res+=`
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4 pelicula">
                    <div class="contenido">
                        <img class="poster" src="${e.hdurl}">
                        <h3 class="titulo">${(e.copyright?e.copyright:"Autor desconocido")}<h3>
                    </div>
                    <div class="animacion">
                        <h1 class="titu">${e.title}</h1>
                        <p class="descrip">${e.explanation}</p>
                        <div class="ver">
                            <a  href="${e.hdurl}" class="btn btn-primary" target="_blank">Ver</a>
                        </div>
                    </div>
            </div>
            
            `;
        });

        return res;
    }
    
}

self.addEventListener("message", async (e)=>{
    let fActual = new Date().toISOString().slice(0,10);
    let fAntes = new Date(new Date().setDate(new Date().getDate()-20)).toISOString().slice(0,10);
    let data = await ws.consultaApi(fActual,fAntes);
    console.log(ws.pintar(data));
    postMessage(ws[`${e.data.module}`](data));
    
})