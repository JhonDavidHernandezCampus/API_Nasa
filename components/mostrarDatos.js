export default{
    async datos(){
        const elements = document.querySelector('.elements');
        const ws = new Worker("./storage/ws.js",{type:"module"});

        let fecha = document.querySelector("input[name=fecha]").value;
        console.log(fecha);
        
        ws.postMessage({module: "pintarData", data:fecha});

        ws.addEventListener("message",(e)=>{
            let section = document.querySelector(".elements");
            section.innerHTML = e.data[0];
            section.style.backgroundImage=`url(${e.data[1].url})`;
        })
    },







    fecha(){
        let form = document.querySelector("form");
        form.addEventListener("submit", (e)=>{
            let fecha = document.querySelector("input[name=fecha]").value;
            e.preventDefault();
            this.datos(fecha);
            /* console.log(fecha); */
        })
    }
}