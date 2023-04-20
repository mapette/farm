class Stocks {
    constructor(result) {
        this.id = result.id
        this.name = result.name
        this.capacity = result.capacity
        this.Items = []
    }

    // keepGoodItems(allItems){
    //  //   console.log('allItems', allItems)
    //     this.Items = allItems
    //         .filter(it => this.id === it.id_stock)
    // }

}

class Stocks_manager {
    constructor() { this.list = [] }

    // determinateActiveStock(){
    //     return  stocksList.filter(it => st.id === it.id)
    // }

    // static cloneListe(listeOriginale) {
    //     let listeClonee = new Inc_manager()
    //     for (var i = 0; i < listeOriginale.length; i++) {
    //         listeClonee.liste[i] = listeOriginale[i];
    //     }
    //     return listeClonee.liste
    // }

    // onlyOld() {
    //     this.liste = this.liste
    //         .filter(f => time.oldIncident(f.inc_cloture_date))
    // }


    // filterEnAttente() {
    //     this.liste = this.liste
    //         .filter(f => f.inc_affect_date === null)
    //         .sort((x, y) => {
    //             if (x.inc_signal_date < y.inc_signal_date) { return -1 }
    //             if (x.inc_signal_date > y.inc_signal_date) { return 1 }
    //             return 0
    //         })
}

module.exports = {
    Stocks,
    Stocks_manager,
  }
