import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RatingStar from "../../components/RatingStar/RatingStar";
import CollapseButton from "../../components/CollapseButton/CollapseButton";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Loading from "../../components/Loading/Loading";

const HouseDetails = () => {
  const { id } = useParams();
  const [selectedHouse, setSelectedHouse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/house.json")
      .then((res) => res.json())
      .then(async (data) => {
        const findingHouse = await data.find((house) => house.id === id);
        setSelectedHouse(findingHouse);
        // if path are not matched
        if (!findingHouse) {
          navigate("/*");
        }
      });
  }, [id, navigate]);

  if (!selectedHouse) {
    return <Loading />;
  }

  return (
    <div className="container minHeight">
      <ImageSlider images={selectedHouse?.pictures} />

      <div className="houseDetailsContainer">
        <div>
          <p className="title">{selectedHouse?.title}</p>
          <p className="location">{selectedHouse?.location}</p>

          <div>
            {selectedHouse?.tags.map((tag, index) => (
              <button key={index} className="tagButton">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="host-container">
          <div className="host">
            <p className="hostName">{selectedHouse?.host.name}</p>
            <img
              src={selectedHouse?.host.picture}
              className="hostPicture"
              alt=""
            />
          </div>
          <RatingStar rating={selectedHouse?.rating} />
        </div>
      </div>

      <div className="houseDetailsCollapse">
        <CollapseButton
          title={"Description"}
          content={selectedHouse?.description}
        />

        <CollapseButton
          title={"Équipements"}
          content={selectedHouse?.equipments}
        />
      </div>
    </div>
  );
};

export default HouseDetails;
