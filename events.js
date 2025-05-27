const eventImages = document.querySelectorAll('.carousel-image');
let eventIndex = 0;

function showEventImage(index) {
  eventImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Auto slide every 5s
setInterval(() => {
  eventIndex = (eventIndex + 1) % eventImages.length;
  showEventImage(eventIndex);
}, 6000);