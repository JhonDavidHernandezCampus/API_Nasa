
let ws = {
    pintarData(data){
        return data
    }
}
self.addEventListener("message",(e)=>{
    postMessage(ws[`${e.data.module}`](e.data.data))
    console.log(e.data.module);
})