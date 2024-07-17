


const DataCard = ({ data }) => (
  <div className="card">
    <div>
    <h3>{data.date}</h3>
    <p>Entry date {data.content}</p>
    <p>Entry Time {data.time}</p>
    </div>
  </div>
);

export default DataCard;
