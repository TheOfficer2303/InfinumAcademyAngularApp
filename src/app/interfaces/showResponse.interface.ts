import { IRawShow } from "./rawShow.interface";

export interface IShowsResponse {
	shows: Array<IRawShow>
}

export interface ISingleShowResponse {
	show: IRawShow;
}