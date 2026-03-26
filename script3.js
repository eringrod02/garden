document.querySelectorAll(".ppy").forEach((img, index) => {
    img.addEventListener("click", () => {
        const post = posts[index];

        popupTitle.textContent = post.title;
        popupBody.textContent = post.body;
        popup.classList.remove("hidden");
    });
});

closePopup.addEventListener("click", function(){
    popup.classList.add("hidden");
});