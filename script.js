const garden = document.getElementById("garden");

//running data
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

//creating card elements (we used to do this in html)
const card = document.createElement("div");
card.className = "card";
const title = document.createElement("h3");
const body = document.createElement("p");
// body.className = "body";
const tags = document.createElement("span");
tags.className = "tag";
const img = document.createElement("img");

//label post element
title.textContent = post.title;
img.src = post.image;
// body.textContent = post.body;
tags.textContent = "#" + post.tags.join(" #");

//
card.appendChild(title);
card.appendChild(img);
// card.appendChild(body);
card.appendChild(tags);

//
garden.appendChild(card);


//======color tags function=========
function colorFromTag(tag) {
    if (tag === "web design") return "yellow";
    if (tag === "coding") return "orange";
    if (tag === "self expression") return "red";
    return "lightgray";
}

card.style.borderTop = "6px solid " + colorFromTag(post.tags[0])

//==========popup function===============
card.addEventListener("click", function(){
    popupTitle.textContent = post.title;
    popupBody.textContent = post.body;
    popup.classList.remove("hidden");
});
}

closePopup.addEventListener("click", function(){
    popup.classList.add("hidden");
});