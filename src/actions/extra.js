import axios from 'axios';
import { SERVER_URL } from '../config';

export const addVideo = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/video/add`,
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

export const addFaq = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/faq/add`,
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

export const addNews = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/news/add`,
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

export const addPdf = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/pdf/add`,
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

export const getVideos = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/video/get`,
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

export const getFaqs = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/faq/get`,
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

export const getNews = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/news/get`,
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

export const getPdfs = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/pdf/get`,
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

export const deleteVideo = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/video/delete`,
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

export const deleteFaq = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/faq/delete`,
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

export const deleteNews = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/news/delete`,
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

export const deletePdf = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/extras/pdf/delete`,
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