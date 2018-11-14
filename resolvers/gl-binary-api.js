import { RESTDataSource } from 'apollo-datasource-rest';
import { BinaryStoreEndpoint } from './../config/enviroment'
import errorHandler from './../utils/error-handler';

export class GlBinaryStore extends RESTDataSource {

	constructor() {
		super();
		this.baseURL = BinaryStoreEndpoint;
	}

	async getContainers () {
		return await this.get(`binaries`).catch(errorHandler);
	}

	async getContainer (container) {
		return await this.get(`binaries/${container}`).catch(errorHandler);
    }
    
    async deleteContainer (container) {
		return await this.delete(`binaries/${container}`).catch(errorHandler);
	}

	async getContainerBinary (container, name) {
		return await this.get(`binaries/${container}/download/${name}`).catch(errorHandler);
    }
    
    async getContainerBinariesMetadata (container) {
		return await this.get(`binaries/${container}/files`).catch(errorHandler);
	}

    async deleteContainerBinary (container, file) {
		return await this.get(`binaries/${container}/files/${file}`).catch(errorHandler);
    }
    
	async postContainerBinary (container, file) {
		return await this.post(`binaries/${container}/upload`, file).catch(errorHandler);
	}

}
