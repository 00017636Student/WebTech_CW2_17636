document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".BtnDelete");
  
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
  
        const deleteUrl = button.getAttribute("href");
  
        const isConfirmed = confirm("Are you sure you want to delete this review?");
        if (isConfirmed) {
          window.location.href = deleteUrl;
        }
    }
)})})

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('#bookOpinion textarea');
  
  if (textarea) {
    // Auto-resize on input
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });

    // Trigger initial resize
    textarea.dispatchEvent(new Event('input'));
  }
});