class Database {
    constructor() {
      this.data = [];
    }
  
    add(entry) {
      this.data.push(entry);
    }
  
    update(index, newEntry) {
      if (index >= 0 && index < this.data.length) {
        this.data[index] = newEntry;
      }
    }
  
    delete(index) {
      if (index >= 0 && index < this.data.length) {
        this.data.splice(index, 1);
      }
    }
  
    search(query) {
      return this.data.filter(entry => entry.includes(query));
    }
  }
  
  export default new Database();