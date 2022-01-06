import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function DatePickerRange2() {
 const [startDate, setStartDate] = useState(null);
 const [endDate, setEndDate] = useState(null);
 const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

 return (
   <div >
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
       
      placeholderText="Select a prior date range"
    //    inline
     />
   </div>
 );
}

export default function TableDatePicker2() {
 return (
   <div style={{ display: "flex",width:"200px",marginTop:"5px",marginBottom:"5px",fontSize:"18px"}}>
     <DatePickerRange2 />
   </div>
 );
}