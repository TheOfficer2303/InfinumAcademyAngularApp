import { IRawShow } from "src/app/interfaces/rawShow.interface";

export class Show {
	title: string;
	description: string;
	averageRating: number;
	imageUrl: string;
	id: string

	constructor(mockdata: IRawShow) {
		this.title = mockdata.title || 'No title';
		this.description = mockdata.description
		this.averageRating = mockdata.averageRating || 0;
		this.imageUrl = mockdata.imageUrl || 'No image';
		this.id = mockdata.id
	}

	get ratingInPercentage() {
		return (this.averageRating / 5) * 100 + "%"
	}
	
}