/* this will remove the notification if the user clicked on the button */
function removeNotification() {
    document.querySelector(".notification").remove(); // Removes the notification bar
}

document.querySelector(".notification button").onclick = removeNotification;

/* ........................Swiper Code.............. */

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


