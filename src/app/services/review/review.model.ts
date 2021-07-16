import { IRawReview } from "src/app/interfaces/rawReview.interface";

export class Review {
	id: string;
	showId: string;
	rating: number;
	comment: string

	constructor(mockData: IRawReview) {
		this.id = mockData.id;
		this.showId = mockData.showId;
		this.rating = mockData.rating;
		this.comment = mockData.comment
	}
	
}