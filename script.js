const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, I like you too, Fattt";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    // Mendapatkan dimensi tombol "Tidak"
    const noBtnRect = noBtn.getBoundingClientRect();

    // Menghitung nilai maksimum untuk posisi X dan Y agar tombol tetap di dalam layar
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    // Mendapatkan lebar dan tinggi layar Android
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Menghitung nilai maksimum berdasarkan lebar dan tinggi layar Android
    const maxXAndroid = screenWidth - noBtnRect.width;
    const maxYAndroid = screenHeight - noBtnRect.height;

    // Menghasilkan nilai acak untuk posisi X dan Y dalam batas yang diizinkan
    const randomX = Math.min(Math.max(0, Math.floor(Math.random() * maxXAndroid)), maxXAndroid);
    const randomY = Math.min(Math.max(0, Math.floor(Math.random() * maxYAndroid)), maxYAndroid);

    // Menetapkan posisi baru tombol "Tidak"
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});


