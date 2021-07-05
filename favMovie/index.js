let comments = [];

let commentsListElement = document.getElementById("comments-list");
function renderComment(comment) {
    const listItem = document.createElement("li");
    
    const text = document.createElement("p");
    const rating = document.createElement("p");

    text.textContent = comment.text;
    rating.textContent = comment.rating;

    listItem.appendChild(text)
    listItem.appendChild(rating)

    commentsListElement.appendChild(listItem);
}

const commentFormElement = document.getElementById("comment-form");

commentFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(commentFormElement);

    const commentText = formData.get("comment-text");
    const commentRating = formData.get("rating-number");

    let comment = {
        text: commentText,
        rating: commentRating
    }
    console.log(comment)

    comments.push(comment);
    renderComment(comment);
});

for (const comment of comments) {
    renderComment(comment);
}
