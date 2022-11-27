for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
};

document.addEventListener("keypress", function (e){
    makeSound(e.key);
    buttonAnimation(e.key);
})  

function makeSound(key) {

    switch (key.toUpperCase()) {
        case "W":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
    
        case "A":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "S":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "D":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "J":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "K":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "L":
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;


        default:   
            console.log(key);
            break;
    }

}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)

}   
