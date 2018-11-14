import { RESTDataSource } from 'apollo-datasource-rest';
import { ProductApiEndpoint } from './../config/enviroment'

export class GlCommentsAPI extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = ProductApiEndpoint;
	}

	async getComments() {
		return this.get(`Comments`);
	}

	async getAllProductComments(productId) {
		return this.get(`Products/${id}/comments`);
	}

};
