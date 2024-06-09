import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [house, setHouse] = useState();

  useEffect(() => {
    fetch("house.json")
      .then((res) => res.json())
      .then((data) => {
        setHouse(data);
      });
  }, []);

  return (
    <div className="container minHeight">
      {/* home banner */}
      <div className="homeBanner">
        <h1>Chez vous, partout et ailleurs </h1>
        <div className="homeBannerOverlay"></div>
      </div>

      {/* content */}
      {house ? (
        <div className="content">
          {house.map((product) => (
            <Link
              to={`/houseDetails/${product.id}`}
              key={product.id}
              className="productLink"
            >
              <img src={product.cover} alt={product.title} />
              <div className="productInfo">
                <p>{product.title}</p>
                <p>{product.location}</p>
              </div>
              <div className="contentOverlay"></div>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
