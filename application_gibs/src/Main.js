import styled from 'styled-components';
//Medias Queryes
import { device } from './Breackpoints';

export const TemplateGibs = styled.div`
    width: 100%;
`;
//Grids
export const GContainer = styled.div`
    margin: 0 auto;
    width: 98%;
    @media ${device.tablet} { 
    	width: 90%;
  	}
`;
export const GRow = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} { 
    	flex-direction: row;
    	min-height: 30vh;
  	}
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

export const GColumn = styled.div`
    @media ${device.tablet} { 
    	${({ Desk }) => Desk && getColumn(Desk)}
  	}
`;
//Cards
export const GCard = styled.div`
    width: 100%;
`;