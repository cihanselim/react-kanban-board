export default class Storage {
	static setItem(key, value) {
		localStorage.setItem(this._generateKey(key), JSON.stringify(value));
	}

	static getItem(key) {
		return JSON.parse(localStorage.getItem(this._generateKey(key)));
	}

	static removeItem(key) {
		return localStorage.removeItem(this._generateKey(key));
	}

	static _generateKey(key) {
		return `${key}`;
	}
}
