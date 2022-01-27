import Select from 'react-select';
import { UNITS } from '../../data/names.json'

import React, { useState, useEffect, Component } from "react";




export default function UnitSelectorDynamic({ myunit, setmyunit }) {
  return (
    <div className="UnitSelectorDynamic">
      <Select
        name="unit"
        onChange={(e) => console.log(e)}
        options={UNITS}
        isMulti={true}
      />
      <p>{myunit.Unit}</p>
    </div>

  );

}
