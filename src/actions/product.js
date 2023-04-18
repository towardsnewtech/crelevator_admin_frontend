import axios from 'axios';
import { SERVER_URL } from '../config';

export const addCategory = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/category/add`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const getCategories = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/category/getAll`,
			method: 'GET',
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const updateCategory = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/category/update`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const deleteCategory = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/category/delete`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const addSubCategory = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/subcategory/add`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const getSubCategories = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/subcategory/getAll`,
			method: 'GET',
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const updateSubCategory = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/subcategory/update`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const deleteSubCategory = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/subcategory/delete`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const getProductList = async () => {
	try {
		let res = await axios.get(`${SERVER_URL}/api/product/getAll`) ;
		console.log(res.data);
		return res.data;
	} catch(err) {
		console.log(err)
	}
}

export const addProduct = async (product) => {
	try {
		let res = await axios.post(`${SERVER_URL}/api/product/addProduct`, product);
		return res.data;
	} catch(err) {
		console.log(err);
		return ;
	}
}

export const deleteProduct = async (id) => {
	try {
		let res = await axios.post(`${SERVER_URL}/api/product/deleteProduct`, {id});
		return res.data;
	} catch(err) {
		console.log(err) ;
		
	}
}