import { RESTDataSource } from 'apollo-datasource-rest';
import { ProductApiEndpoint } from './../config/enviroment'
import errorHandler from './../utils/error-handler';

export class GlCustomersAPI extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = ProductApiEndpoint;
	}

	async getCustomers() {
		return await this.get(`Customers`).catch(errorHandler);
	}

	async getCustomer(id) {
		return await this.get(`Customers/${id}`).catch(errorHandler);
	}

	async getCustomerProducts(id) {
		return await this.get(`Customers/${id}/products`).catch(errorHandler);
	}

	async getCustomerComments(id) {
		return await this.get(`Customers/${id}/comments`).catch(errorHandler);
	}

	async postCustomer(customer) {
		return await this.post(`Customers`, customer).catch(errorHandler);
	}

}
