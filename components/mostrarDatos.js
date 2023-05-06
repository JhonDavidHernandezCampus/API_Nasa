export default{
    async datos(){
        const ws = new Worker("./storage/wsSearch.js",{type:"module"});
        let fecha = document.querySelector("input[name=fecha]").value;
        ws.postMessage({module: "pintarData", data:fecha});

        ws.addEventListener("message",(e)=>{
            let section = document.querySelector(".elements");
            section.innerHTML = e.data[0];
/*             console.log(e.data[0]); */
            section.style.backgroundImage=`url(${e.data[1].url})`;
            ws.terminate();
        })
    },
    fecha(){
        let form = document.querySelector("form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            this.datos();
        })
    },

    lotes(){
        const ws = new Worker("./storage/wsLote.js",{type:"module"});
        ws.postMessage({module:"pintar"});
        ws.addEventListener("message",(e)=>{
            let contenedor= document.querySelector("#contenedor");
/*             console.log(contenedor);
            console.log(...e.data); */
            contenedor.innerHTML=(e.data);

        })

    }
}