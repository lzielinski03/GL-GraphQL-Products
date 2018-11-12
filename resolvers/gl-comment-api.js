import { RESTDataSource } from 'apollo-datasource-rest';
import { baseURL } from './../config/enviroment'

export class GlCommentsAPI extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = baseURL;
	}

	async getComments() {
		return this.get(`Comments`);
	}

	async getAllProductComments(productId) {
		return this.get(`Products/${id}/comments`);
	}

};
