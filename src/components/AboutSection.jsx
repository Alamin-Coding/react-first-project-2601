import AboutCard from "./AboutCard";
import SectionHeading from "./SectionHeading";
import { IndoorPlantsIcon } from "../icons";
import { PiPottedPlantDuotone } from "react-icons/pi";
import OutdoorPlantsIcon from "../icons/OutdoorPlantsIcon";

const AboutSection = () => {
  console.log(IndoorPlantsIcon);
  return (
    <section className="pt-30">
      <div className="container">
        <div className="grid grid-cols-[476px_1fr] gap-18.75">
          <SectionHeading
            heading={"We Help choose the most suitable plants for you"}
          />
          <p>
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you're looking to brighten up your home or
            send a thoughtful gift.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-22.5">
          <AboutCard
            title="Indoor Plants"
            description={
              "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
            }
          >
            <IndoorPlantsIcon className="group-hover:stroke-white group-hover:fill-white" />
          </AboutCard>
          <AboutCard
            title="Outdoor Plants"
            description={
              "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
            }
          >
            <OutdoorPlantsIcon className="group-hover:stroke-white group-hover:fill-white" />
          </AboutCard>
          <AboutCard
            title="Plants Pots"
            description={
              "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
            }
          >
            <OutdoorPlantsIcon className="group-hover:stroke-white group-hover:fill-white" />
          </AboutCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
