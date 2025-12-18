// Fungsi untuk toggle tampilkan atau sembunyikan fitur
function toggleFitur(fiturId) {
    var fiturContent = document.getElementById(fiturId);
    if (fiturContent.style.display === "block") {
        fiturContent.style.display = "none";
    } else {
        fiturContent.style.display = "block";
    }
}
