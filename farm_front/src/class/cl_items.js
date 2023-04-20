class Items {
    constructor(result) {
        this.id = result.id
        this.name = result.name
        this.nb = result.nb
        this.id_stock = result.id_stock
    }
}

class Items_manager {
    constructor() { this.list = [] }
    
    


}

module.exports = {
    Items,
    Items_manager,
  }
