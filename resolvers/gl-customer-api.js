import { RESTDataSource } from 'apollo-datasource-rest';
import { baseURL } from './../config/enviroment'

export class GlCustomersAPI extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = baseURL;
	}

	async getCustomers() {
		return this.get(`Customers`);
	}

	async getCustomer(id) {
		let result;
		try {
			result = await this.get(`Customers/${id}`);
		} catch (e) {
			console.log('customer', e)
		}
		return result;
	}

	async getCustomerProducts(id) {
		let result;
		try {
			result = await this.get(`Customers/${id}/products`);
		} catch (e) {
			console.log('customer', e)
		}
		return result;
	}

	async getCustomerComments(id) {
		let result;
		try {
			result = await this.get(`Customers/${id}/comments`);
		} catch (e) {
			console.log('customer', e)
		}
		return result;
	}

};
