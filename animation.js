document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slidshowimages img");
    let currentImageIndex = 0;
  
    function showNextImage() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
    }
  
    setInterval(showNextImage, 2000); // Change slide every 3 seconds (adjust as needed)
  });

  // Assuming you have a phone number to call
var phoneNumber = "123456789";

document.getElementById("logo").addEventListener("click", function() {
  window.location.href = "tel:" + phoneNumber;
});

