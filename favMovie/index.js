let comments = [];

let commentsListElement = document.getElementById("comments-list");
function renderComment(comment) {
    const listItem = document.createElement("li");

    commentsListElement.appendChild(listItem);
}

const commentFormElement = document.getElementById("comment-form");

commentFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const commentText = document.getElementById("comment-text");
    const commentRating = document.getElementById("rating-number");

    let comment = {
        text: commentText,
        rating: commentRating
    }
    console.log("Submitano")

    comments.push(comment);
    renderComment(comment);
});

for (const comment of comments) {
    renderComment(comment);
}
