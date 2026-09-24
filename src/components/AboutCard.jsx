
const AboutCard = ({ title, description, children }) => {
  return (
    <div className="cardShadow rounded-[10px] py-7.5 px-7.5 bg-white hover:bg-primary transition-all cursor-pointer group border border-black/3">
      <div className="overflow-hidden size-31.5 flex items-center justify-center">
        {children}
      </div>
      <div className="px-5">
        <h3 className="pt-2.5 pb-5 text-primary text-xl font-bold group-hover:text-white">
          {title}
        </h3>
        <p className="group-hover:text-white">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
