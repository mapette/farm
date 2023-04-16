import { useState, useEffect } from 'react';
import Button from './Button'

function Test() {

  let [txt, setTxt] = useState('hello word')

    //setTxt('bonjour tout le monde')

  return (
    <div>
      <h1>bonjour</h1>
      <Button
      txt={txt}/>
    </div>
  )

}

export default Test;
