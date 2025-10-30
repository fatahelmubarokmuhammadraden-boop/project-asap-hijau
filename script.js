document.getElementById('showTips').addEventListener('click', function() {
    var tips = document.getElementById('tips');
    if (tips.style.display === "none") {
        tips.style.display = "block";
        this.textContent = "Sembunyikan Tips Mitigasi";
    } else {
        tips.style.display = "none";
        this.textContent = "Lihat Tips Mitigasi";
    }
});