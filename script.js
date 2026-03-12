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