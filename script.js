// === Fitur 1: Memutar Lagu & Memulai Hujan Kelopak Bunga ===
document.getElementById('magicButton').addEventListener('click', function() {
    const stage = document.getElementById('petal-stage');
    const song = document.getElementById('romanticSong');
    
    // Memastikan audio mengulang dari awal dan memutarnya
    song.currentTime = 0;
    song.volume = 0.7; // Atur volume (70%)
    
    // Memaksa peramban untuk memutar audio lokal
    const playPromise = song.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Musik berhasil diputar!");
        }).catch(error => {
            console.log("Gagal memutar musik secara otomatis: ", error);
            
            // Solusi otomatis tanpa alert kaku: 
            // Jika browser memblokir, musik akan otomatis berputar begitu Ilma menyentuh bagian mana saja di layar
            const playOnSubsequentClick = () => {
                song.play();
                document.body.removeEventListener('click', playOnSubsequentClick);
            };
            document.body.addEventListener('click', playOnSubsequentClick);
        });
    }
    
    // Sembunyikan tombol dengan transisi lembut
    this.style.opacity = '0';
    setTimeout(() => this.style.display = 'none', 300);

    // Hujani layar dengan kelopak bunga
    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            createPetal(stage);
        }, i * 200);
    }
});

function createPetal(stage) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    petal.style.left = Math.random() * 95 + '%';

    const size = Math.random() * 8 + 14; 
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    const shades = ['#f7cfc6', '#fadbd4', '#eab5a9', '#fff0ed', '#f2beaf'];
    petal.style.backgroundColor = shades[Math.floor(Math.random() * shades.length)];

    const duration = Math.random() * 3 + 5;
    petal.style.animationDuration = duration + 's';

    petal.addEventListener('click', function() {
        this.style.transform = 'scale(0) rotate(180deg)';
        this.style.transition = 'all 0.4s ease-out';
        this.style.opacity = '0';
        setTimeout(() => this.remove(), 400);
    });

    setTimeout(() => {
        if (petal.parentNode) {
            petal.remove();
        }
    }, duration * 1000);

    stage.appendChild(petal);
}

// === Fitur 2: Slideshow Foto Otomatis (Berganti Setiap 3 Detik) ===
const slides = document.querySelectorAll('.photo-slider .slide');
let currentSlide = 0;

function nextSlide() {
    // Pastikan elemen slide ditemukan sebelum memanipulasi class
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}

// Menjalankan slideshow otomatis setiap 3 detik
setInterval(nextSlide, 3000);
