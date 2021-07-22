export interface IUserResponse {
	user: {
		id: string;
		email: string;
		image_url: string;
	}
}

export interface IRawUser {
	id: string;
	email: string;
	image_url: string;
}