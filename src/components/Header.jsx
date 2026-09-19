import Button from "./Button";

const Header = () => {
	return (
		<nav className="bg-transparent py-9.25 absolute top-0 left-0 w-full">
			<div className="container">
				<div className="flex justify-between gap-6 items-center">
					<div className="">
						<a href="#">
							<img src="logo.svg" alt="Logo" />
						</a>
					</div>

					<div className="flex items-center justify-end gap-16.75">
						<ul className="flex items-center gap-12.5">
							<li>
								<a
									className="font-lato text-white text-[18px] after"
									href="#"
								>
									Home
								</a>
							</li>
							<li>
								<a className="font-lato text-white text-[18px] after" href="#">
									About Us
								</a>
							</li>
							<li>
								<a className="font-lato text-white text-[18px]" href="#">
									Planters
								</a>
							</li>
							<li>
								<a className="font-lato text-white text-[18px]" href="#">
									Contact
								</a>
							</li>
						</ul>
						<Button className="px-12.5" TagName="a" href="#" target="_blank">
							Call Us
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
