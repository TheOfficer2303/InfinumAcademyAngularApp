import { IRawShow } from "src/app/interfaces/rawShow.interface";

export class Show {
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
	id: string;
	noOfReviews: number;

	constructor(mockdata: IRawShow) {
		this.title = mockdata.title || 'No title';
		this.description = mockdata.description
		this.averageRating = mockdata.average_rating || 0;
		this.imageUrl = mockdata.image_url || 'No image';
		this.id = mockdata.id
		this.noOfReviews = mockdata.no_of_reviews
	}

	get ratingInPercentage(): string {
		return (this.averageRating / 5) * 100 + "%"
	}
}