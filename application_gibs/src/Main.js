import styled from 'styled-components';
//Medias Queryes
import { device } from './Breakpoints';

export const TemplateGibs = styled.div`
    width: 100%;
`;
//Buttons
export const GButton = styled.button`
   background-color: ${props => props.Background.GStyle};
   border-color:  ${props => props.ColorBorder.GStyle};
   border-radius: ${props => props.SizeBorderRadius.GStyle};
   border-style: solid;
   box-shadow: ${props => props.BoxShadow.GStyle};
   border-width: 1px;
   color: ${props => props.ColorFont.GStyle};	
   display: inline-block;
   font-size: .95vw;
   font-weight: ${props => props.WeightFont.GStyle};
   margin: 0 10px;
   padding: .75rem 1rem;
`;
//Cards
export const GCard = styled.div`
   background-color: ${props => props.Background.GCardStyle};
   border-color:  ${props => props.ColorBorder.GCardStyle};
   border-radius: ${props => props.SizeBorderRadius.GCardStyle};
   border-style: solid;
   box-shadow: ${props => props.BoxShadow.GCardStyle};
   border-width: 1px;
   color: ${props => props.ColorFont.GCardStyle};	
   display: inline-block;
   font-size: .95vw;
   font-weight: ${props => props.WeightFont.GCardStyle};
   margin: 0 8px;
   padding: .5px 1rem;
   min-width: ${props => props.MinWidthCard.GCardStyle};
   max-width: ${props => props.MaxWidthCard.GCardStyle};
`;
export const GCardBody = styled.div`
  padding: 7px 20px;
`;
export const GCardFooter = styled.div`
  padding: 18px 20px;
`;
export const GCardHeader = styled.div`
  padding: 20px;
`;
//Grids
export const GContainer = styled.div`
	box-sizing: border-box;
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 1360px;
    &:after, &:before {
	  content: "";
	  display: table;
	}
	&:after {
	  clear: both;
	}
    @media ${device.tablet} { 
    	width: 1080px;
  	}
`;
export const GRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:after {
	  content: "";
	  clear: both;
	  display: table;
	}
    @media ${device.tablet} { 
    	flex-direction: row;
    	min-height: 8vh;
  	}
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

export const GColumn = styled.div`
	padding: .25rem;
    @media ${device.tablet} { 
    	${({ Desk }) => Desk && getColumn(Desk)}
  	}
`;
