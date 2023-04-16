import { useState, useEffect } from 'react';
import Button from '../tools/Button'

function Test() {

  let [txt, setTxt] = useState('hello word')


  return (
    <div>
      <h1>bonjour</h1>
      <Button
      txt={txt}/>
    </div>
  )

}

export default Test;
