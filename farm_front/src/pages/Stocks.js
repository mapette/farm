import { useState, useEffect } from 'react';
import Button from '../tools/Button'

import cl_stock from '../class/cl_stocks'
const lib = require('../lib/lib_divers')



function ItemsList(props) {
  // console.log('props',props.itemsList)

  //let allStocks = new cl_stock.Stocks_manager()
  // rempli correctement dans le useEffect et vider aussitôt je sais pas pourquoi
  // il faut donc passer obligatoirement par un useState
  // s'il n'est pas permanent dans le composant, il n'a aucun intérêt
  let [stocksList, setStocksList] = useState([])
  let [details, setDetails] = useState(new cl_stock.Stocks({
    id: 0,        // stock in progress
    name: '',
    capacity: '',
  }))
  let [itemsOnThisStock, setStock] = useState([])

  useEffect(() => {
    fetch(lib.ROOT + 'stocks', lib.optionsREST('GET',))
      .then(response => response.json())
      .then(response => {
        setStocksList(stocksList = response)
      })
  }, [])

  function switchStockDetails(st) {
    if (details.id == st.id) { setDetails({ ...details, id: 0, }) }
    else {
      setDetails(details = new cl_stock.Stocks({    // update details
        id: st.id,
        name: st.name,
        capacity: st.capacity
      }))
      setStock(itemsOnThisStock = props.itemsList.filter(it => st.id === it.id_stock))  //update itemsList
    }
  }

  return (
    <div className="">
      {stocksList.map(it =>
          <Button
            txt={it.name}
            actionToDo={() => switchStockDetails(it)}
          />
      )}
      {details.id > 0 &&
        <div>
          <h3>Détail de : {details.name} - capacité  {details.capacity}  </h3>
          <table className="cadre-15 ">
            <thead>
              <th className='largeur-100 gauche'>nom</th>
              <th className='largeur-50 '>qt</th>
            </thead>
            <tbody>
              {itemsOnThisStock.map(it =>
                <tr key={it.id}>
                  <td className='gauche'>{it.name}</td>
                  <td className=''>{it.nb}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      }

    </div>
  )

}

export default ItemsList;

/*
        <tbody>
          {props.prestaList.map(presta =>
            <tr key={presta.presta_id} onClick={() => showDetails(presta.presta_id)}>
              <td className=''>{presta.id}</td>
              <td className='gauche'>{presta.presta_nom}</td>
              <td className='gauche'>{presta.presta_libelle}</td>
            </tr>
          )}
        </tbody>




        */
