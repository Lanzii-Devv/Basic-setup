document.getElementById("click").addEventListener("click", ()=>{
    fetch("http://localhost:2300/jiezel").then((res)=>{
        return res.text()
    }).then((data)=>{
        console.log(data);
    })
});