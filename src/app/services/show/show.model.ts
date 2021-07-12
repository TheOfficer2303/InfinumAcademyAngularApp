import { IRawShow } from "src/app/interfaces/rawShow.interface";

export class Show {
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
	id: string

	constructor(mockdata: IRawShow) {
		this.title = mockdata.title;
		this.description = mockdata.description || 'Default description';
		this.averageRating = mockdata.averageRating;
		this.imageUrl = mockdata.imageUrl;
		this.id = mockdata.id
	}

	get ratingInPercentage() {
		return (this.averageRating / 5) * 100 + "%"
	}
	
}