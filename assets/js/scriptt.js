document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const pagination = document.querySelector('.pagination');

    let currentSlide = 0;
    let slidesPerPage = 2; // Default slides per page untuk layar < 1220px
    const totalSlides = document.querySelectorAll('.slide').length;

    // Set slidesPerPage berdasarkan lebar layar saat halaman dimuat
    if (window.innerWidth >= 1220) {
        slidesPerPage = 3;
    } else if (window.innerWidth >= 768) {
        slidesPerPage = 2;
    }

    prevButton.style.display = 'none'; // Sembunyikan tombol prev secara default

    // Function untuk menggerakkan slider
    function moveSlider(direction) {
        const maxSlides = totalSlides - slidesPerPage;
        currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlides);

        if (currentSlide === maxSlides && slidesPerPage === 2 && totalSlides % 2 !== 0) {
            // Jika di halaman terakhir dan totalSlides ganjil, tambahkan 1 untuk menampilkan card terakhir
            currentSlide++;
        }

        slider.style.transform = `translateX(-${currentSlide * (100 / slidesPerPage)}%)`;

        updatePagination();
        updateButtons();
    }

    // Function untuk update pagination indicators
    function updatePagination() {
        pagination.innerHTML = '';
        const numPages = Math.ceil(totalSlides / slidesPerPage);
        for (let i = 0; i < numPages; i++) {
            const pageIndicator = document.createElement('div');
            pageIndicator.classList.add('page-indicator');
            if (i === Math.floor(currentSlide / slidesPerPage)) {
                pageIndicator.classList.add('active');
            }
            pageIndicator.addEventListener('click', () => {
                currentSlide = i * slidesPerPage;
                slider.style.transform = `translateX(-${currentSlide * (100 / slidesPerPage)}%)`;
                updatePagination();
                updateButtons();
            });
            pagination.appendChild(pageIndicator);
        }
    }

    // Function untuk update prev/next buttons
    function updateButtons() {
        prevButton.style.display = currentSlide === 0 ? 'none' : 'block';
        nextButton.style.display = currentSlide >= totalSlides - slidesPerPage ? 'none' : 'block';
    }

    // Event listeners untuk prev/next buttons
    prevButton.addEventListener('click', () => moveSlider(-slidesPerPage));
    nextButton.addEventListener('click', () => moveSlider(slidesPerPage));

    // Setup awal
    updatePagination();
    updateButtons();

    // Event listener untuk resize window
    window.addEventListener('resize', () => {
        // Update slidesPerPage berdasarkan lebar layar saat window diresize
        if (window.innerWidth >= 1220) {
            slidesPerPage = 3;
        } else if (window.innerWidth >= 768) {
            slidesPerPage = 2;
        } else if (window.innerWidth >= 0) {
            slidesPerPage = 1;
        } else {
            slidesPerPage = 1; // Default untuk layar < 768px
        }

        // Reset slider ke slide pertama jika total slide kurang dari currentSlide + slidesPerPage
        if (currentSlide + slidesPerPage > totalSlides) {
            currentSlide = totalSlides - slidesPerPage;
            slider.style.transform = `translateX(-${currentSlide * (100 / slidesPerPage)}%)`;
            updatePagination();
            updateButtons();
        }
    });
});
