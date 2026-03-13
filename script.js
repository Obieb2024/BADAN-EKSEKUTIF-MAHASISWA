// --- LOGIKA TOMBOL MENU ---
function bukaLink(tujuan, event) {
    event.preventDefault(); 
    let url = "";

    if (tujuan === 'drive') {
        url = "https://drive.google.com/drive/folders/191HqI6sCSLokrYuXDEuh0WnqkgA4Cql_?usp=drive_link"; 
    } else if (tujuan === 'gform') {
        url = "https://forms.gle/jQBa676NR5vZuXLf9"; 
    } else if (tujuan === 'admin1') {
        url = "https://wa.me/6285692627679?text=Halo%20Admin%201,%20saya%20ingin%20bertanya%20seputar%20Oprec%20BEM.";
    } else if (tujuan === 'admin2') {
        url = "https://wa.me/6281804495792?text=Halo%20Admin%202,%20saya%20ingin%20bertanya%20seputar%20Oprec%20BEM.";
    }

    if (url !== "" && !url.includes("MASUKKAN_LINK")) {
        window.open(url, '_blank');
    } else {
        alert("Tautan belum disetting panitia.");
    }
} // <-- Kurung kurawal ini yang sebelumnya salah tempat

// --- LOGIKA VISITOR COUNTER (Simulasi Front-End) ---
document.addEventListener("DOMContentLoaded", () => {
    const countElement = document.getElementById("view-count");
    
    // Pastikan elemennya ada di HTML sebelum menjalankan animasi
    if (countElement) {
        // Angka dasar fiktif agar tidak mulai dari 0
        const baseCount = 1250; 

        // Mengecek apakah pengunjung ini sudah pernah membuka web sebelumnya
        let localVisits = localStorage.getItem("bem_page_views");

        if (localVisits) {
            // Jika sudah pernah, tambah 1
            localVisits = parseInt(localVisits) + 1;
        } else {
            // Jika baru pertama kali buka, mulai dari 1
            localVisits = 1; 
        }

        // Simpan kembali ke penyimpanan browser
        localStorage.setItem("bem_page_views", localVisits);

        // Hitung total (Angka Dasar + Kunjungan Lokal)
        const totalViews = baseCount + localVisits;

        // Animasi angka berjalan (Count Up Animation)
        let currentCount = baseCount;
        const duration = 1500; // Waktu animasi 1.5 detik
        const increment = Math.ceil(localVisits / (duration / 30));

        const counterInterval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= totalViews) {
                currentCount = totalViews;
                clearInterval(counterInterval);
            }
            // Format angka dengan titik (contoh: 1.251)
            countElement.innerText = currentCount.toLocaleString('id-ID');
        }, 30);
    }
});
