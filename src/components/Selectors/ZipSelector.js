import Select from 'react-select';
import React, { useState } from "react";
import { zips } from '../../data/zips.json'
 
  export default function ZipSelector() {
    const options = zips
    const [myzip, setmyzip] = useState('');
    
  return (
    <div >
      <Select
        defaultValue={myzip}
        onChange={setmyzip}
        options={options}
      />
    <p>{myzip.zip}</p>
    </div>
    
  );
  
}
