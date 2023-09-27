const btn = document.getElementsByClassName("acoordian");
const panel = document.getElementsByClassName("active");

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click" , function(){
        console.log("hello world");

        // select panel element
        let p = this.nextElementSibling;

        // display and remove element
        p.classList.toggle("active");

    });

}


