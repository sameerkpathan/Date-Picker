


const DataCard = ({ data }) => (
  <div className="card">
    <div>
    <h3>{data.date}</h3>
    <p>{data.content}</p>
    </div>
  </div>
);

export default DataCard;
