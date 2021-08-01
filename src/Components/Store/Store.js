import "./Store.scss";

const Store = ({ store }) => {
  return (
    <div className="store card border-info">
      <div className="card-header">{store.address}</div>
      <div className="card-body">
        <div className="card-title text-primary">
          <h4>{store.address}</h4>
        </div>
        <div className="card-text">
          <h5>{store.phone}</h5>
        </div>
        <div className="card-text">
          <p>{store.loc}</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
