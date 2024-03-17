import styled from "styled-components";

export const Box = styled.div`
	padding:  3%;
	background: #685858;
	
	width: 95%;
	
		

	@media (max-width: 800px) {
		margin:0px;
	}
`;

export const FooterContainer = styled.div`
display: flex;
flex-direction:column;
	justify-content:center;
	flex-wrap:wrap;
	

	
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 40px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #C8C0BD;
	
	font-size: 15px;
	text-decoration: none;

	&:hover {
		color: #000000;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 18px;
	color: #C8C0BD;
	margin-bottom: 10px;
	font-weight: bold;
`;
