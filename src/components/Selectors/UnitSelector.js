import React from 'react';
import Select from 'react-select';

//From https://www.digitalocean.com/community/tutorials/react-react-select
// https://react-select.com/home

const genUnits = [
  { label: 'RMS 16A', value: 'RMS 16A' },  
  { label: 'Buffalo Ridge Wind Farm', value: 'Buffalo Ridge Wind Farm' },
    { label: 'BGS 7', value: 'BGS 7' },
    { label: 'BGS 8', value: 'BGS 8' },
    { label: 'Barton Wind Farm', value: 'Barton Wind Farm' },
    { label: 'MCG 12', value: 'MCG 12' },
  ];
export default function UnitSelector() {
    return (
        <div>
             <Select
        options={genUnits}
        onChange={opt => console.log(opt.label, opt.value)}
        blurInputOnSelect={true}
        placeholder={'Select a Generator'}
        autoFocus={true}
        closeMenuOnSelect={true}
      />
        </div>
    )
}


