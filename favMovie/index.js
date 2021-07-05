let comments = [];

let comment = {
    text:"",
    rating:"2"
}

let commentsListElement = document.getElementById("comments-list");
function renderComments(comment) {
    const listItem = document.createElement("li");

    commentsListElement.appendChild(listItem);
}

const commentFormElement = document.getElementById("comment-form");

commentFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

});

for (const comment of comments) {
    renderComments(comment);
}
