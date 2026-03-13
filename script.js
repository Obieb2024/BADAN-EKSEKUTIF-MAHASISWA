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
}

// --- LOGIKA VISITOR COUNTER ---
document.addEventListener("DOMContentLoaded", () => {
    const countElement = document.getElementById("view-count");
    
    if (countElement) {
        const baseCount = 1250; 
        let localVisits = localStorage.getItem("bem_page_views");

        if (localVisits) {
            localVisits = parseInt(localVisits) + 1;
        } else {
            localVisits = 1; 
        }

        localStorage.setItem("bem_page_views", localVisits);

        const totalViews = baseCount + localVisits;
        let currentCount = baseCount;
        const duration = 1500; 
        const increment = Math.ceil(localVisits / (duration / 30));

        const counterInterval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= totalViews) {
                currentCount = totalViews;
                clearInterval(counterInterval);
            }
            countElement.innerText = currentCount.toLocaleString('id-ID');
        }, 30);
    }
});
