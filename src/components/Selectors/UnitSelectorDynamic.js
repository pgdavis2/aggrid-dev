import Select from 'react-select';
import { UNITS } from '../../data/names.json'

import React, { useState, useEffect, Component } from "react";




export default function UnitSelectorDynamic({ myunit, setmyunit }) {
  return (
    <div className="UnitSelectorDynamic">
      <Select
        name="unit"
        defaultValue={myunit.map(unit => ({ label: unit, value: unit }))}
        onChange={(e) => {
          if (Array.isArray(e)) {
            setmyunit(e.map(row => row.value))
          } else {
            setmyunit([])
          }
        }}
        options={UNITS}
        isMulti={true}
        closeMenuOnSelect={false}
      />
      <p>{myunit.Unit}</p>
    </div>

  );

}
