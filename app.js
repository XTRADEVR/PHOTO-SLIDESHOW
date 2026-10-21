// App.js - Logika Slideshow & PWA Controller
let imagesArray = [];
let currentIndex = 0;
let slideshowInterval = null;
let isPlaying = false;
let hideTimeout = null;

const fileInput = document.getElementById('file-input');
const welcomeScreen = document.getElementById('welcome-screen');
const slideStage = document.getElementById('slide-stage');
const dynamicBg = document.getElementById('dynamic-bg');
const controlsBar = document.getElementById('controls-bar');
const btnPlayPause = document.getElementById('btn-play-pause');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const btnSettings = document.getElementById('btn-settings');

// 1. Tangani pemilihan file dari memori HP
fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
    if (files.length === 0) return;

    // Ubah file lokal menjadi Object URL yang efisien di memori
    imagesArray = files.map(file => URL.createObjectURL(file));
    currentIndex = 0;

    welcomeScreen.style.display = 'none';
    controlsBar.classList.remove('hidden');

    startSlideshow();
});

// 2. Render Slide Aktif
function renderSlide(index) {
    if (imagesArray.length === 0) return;

    // Bersihkan stage sebelumnya
    slideStage.innerHTML = '';

    const imgUrl = imagesArray[index];

    // Atur latar belakang dinamis
    dynamicBg.style.backgroundImage = `url('${imgUrl}')`;

    // Buat elemen gambar baru untuk crossfade
    const img = document.createElement('img');
    img.src = imgUrl;
    img.className = 'slide-image';

    slideStage.appendChild(img);

    // Picu animasi halus
    setTimeout(() => {
        img.classList.add('active');
    }, 50);
}

// 3. Kontrol Slideshow Otomatis (Interval Persis 6 Detik)
function startSlideshow() {
    if (imagesArray.length === 0) return;

    renderSlide(currentIndex);
    isPlaying = true;
    btnPlayPause.textContent = '⏸';

    if (slideshowInterval) clearInterval(slideshowInterval);

    slideshowInterval = setInterval(() => {
        nextSlide();
    }, 6000); // 6 Detik per foto
}

function pauseSlideshow() {
    isPlaying = false;
    btnPlayPause.textContent = '▶';
    clearInterval(slideshowInterval);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    renderSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    renderSlide(currentIndex);
}

// Event Listeners Tombol Kontrol
btnPlayPause.addEventListener('click', () => {
    if (isPlaying) {
        pauseSlideshow();
    } else {
        startSlideshow();
    }
});

btnNext.addEventListener('click', () => {
    nextSlide();
    if (isPlaying) start
