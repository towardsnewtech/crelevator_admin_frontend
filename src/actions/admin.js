import axios from 'axios';
import { SERVER_URL } from '../config';

export const signin = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/admin/signin`,
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

export const signup = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/admin/signup`,
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

export const updateInfo = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/admin/updateInfo`,
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

export const changePassword = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/admin/changePassword`,
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

export const resetPassword = (data) => async dispatch => {
    const res = await axios.request(
        `${SERVER_URL}/api/admin/resetPassword`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }
    ).catch(err => {
        console.log('error: ', err);
    });

    if(res && res.data) {
        return res.data;
    }
}

export const forgotPassword = async (data) => {
	const res = await axios.request(
        `${SERVER_URL}/api/admin/forgotpassword`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }
    ).catch(err => {
        console.log('error: ', err);
    });

    if(res && res.data) {
        return res.data;
    }
}

const getCategoryList = () => async dispatch => {
	try {
		const res = await axios.get(`${SERVER_URL}/api/admin/getCategoryList`);

		return res.data;
	} catch(err) {
		console.log(err);
		return ;
	}
}

export const getUserInfo = async (user_id) => {
	try {
		const res = await axios.post(`${SERVER_URL}/api/admin/getUserInfo`, {
			user_id
		});

		return res.data;
	} catch(err) {
		console.log(err);
		return ;
	}
}