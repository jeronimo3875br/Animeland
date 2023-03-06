import React from 'react';
import { Container } from './style';
import Recommendation from '../Recommendation';

import RecommendationImage from '../../../../assets/images/recommendation1.jpg';

export default function Recommendations(){
	return (
		<Container>
			<Recommendation
				title='Kobayashi-san'
				description='Kobayashi vivia sozinha em um apartamento, até que um dia, Tooru apareceu e elas acabaram vivendo juntas. Tooru, que é uma garota dragão, encara os seres...'
				image={RecommendationImage}
			/>
		</Container>
	);
}