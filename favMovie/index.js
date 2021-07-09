let comments = [];
if (localStorage.getItem("comments") !== undefined) {
	comments = JSON.parse(localStorage.getItem("comments") || "[]");
} 

let latestId = 1;
if (localStorage.getItem("latestId") !== undefined) {
	latestId = JSON.parse(localStorage.getItem("latestId"));
}

let commentRating = 1;

let commentsListElement = document.getElementById("comments-list");

function renderAverageRating() {
	const avgRating = document.getElementById("avg-rating");

	let sum = 0;

	for (const comment of comments) {
		sum += parseInt(comment.rating);
	}

	if (comments.length === 0) {
		avgRating.textContent = "0";
	} else {
		avgRating.textContent = (sum / comments.length).toFixed(2);
	}
}

function renderComment(comment) {
	const listItem = document.createElement("li");
	listItem.classList.add("comment-list-item")

	const text = document.createElement("p");
	const rating = document.createElement("div");

	const removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.textContent = "Remove";
	removeButton.classList.add("remove-comment");
	removeButton.addEventListener("click", function() {
		commentsListElement.removeChild(listItem);

		let index =  comments.indexOf(comment);
		comments.splice(index, 1);

		renderAverageRating();
		localStorage.setItem("comments", JSON.stringify(comments));
	})
	

	text.textContent = comment.text;

	//star rating in comment
	for (let i = 0; i < 5; i++) {
		let starImage = document.createElement("img");
		starImage.classList.add("stars-in-comment")
		if (i < comment.rating) {
			starImage.src = "images/painted-star.png";
		} else {
			starImage.src = "images/empty-star.png";
		}
		rating.appendChild(starImage);
	}
	
	listItem.appendChild(text)
	listItem.appendChild(rating)
	listItem.appendChild(removeButton);

	commentsListElement.appendChild(listItem);
	renderAverageRating();
}

function renderComments() {
	for (const comment of comments) {
		renderComment(comment);
	}
}

const commentFormElement = document.getElementById("comment-form");
commentFormElement.addEventListener("submit", function (event) {
	event.preventDefault();

	const formData = new FormData(commentFormElement);

	const commentText = formData.get("comment-text");
	
	let comment = {
		text: commentText,
		rating: commentRating,
	
	}
	console.log(comment)

	comments.push(comment);
	renderComment(comment);
	localStorage.setItem("comments", JSON.stringify(comments));
});

//star rating
let stars = document.querySelectorAll(".stars")
for (const star of stars) {
	star.addEventListener("click", function() {
		for (let i = 0; i < stars.length; i++) {
			if (stars[i].id <= star.id) {
				stars[i].src = "images/painted-star.png";
			} else {
				stars[i].src = "images/empty-star.png";
			}
		}
		commentRating = parseInt(star.id.substring(5, 6));
	})
}


renderComments();
renderAverageRating();
// addListenersToRemovers();
