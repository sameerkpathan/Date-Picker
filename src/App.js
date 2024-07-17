import "./App.css";
import { sampleData } from "./MockData";
import DataCard from "./DateCard";
import { useState } from "react";



const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filteredData = selectedDate
    ? sampleData.filter((item) => item.date === selectedDate)
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
        <button
        className="box"
          onClick={() => {
            setSelectedDate("");
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
