// === Fitur 1: Memutar Lagu & Memulai Hujan Kelopak Bunga ===
document.getElementById('magicButton').addEventListener('click', function() {
    const stage = document.getElementById('petal-stage');
    const song = document.getElementById('romanticSong');
    
    // Putar musik romantis secara halus
    song.volume = 0.6; // Volume diatur sedang (60%) agar syahdu
    song.play().catch(error => {
        console.log("Pemutaran musik tertahan oleh izin browser:", error);
    });
    
    // Sembunyikan tombol
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
    // Hilangkan kelas active dari foto saat ini
    slides[currentSlide].classList.remove('active');
    
    // Pindah ke indeks foto berikutnya (kembali ke 0 jika sudah di foto terakhir)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Tambahkan kelas active ke foto yang baru
    slides[currentSlide].classList.add('active');
}

// Menjalankan slideshow otomatis setiap 3000ms (3 detik)
setInterval(nextSlide, 3000);