import React, { useState } from "react";
import addDays from 'date-fns/addDays'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toDate } from "date-fns";


export default function DatePickerRange() {
 const [startDate, setStartDate] = useState(null);
 const [endDate, setEndDate] = useState(null);
 const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  // first month January is 0 not 1 !!
const firstDate=toDate(new Date(2019, 2, 1))

 return (
 
   <div>
     <DatePicker
       isClearable
       selected={startDate}
       selectsRange
       startDate={startDate}
       endDate={endDate}
       onChange={onChange}
       showMonthDropdown
       showYearDropdown
       dropdownMode="select"
       monthsShown={2}
       fixedHeight
       maxDate={addDays(firstDate,-1)}
       placeholderText="Select Start and End Date"
      //inline
     />
     
   </div>
  
 );
}
