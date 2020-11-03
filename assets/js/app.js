const modal = document.querySelector(".modal");
const previews = document.querySelectorAll("xyz");
const original = document.querySelector(".lotitle")
const imgText = document.querySelector(".lotext")

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
    });
});