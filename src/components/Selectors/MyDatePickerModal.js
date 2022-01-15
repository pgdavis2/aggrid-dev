import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';


// From https://hypeserver.github.io/react-date-range/

export function DatePickerModal() {
    const [state, setState] = useState({
        selection: {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        },
        
      });
      

 return (
   <div style={{ display: "flex",width:"200px",marginTop:"2px",marginBottom:"2px"}}>
  <DateRangePicker
  onChange={item => setState({ ...state, ...item })}
  months={1}
  minDate={addDays(new Date(), -1500)}
  maxDate={addDays(new Date(), 0)}
  direction="vertical"
  scroll={{ enabled: true }}
  ranges={[state.selection]}
/>
   </div>
 );
}

export default function MyDatePickerModal() {
 return (
   <div>
     <DatePickerModal />
   </div>
 );
}