import React from "react";

const Button = ({ TagName = "button", className="border-white", children, ...props }) => {
	return (
		<TagName
			{...props}
			className={`py-3  border  cursor-pointer text-white font-bold inline-flex items-center gap-3 ${className}`}
		>
			{children}
		</TagName>
	);
};

export default Button;
