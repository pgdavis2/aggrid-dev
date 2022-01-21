import Select from 'react-select';
import { UNITS } from '../../data/dart_pl_names.json'

import React, { useState, useEffect,Component } from "react";




  export default function UnitSelectorDynamic() {
    const options = UNITS
    const [myunit, setmyunit] = useState('');
    //console.log(myunit)
  return (
    <div className="UnitSelectorDynamic">
      <Select
        defaultValue={myunit}
        onChange={setmyunit}
        options={options}
      />
    <p>{myunit.Unit}</p>
    </div>
    
  );
  
}
