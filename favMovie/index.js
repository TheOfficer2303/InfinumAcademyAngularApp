let comments = [];
let ratings = [];
let latestId;

let commentsListElement = document.getElementById("comments-list");

function renderAverageRating() {
	const avgRating = document.getElementById("avg-rating");

	let sum = ratings.reduce((a, b) => a + b, 0);

	if (ratings.length === 0) {
		avgRating.textContent = "0";
	} else {
		avgRating.textContent = Math.round((sum / ratings.length) * 100) / 100;
	}
}

function renderComment(comment) {
	const listItem = document.createElement("li");

	const text = document.createElement("p");
	const rating = document.createElement("span");
	const ratingNumber = document.createElement("span");

	const removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.textContent = "Remove";
	removeButton.classList.add("remove-comment");
	removeButton.setAttribute("id", comment.identifier);
	console.log(removeButton);

	text.textContent = comment.text;
	rating.textContent = "/5";
	ratingNumber.textContent = comment.rating;

	ratingNumber.appendChild(rating)

	listItem.appendChild(text)
	listItem.appendChild(ratingNumber)
	listItem.appendChild(removeButton);

	commentsListElement.appendChild(listItem);
	addListenersToRemovers();
	ratings.push(parseInt(comment.rating));
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
	const commentRating = formData.get("rating-number");

	let comment = {
		text: commentText,
		rating: commentRating,
		identifier: getAvailableID()
	}
	console.log(comment)

	comments.push(comment);
	renderComment(comment);
});

function getAvailableID() {
	if (latestId === undefined) {
		latestId = 1;
	} else {
		latestId++;
	}

	return latestId;
}



function addListenersToRemovers() {
	document.querySelectorAll(".remove-comment")
		.forEach(button => {
			button.addEventListener("click", event => {
				if (event.target.className === "remove-comment") {
					removeComment(button);
				}
			})
		});
}


function removeComment(button) {
	//removing comment review from DOM
	commentsListElement.removeChild(button.parentElement);

	//removing comment from comments array
	let commentToRemove;
	for (const comment of comments) {
		if (comment.identifier == button.id) {
			commentToRemove = comment;
		}
	}
	const index = comments.indexOf(commentToRemove);
	if (index > -1) {
		comments.splice(index, 1);
		ratings.splice(index, 1);
	}

	renderAverageRating();

}


renderComments();
renderAverageRating();
addListenersToRemovers();
