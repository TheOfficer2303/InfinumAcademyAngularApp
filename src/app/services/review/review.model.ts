import { IRawReview } from "src/app/interfaces/rawReview.interface";
import { IRawUser } from "src/app/interfaces/userResponse.interface";

export class Review {
	id: string;
	showId: string;
	rating: number;
	comment: string;
	user: IRawUser;

	constructor(mockData: IRawReview) {
		this.id = mockData.id;
		this.showId = mockData.show_id;
		this.rating = mockData.rating;
		this.comment = mockData.comment
		this.user = mockData.user
	}
}