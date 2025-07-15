// Typing animation for title
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("header h1");
  const fullText = title.textContent;
  title.textContent = "";
  let index = 0;

  function typeWriter() {
    if (index < fullText.length) {
      title.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 60);
    }
  }

  typeWriter();

  // Fade-in sections
  const serviceItems = document.querySelectorAll("ol > li, ul > li");
  serviceItems.forEach((item, idx) => {
    item.style.opacity = 0;
    item.style.transition = "opacity 0.6s ease " + idx * 100 + "ms";
    setTimeout(() => {
      item.style.opacity = 1;
    }, 300 + idx * 100);
  });

  // Floating call button
  const callButton = document.createElement("a");
  callButton.href = "tel:+9779824771679";
  callButton.innerHTML = "📞 Call Us";
  callButton.className = "call-button";
  document.body.appendChild(callButton);
});
