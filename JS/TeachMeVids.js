/*.....................This will show the video modal for each category........................*/

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayModal(videoSource) {
    modal.style.display = "block";
    document.querySelector('iframe').src = videoSource; 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.querySelector('iframe').src = ""; // Reset video to stop it from playing
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector('iframe').src = ""; // reset video to stop it from playing
    }
}

/*.....................This will return the Inner HTML for the selected category ........................*/

const getDollsPhotos = function() {
    let data = ``;
    const imgs = [
        {
            src: "../Images/TeachMe/Dolls/Bunny.jfif",
            alt: "Bunny Crochet Image",
            url: "https://www.youtube.com/embed/TlBMcexUwjE" 
        },
        {
            src: "../Images/TeachMe/Dolls/Amigurumi Doll Crochet.jfif",
            alt: "Amigurumi crochet doll Image",
            url: "https://www.youtube.com/embed/wDIFVM-Lxp4?si=NmtQhFalMCACKZnF" 
        },
        {
            src: "../Images/TeachMe/Dolls/Amigurumi Dress Doll.jfif",
            alt: "Amigurumi Crochet Doll Dress Image",
            url: "https://www.youtube.com/embed/45ViY0D0__Q?si=-mNvKFotDXzrBh4a" 
        },

    ];

    for (let i = 0; i < imgs.length; i++) {
        data += `<img src='${imgs[i].src}' alt='${imgs[i].alt}' url='${imgs[i].url}' />`;
    }

    return data;    
}



const getBandanasPhotos = function() {
    let data = ``;
    const imgs = [
        {
            src: "../Images/TeachMe/bandanas/Tulip headband.jfif",
            alt: "Tulip headband crocheted",
            url: "https://www.youtube.com/embed/Zmwk2F_aVV8?si=HjtdhlSLi9fuC6i5" 
        },

    ];

    for (let i = 0; i < imgs.length; i++) {
        data += `<img src='${imgs[i].src}' alt='${imgs[i].alt}' url='${imgs[i].url}' />`;
    }

    return data;    
}



/*.....................This will return the photos for each category........................*/

const showVideo = function() {
    const params = new URLSearchParams(window.location.search);
    const categoryClickedOn = params.get('category');

    if (categoryClickedOn === "Dolls") { 
        document.querySelector(".videos .row").innerHTML = getDollsPhotos();  
        
    } else if (categoryClickedOn === "Bandanas") {
        document.querySelector(".videos .row").innerHTML = getBandanasPhotos(); 

    } else if (categoryClickedOn === "Carpets") {

    } else if (categoryClickedOn === "Sweaters") {

    } else if (categoryClickedOn === "Book covers") {

    }

    const imageElements = document.querySelectorAll(".videos .row img");
    imageElements.forEach(function(img) {
        img.addEventListener("click", function() {
            const url = this.getAttribute("url"); // Use data-url for the video URL
            displayModal(url); // give the display function the url to display
        }); 
    });
}

showVideo();
