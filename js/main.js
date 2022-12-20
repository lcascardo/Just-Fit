

function eventoBotonNav() {
    document.getElementById("item1").addEventListener("click",()=>{
        document.getElementById("item1").classList.add("evento-nav");
        document.getElementById("item2").classList.remove("evento-nav");
        document.getElementById("item3").classList.remove("evento-nav");
        document.getElementById("item4").classList.remove("evento-nav");
        document.getElementById("item5").classList.remove("evento-nav");
    });

    document.getElementById("item2").addEventListener("click",()=>{
        document.getElementById("item1").classList.remove("evento-nav");
        document.getElementById("item2").classList.add("evento-nav");
        document.getElementById("item3").classList.remove("evento-nav");
        document.getElementById("item4").classList.remove("evento-nav");
        document.getElementById("item5").classList.remove("evento-nav");
    });

    document.getElementById("item3").addEventListener("click",()=>{
        document.getElementById("item1").classList.remove("evento-nav");
        document.getElementById("item2").classList.remove("evento-nav");
        document.getElementById("item3").classList.add("evento-nav");
        document.getElementById("item4").classList.remove("evento-nav");
        document.getElementById("item5").classList.remove("evento-nav");
    });

    document.getElementById("item4").addEventListener("click",()=>{
        document.getElementById("item1").classList.remove("evento-nav");
        document.getElementById("item2").classList.remove("evento-nav");
        document.getElementById("item3").classList.remove("evento-nav");
        document.getElementById("item4").classList.add("evento-nav");
        document.getElementById("item5").classList.remove("evento-nav");
    });

    document.getElementById("item5").addEventListener("click",()=>{
        document.getElementById("item1").classList.remove("evento-nav");
        document.getElementById("item2").classList.remove("evento-nav");
        document.getElementById("item3").classList.remove("evento-nav");
        document.getElementById("item4").classList.remove("evento-nav");
        document.getElementById("item5").classList.add("evento-nav");
    });
}

eventoBotonNav();

console.log("hola");