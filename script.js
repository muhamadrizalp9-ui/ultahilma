document.getElementById('magicButton').addEventListener('click', function() {
    const stage = document.getElementById('petal-stage');
    
    // Sembunyikan tombol dengan transisi lembut
    this.style.opacity = '0';
    setTimeout(() => this.style.display = 'none', 300);

    // Hujani layar dengan kelopak estetis
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            createPetal(stage);
        }, i * 250); // Muncul bergantian dengan ritme natural
    }
});

function createPetal(stage) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // Posisi horizontal acak
    petal.style.left = Math.random() * 95 + '%';

    // Ukuran acak yang pas dan estetik (15px sampai 25px)
    const size = Math.random() * 10 + 15;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    // Variasi warna pastel mawar yang lembut
    const shades = ['#e8c5be', '#f2d6d0', '#dfb2a9', '#fcece9', '#e0b3aa'];
    petal.style.backgroundColor = shades[Math.floor(Math.random() * shades.length)];

    // Kecepatan meluncur jatuh yang rileks (5 sampai 9 detik)
    const duration = Math.random() * 4 + 5;
    petal.style.animationDuration = duration + 's';

    // INTERAKSI: Kelopak bisa disentuh/diklik untuk menghilang
    petal.addEventListener('click', function() {
        this.style.transform = 'scale(0) rotate(180deg)';
        this.style.transition = 'all 0.4s ease-out';
        this.style.opacity = '0';
        setTimeout(() => this.remove(), 400);
    });

    // Bersihkan elemen jika sudah jatuh melewati layar bawah
    setTimeout(() => {
        if (petal.parentNode) {
            petal.remove();
        }
    }, duration * 1000);

    stage.appendChild(petal);
}