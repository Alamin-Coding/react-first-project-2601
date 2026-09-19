import Button from "./Button";
import Container from "./Container";
import Section from "./Section";
import playicon from "../assets/play-icon.svg";
import bannerImage from "../assets/banner.jpg";

const Banner = () => {
	const styles = {
		background: `url(${bannerImage}) no-repeat center/cover`,

		paddingTop: "220px",
		paddingBottom: "300px",
	};
	return (
		<Section style={styles} title={"Title"} className="bg-red-400">
			<div className="text-center">
				<h2 className="text-white text-[64px]">Beauty Delivered to You</h2>
				<p className="py-[37px] max-w-[787px] mx-auto text-white font-medium leading-[1.4]">
					Nature's beauty is just a click away with our online flower and plant
					shop. We offer a wide variety of flowers that will bring a touch of
					nature to your home!
				</p>

				<div className="flex items-center justify-center gap-6">
					<Button
						className={"px-12.5 bg-primary border-primary border"}
					>
						Book Now
					</Button>
					<Button type="button" className={"px-8.75"}>
						<img src={playicon} alt="playicon" /> Watch Video
					</Button>
                    
				</div>
			</div>
		</Section>
	);
};

export default Banner;
