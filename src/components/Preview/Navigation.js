import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

const Nav = styled.div`
	@font-face {
		font-family: ${({ family }) => family};
		src: ${({ family }) => {
			WebFont.load({
				google: {
					families: [family]
				},
				loading: () => {}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

const Navigation = ({ font }) => {
	return (
		<>
			<p className="text-xs font-bold text-colors-gray mb-4">
				NAVIGATION
			</p>
			<Nav family={(font && font.family) || "Sen"}>
				<nav className="flex items-center justify-between flex-wrap bg-colors-orange py-6 px-10 -mx-10">
					<div className="flex items-center flex-shrink-0 text-colors-white mr-6">
						<span className="font-bold text-2xl">usefonts</span>
					</div>
					<div className="block lg:hidden">
						<button className="flex items-center px-3 py-2 border rounded text-colors-white border-teal-400 hover:text-white hover:border-white">
							<svg
								className="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div className="w-full md:block flex-grow lg:flex lg:items-center lg:w-auto hidden">
						
					</div>
				</nav>
			</Nav>
			<div className="h-8"></div>
		</>
	);
};

export default Navigation;
