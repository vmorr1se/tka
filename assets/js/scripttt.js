// Ambil elemen video dan tombol start
const video = document.getElementById('myVideo');
const startButton = document.getElementById('startButton');

// Sembunyikan tombol start saat video dimulai
video.addEventListener('play', function() {
    startButton.style.display = 'none';
});

// Tampilkan tombol start dan jeda video saat tombol start diklik
startButton.addEventListener('click', function() {
    video.play();
    startButton.style.display = 'none';
});

// Tampilkan kembali tombol start saat video dijeda atau selesai
video.addEventListener('pause', function() {
    startButton.style.display = 'block';
});
video.addEventListener('ended', function() {
    startButton.style.display = 'block';
});
