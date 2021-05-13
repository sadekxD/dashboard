import React from "react";
import styled from "styled-components";
import profile from "../../images/profile.jpg";

const Header = () => {
	return (
		<StyledHeader className="h-16 bg-blue-500 flex items-center justify-end">
			<div className="header px-4 sm:px-8">
				<div className="flex items-center">
					<img
						className="h-8 w-8 rounded-full object-cover"
						src={profile}
						alt="profile"
					/>
					<p className="mr-4 font-medium text-white">Sadek Irfan</p>
				</div>
			</div>
		</StyledHeader>
	);
};

const StyledHeader = styled.div``;

export default Header;
