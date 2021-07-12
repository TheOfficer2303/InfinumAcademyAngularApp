export class Show {
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;

	constructor(mockdata: any) {
		this.title = mockdata.title;
		this.description = mockdata.description;
		this.averageRating = mockdata.average_rating;
		this.imageUrl = mockdata.image_url;

	}

	get ratingInPercentage() {
		return (this.averageRating / 5) * 100 + "%"
	}
	
}