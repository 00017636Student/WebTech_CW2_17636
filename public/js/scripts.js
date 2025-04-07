document.addEventListener("DOMContentLoaded", () => { //This function sends confirmation message before deleting
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

document.addEventListener('DOMContentLoaded', () => { //This is a function for auto-resizing textarea in form field for full review about book if the text will be too long
  const textarea = document.querySelector('#bookOpinion textarea');
  
  if (textarea) {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });

    textarea.dispatchEvent(new Event('input'));
  }
});