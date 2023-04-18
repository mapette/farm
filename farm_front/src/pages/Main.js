import { useState, useEffect } from 'react';
import Button from '../tools/Button'
import ItemsList from './ItemsList';
import RecipesList from './RecipesList';

function Main() {

  let [txt, setTxt] = useState('hello word')

  return (
    <div>
      <h1>bonjour</h1>
      <p />
      <p />
      <ItemsList />
      <p />
      <p />
      <RecipesList />
      <p />
      <Button
        txt={txt} />
    </div>
  )

}

export default Main;
