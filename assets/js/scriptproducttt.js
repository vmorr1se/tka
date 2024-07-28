document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const clones = Array.from(track.children).map(child => child.cloneNode(true));
    clones.forEach(clone => track.appendChild(clone));
  });
