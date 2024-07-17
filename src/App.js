import "./App.css";
import { sampleData } from "./MockData";
import DataCard from "./DateCard";
import { useState } from "react";



const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event)=>{
      setSelectedTime(event.target.value);
  }

  const filteredData = selectedDate
    ? sampleData.filter((item) => item.date === selectedDate && item.time === selectedTime)
    : sampleData;

    
  return (
    <div className="datepicker">
      <h1>Data Picker</h1>
      <div className="inputsection">
        <input
          type="date"
          value={selectedDate}
          className="box"
          onChange={handleDateChange}
          placeholder="Select a date"
        />
        <input 
        type="time"
        value={selectedTime}
        className="box"
        onChange={handleTimeChange}
        placeholder="Select a time"
        />
        <button
        className="box"
          onClick={() => {
            setSelectedDate("");
            setSelectedTime("");
          }}
        >
          Clear Date
        </button>
      </div>

      <div className="card-list">
        {filteredData.map((data) => (
          <DataCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
