import OfferCard from "./OfferCard";
import SectionHeading from "./SectionHeading";

const OffersSection = () => {
  return (
    <section className="pt-30">
      <div className="container">
        <div className="text-center pb-15">
          <SectionHeading heading={"What we offer to you"} />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
