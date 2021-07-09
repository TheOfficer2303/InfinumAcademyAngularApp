export class Show {
	title: string;
	description: string;
	average_rating: number;
	image_url: string;

	constructor(mockdata: any) {
		this.title = mockdata.title;
		this.description = mockdata.description;
		this.average_rating = mockdata.average_rating;
		this.image_url = mockdata.image_url;

	}

	ratingInPercentage() {
		return (this.average_rating / 10) * 100 + "%"
	}
	
}