import React from 'react';
import Select from 'react-select';

//From https://www.digitalocean.com/community/tutorials/react-react-select
// https://react-select.com/home

const genAO = [
  { label: 'AO1', value: 'AO1' },  
  { label: 'AO2', value: 'AO2' },
    { label: 'AO3', value: 'AO3' },
  
  ];
export default function AOSelector() {
    return (
        <div>
             <Select
        options={genAO}
        onChange={opt => console.log(opt.label, opt.value)}
        blurInputOnSelect={true}
        placeholder={'Select an AssetOwner'}
        autoFocus={true}
        closeMenuOnSelect={true}
      />
        </div>
    )
}


