// Fungsi ketika tombol 'Baca Selengkapnya' diklik
function bacaSelengkapnya(judulBerita) {
    alert("Anda sedang membuka detail berita: " + judulBerita + "\n\nFitur detail artikel lengkap bisa Anda kembangkan menggunakan database!");
}

// Efek Smooth Scroll untuk Navigasi Menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
