// ==========================================
// 1. FUNGSI UNTUK MEMBUKA LINK
// ==========================================
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
    } else if (tujuan === 'grupwa') { 
        url = "https://chat.whatsapp.com/BGCtk0A0nlZICvEs70mQRK?mode=gi_t"; 
    } else if (tujuan === 'ig') {
        url = "https://www.instagram.com/bemkema.polsub?igsh=MThsZmV5aDVud3FhaQ==";
    }

    if (url !== "" && !url.includes("MASUKKAN_LINK")) {
        window.open(url, '_blank');
    } else {
        alert("Tautan belum disetting panitia.");
    }
}

// ==========================================
// 2. LOGIKA VISITOR COUNTER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const countElement = document.getElementById("view-count");
    
    if (!countElement) return;

    const baseCount = 1; 
    
    // Saya ganti nama key-nya jadi "bem_views_2026" untuk mereset memori browser kamu
    // kalau-kalau sebelumnya sempat error dan menyimpan nilai "NaN" (Not a Number)
    let localVisits = localStorage.getItem("bem_views_2026");

    if (localVisits) {
        localVisits = parseInt(localVisits) + 1;
    } else {
        localVisits = 1; 
    }

    localStorage.setItem("bem_views_2026", localVisits);

    const totalViews = baseCount + localVisits;

    let currentCount = baseCount;
    const duration = 1500; 
    const increment = Math.max(1, Math.ceil(localVisits / (duration / 30)));

    const counterInterval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= totalViews) {
            currentCount = totalViews;
            clearInterval(counterInterval);
        }
        countElement.innerText = currentCount.toLocaleString('id-ID');
    }, 30);
});
