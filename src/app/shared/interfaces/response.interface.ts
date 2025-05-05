export interface IResponse<T> {
	message: string;
	status?: number;
	error?: string;
	data?: T;
}
