// JavaScript code to handle form submission (you can add more functionality as needed)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted! Thank you for contacting us.");
    // You can add code here to send the form data to your backend for processing.
});

// Sample gallery images (add your own image URLs)
const galleryImages = [
    "D:\css_pra\css project\image1.jpg",
    "D:\css_pra\css project\image2.jpg",
    "D:\css_pra\css project\image3.jpg",
    "D:\css_pra\css project\image4.jpg",
    "D:\css_pra\css project\image5.jpg",
];

const gallery = document.querySelector(".image-gallery");
galleryImages.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;
    gallery.appendChild(img);
});
