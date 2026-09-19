import Container from "./Container";



const Section = ({ children, title, className, ...rest }) => {
	return (
		<section title={title} className={className} {...rest}>
			<Container>{children}</Container>
		</section>
	);
};

export default Section;
