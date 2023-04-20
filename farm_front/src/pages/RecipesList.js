import { useState, useEffect } from 'react';
import Button from '../tools/Button'

import cl_pp from '../class/cl_pp'
const lib = require('../lib/lib_divers')

function RecipesList(props) {

  let [ppList, setPpList] = useState([])
  let [recipesList, setRecipesList] = useState([])
    // pp in progress
  let [detailsPP, setDetailsPP] = useState(new cl_pp.Product_place({ id: 0, name: '', rec: '', }))
  let [recipesOnThisPp, setRecipes] = useState([])
  useEffect(() => {
    fetch(lib.ROOT + 'pp', lib.optionsREST('GET',))
      .then(response => response.json())
      .then(response => {
        setPpList(ppList = response)
        console.log('stock',ppList)
      })
    fetch(lib.ROOT + 'recipes', lib.optionsREST('GET',))
      .then(response => response.json())
      .then(response => {
        setRecipesList(recipesList = response)
      })
  }, [])


  function switchStockDetails(pp) {
    if (detailsPP.id == pp.id) { setDetailsPP({ ...detailsPP, id: 0, }) }
    else {
      setDetailsPP(detailsPP = new cl_pp.Product_place({  
        id: pp.id,
        name: pp.name,
        rec: pp.rec,
      }))
      setRecipes(recipesOnThisPp = recipesList.filter(rec => pp.id == rec.id_pp))  
    }
  }

  return (
    <div className="">
      {ppList.map(it =>
        <Button
          txt={it.name + ' ' + it.recipe_in_progress}
          actionToDo={() => switchStockDetails(it)}
        />
      )}
      <div>
        {detailsPP.id > 0 &&
          recipesOnThisPp.map(it =>
            <Button
              txt={it.name}
            />
          )}
      </div>
    </div>
  )

}

  export default RecipesList;

/*

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
