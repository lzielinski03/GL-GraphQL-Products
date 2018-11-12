import { RESTDataSource } from 'apollo-datasource-rest';
import { baseURL } from './../config/enviroment'

export class GlProductsAPI extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = baseURL;
	}

	async getProduct(id) {
		const result = await this.get(`Products/${id}`);
		return result;
	}

	async getProducts() {
		return this.get('Products');
	}

	async getProductComments(id) {
		return this.get(`Products/${id}/comments`);
	}

	async getProductCustomer(id) {
		return this.get(`Products/${id}/customer`);
	}
};
