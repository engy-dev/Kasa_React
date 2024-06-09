import banner from "../../assets/aboutBanner.png";
import CollapseButton from "../../components/CollapseButton/CollapseButton";
const About = () => {
  return (
    <div className="container minHeight">
      <div className="aboutBanner">
        <img src={banner} alt="" />
        <div className="aboutBannerOverlay"></div>
      </div>
      <div className="aboutCollapse">
        <CollapseButton
          title={"Fiabilité"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur autem architecto sequi aliquid consequuntur facere sint"
          }
        />
        <CollapseButton
          title={"Respect"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur autem architecto sequi aliquid consequuntur facere sint"
          }
        />
        <CollapseButton
          title={"Service"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur autem architecto sequi aliquid consequuntur facere sint"
          }
        />
        <CollapseButton
          title={"Sécurité"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur autem architecto sequi aliquid consequuntur facere sint"
          }
        />
      </div>
    </div>
  );
};

export default About;
