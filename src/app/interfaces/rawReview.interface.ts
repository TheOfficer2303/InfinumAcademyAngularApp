import { IRawUser } from "./userResponse.interface";

export interface IRawReview {
	id: string;
	show_id: string;
	rating: number;
	comment: string
	user: IRawUser
}