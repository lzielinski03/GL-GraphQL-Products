import { RESTDataSource } from 'apollo-datasource-rest';
import { ProductApiEndpoint } from './../config/enviroment'
import errorHandler from './../utils/error-handler';

export class GlProductsAPI extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = ProductApiEndpoint;
	}

	async getProduct(id) {
		return await this.get(`Products/${id}`).catch(errorHandler);
	}

	async getProducts() {
		return await this.get('Products').catch(errorHandler);
	}

	async getProductComments(id) {
		return await this.get(`Products/${id}/comments`).catch(errorHandler);
	}

	async getProductCustomer(id) {
		return await this.get(`Products/${id}/customer`).catch(errorHandler);
	}

	async postProduct(product) {
		return await this.post(`Products`, product).catch(errorHandler);
	}

	async postProductComment(comment) {
		return await this.post(`Products/${comment.productId}/comments`, comment).catch(errorHandler);
	}
	
};
