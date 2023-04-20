import { useState, useEffect } from 'react';
import Button from '../tools/Button'
import StockList from './Stocks';
import RecipesList from './RecipesList';

import cl_items from '../class/cl_items'
const lib = require('../lib/lib_divers')

function Main() {

  let allItems = new cl_items.Items_manager()
  let [itemsList, setItemsList] = useState([])
  
  useEffect(() => {
    fetch(lib.ROOT + 'items', lib.optionsREST('GET',))
      .then(response => response.json())
      .then(response => {
        response.forEach(element => { allItems.list.push(new cl_items.Items(element)) })
        setItemsList(allItems.list)
      //  console.log(itemsList)
        // setItemsList(itemsList = response)
      })
  }, [])


  return (
    <div>
      <h1>entrepôts</h1>
      <p />
      <StockList
        itemsList={itemsList}
      />
      <p />
      <h1>productions</h1>
      <p />
      <RecipesList
        itemsList={itemsList}
      />
      <p />
    </div>
  )

}

export default Main;
