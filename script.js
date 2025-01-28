document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    };

    let currentSlideIndex = 0;

    nextButton.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(track, slides[currentSlideIndex - 1], slides[currentSlideIndex]);
    });

    prevButton.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        moveToSlide(track, slides[currentSlideIndex + 1], slides[currentSlideIndex]);
    });
});
