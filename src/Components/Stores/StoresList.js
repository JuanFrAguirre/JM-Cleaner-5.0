import stores from "../../assets/data/storesData";
import Store from "../Store/Store";
import "./Stores.scss";

const StoresList = () => {
  const { farmacias } = stores;

  return (
    <div className="container">
      <div className="row">
        <div className="navbar navbar-dark bg-secondary justify-content-center mb-3">
          <h1 className="strong">Farmacias</h1>
        </div>
        {farmacias.map((provincia, key) => (
          <div key={key}>
            <h2 className="strong text-secondary text-center mb-3">
              {Object.keys(provincia)}
            </h2>
            {provincia[Object.keys(provincia)].map((red, key) => (
              <div key={key}>
                <h3 className="text-primary text-center mb-3">
                  <strong>{Object.keys(red)}</strong>
                </h3>
                <div className="stores">
                  {red[Object.keys(red)].map((local) => (
                    <Store store={local} key={local.id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <h1>Opticas</h1>
      </div>
    </div>
  );
};

export default StoresList;
