module.exports= class Repository {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

   async getByUserNameAndPassword(username, password) {
        return await this.data.find(item =>  item.userName === username && item.password === password);
    }

    getAll() {
        return this.data;
    }

    update(id, newItem) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data[index] = newItem;
        }
    }

    delete(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}