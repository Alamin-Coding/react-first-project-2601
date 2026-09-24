import Button from "./Button";
import image_1 from "../assets/offer-image.png";
import { GoHeart, GoHeartFill } from "react-icons/go";

const OfferCard = () => {
  return (
    <div>
      <div className="overflow-hidden relative h-[250px]">
        <img src={image_1} alt="image" className="w-full object-cover" />
        <div className="size-7 rounded-full flex items-center justify-center bg-white hover:bg-gray-300 absolute top-5 right-5">
          <GoHeartFill />
          {/* <GoHeart/> */}
        </div>
      </div>

      <div>
        <div>
          <a href="#">Cactus Plant</a>
          <p>
            ( <span className="line-through">$10</span> ) $8
          </p>
        </div>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};

export default OfferCard;
