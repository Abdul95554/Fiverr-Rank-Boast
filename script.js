// WhatsApp number (with country code, no + sign)
const whatsappNumber = "923106865295";

// Default message
const defaultMessage = "Hello, I am interested in your Fiverr Rank Boost services.";

// Function to redirect to WhatsApp
function redirectToWhatsApp(message = defaultMessage) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// All Get Started buttons
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    redirectToWhatsApp("Hello, I want to get started with your Fiverr package.");
  });
});

// Contact Us button in navbar
document.querySelectorAll('a[href="#contact"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    redirectToWhatsApp("Hello, I want to contact you for Fiverr Rank Boost services.");
  });
});

// Hero WhatsApp button
document.querySelectorAll('a').forEach(link => {
  if (link.textContent.includes("WhatsApp")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      redirectToWhatsApp("Hello, I found your website and want Fiverr optimization services.");
    });
  }
});
