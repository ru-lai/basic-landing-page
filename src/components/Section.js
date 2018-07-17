import React from 'react';
import styled from 'styled-components';
import sizes from 'point-breaks';

const IconHolder = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	flex-wrap: wrap;
	max-width: 1140px;
`;

const IconTitle = styled.h3`
	font-size: 28px;
	text-align: center;
	font-weight: 700;
	line-height: 12px;
`;

const IconDesc = styled.p`
	font-size: 20px;
	font-weight: 300;
	line-height: 30px;
	text-align: center;
`;

const IconDiv = styled.div`
	max-width: 320px;
	padding: 20px 0;
`;

const IconPicDiv = styled.div`
	text-align: center;
`;

const IconSection = ({className}) => {
	return (
		<section className={className}>
			<IconHolder>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>These are words which will go in the first paragraph</IconDesc>
				</IconDiv>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>Use these words from the second paragrapn wisely</IconDesc>
				</IconDiv>
				<IconDiv>
					<IconPicDiv>picture</IconPicDiv>
					<IconTitle>Title</IconTitle>
					<IconDesc>I love cake from the depths of my belly</IconDesc>
				</IconDiv>
			</IconHolder>
		</section>
	);
}

export const StyledIconSection = styled(IconSection)`
	padding: 7rem 0;
`;

export const Section = styled.section``;

export const SplitDiv = styled.div`
	display: flex;
	flex-flow: row wrap;
	@media (max-width: ${sizes.smallTablet.width}) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const SplitPicDiv = styled.div`
	flex-basis: 50%;
	max-width: 50%;
	order: ${props => props.order === 'right' ? 2 : 1};
	min-height: 480px;
	background-image: url(${props => props.imageUrl ? props.imageUrl : ''});
	background-repeat: no-repeat;
	@media (max-width: ${sizes.smallTablet.width}) {
		width: 100%;
		max-width: 100%;
	}
`;

export const SplitTextDiv = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	padding: 118px;
	line-height: 24px;
	max-width: 50%;
	order: ${props => props.order === 'right' ? 2 : 1};
	width: 538px;

	@media (max-width: ${sizes.smallTablet.width}) {
		width: 100%;
		max-width: 100%;
		text-align: center;
	}
`;

export const SplitTextTitle = styled.h2`
	font-size: 32px;
	line-height: 38.2px;
	margin-bottom: 8px;
	margin-top: 0px;
	text-align: left;
	@media (max-width: ${sizes.smallTablet.width}) {
		text-align: center;
	}
`;

export const SplitTextBody = styled.p`
	
`;
