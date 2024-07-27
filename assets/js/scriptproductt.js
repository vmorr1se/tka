document.querySelectorAll('.cardsv').forEach(cardsv => {
    const slides = cardsv.querySelectorAll('.slidersv img');
    const paginationsv = cardsv.querySelector('.paginationsv');
    const playButton = cardsv.querySelector('.play-pause-controls .play');
    const pauseButton = cardsv.querySelector('.play-pause-controls .pause');
    let currentSlide = 0;
    let interval;
    let slideInterval = 3000; // Interval waktu slide dalam milidetik
    let lastSlideChangeTime = Date.now();
    
    function startSlideShow() {
        interval = setInterval(nextSlide, slideInterval); // Ganti slide setiap 3 detik
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }

    function stopSlideShow() {
        clearInterval(interval);
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }

    function resumeSlideShow() {
        const now = Date.now();
        const timeSinceLastChange = now - lastSlideChangeTime;
        const remainingTime = slideInterval - (timeSinceLastChange % slideInterval);
        setTimeout(() => {
            nextSlide();
            interval = setInterval(nextSlide, slideInterval);
        }, remainingTime);
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        paginationsv.querySelectorAll('span').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
        lastSlideChangeTime = Date.now(); // Perbarui waktu terakhir slide
    }

    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        if (index === 0) dot.classList.add('active');
        paginationsv.appendChild(dot);
    });

    const dots = paginationsv.querySelectorAll('span');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideShow(); // Pause saat klik paginationsv
        });
    });

    playButton.addEventListener('click', resumeSlideShow);
    pauseButton.addEventListener('click', stopSlideShow);

    // Mulai slideshow secara default
    startSlideShow();
});
