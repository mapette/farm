import { useState, useEffect } from 'react';
import Button from '../tools/Button'
const lib = require('../lib/lib_divers')

function ItemsList() {

  let [itemsList, setItemsList] = useState([])

  useEffect(() => {
    fetch(lib.ROOT + 'items', lib.optionsREST('GET',))
      .then(response => response.json())
      .then(response => {
        console.log(response)
           setItemsList(itemsList = response)
      })
  }, [])


  function showDetails(id) {
    console.log(id)
    // if (props.mode !== 'création') {
    // fetch('http://localhost:3001/items/' + id, lib.optionsREST('get',))
    //   .then(response => response.json())
    // .then(response => {
    //   props.setVarGlob({
    //     ...props.varGlob,
    //     focus: response
    //   })
    //    props.setMode('sélection')
    //   })
    //   }
  }

  return (
    <div className="container no-gutter mx-auto">
      <table className="cadre-15 ">
        <thead>
          <th className='largeur-50'>id</th>
          <th className='largeur-100 gauche'>nom</th>
          <th className='largeur-50 '>qt</th>
          <th className='largeur-100 gauche'>stockage</th>
        </thead>
        <tbody>
          {itemsList.map(it =>
            <tr key={it.id} onClick={() => showDetails(it.id)}>
              <td className=''>{it.id}</td>
              <td className='gauche'>{it.name}</td>
              <td className=''>{it.nb}</td>
              <td className='gauche'>{it.name_stock}</td>
            </tr>
          )}
        </tbody>
      </table>
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
