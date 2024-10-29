"use strict";

// footer button

document.addEventListener("DOMContentLoaded", () => {
    const footerImages = document.querySelectorAll(
        "#footer-images-container a img"
    );

    footerImages.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.filter = "sepia(1) saturate(7) hue-rotate(90deg)"; // Adjust for desired green
            console.log("Mouse entered:", img); // Log to confirm
        });

        img.addEventListener("mouseleave", () => {
            img.style.filter = ""; // Reset to original state
            console.log("Mouse left:", img); // Log to confirm
        });
    });
});