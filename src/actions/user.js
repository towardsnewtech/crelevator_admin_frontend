import axios from 'axios';
import { SERVER_URL } from '../config';

export const getAllUsers = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/getAll`,
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

export const createUser = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/signup`,
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

export const deleteUser = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/delete`,
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