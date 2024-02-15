/*const button = document.querySelector("button");
const input = document.querySelectorAll("input");

function form () {
    input.forEach(function(currentValue){
        currentValue.value = "";
    })
}

button.addEventListener("click", form )
*/

function clicked(){
    var inputs = document.getElementsByTagName("input") //hitta de där inputs
    var textareas = document.getElementsByTagName("textarea") //hita textarea
     //ändra dess innehåll till ingenting
     for(var i=0;i<inputs.length;i++){    //gör det med alla inputs
         inputs[i].value="";//radera dem
    }
    for(var i=0; i<textareas.length;i++){
        textareas[i].value="";
    }
}

const submitButton = document.getElementById('submitButton'); //Skapar variablen och använder id för att veta vilkenb. 

// Funktionen som lägger till ett event som på click skapar en alert med hjälp av en metod. 

submitButton.addEventListener('click', function() { 
    alert('Your message has been sent! ))');
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

/* Smooth back to top knapp. */
window.addEventListener('scroll', function() {
    var scrollTopButton = document.querySelector('.scroll-top-btn');

    if (window.scrollY > 400) { 
        scrollTopButton.classList.add('scroll-top-show');
    } else {
        scrollTopButton.classList.remove('scroll-top-show');
    }
});
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
           Denna är bara test inget officelt som jag kan. ville bara se om det funkar. 
*/ 
