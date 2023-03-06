import React from 'react';
import { Container } from './style';

import Category from '../Category';

export default function Categorys(){
	return (
		<Container>
			<Category
				title='Animes'
				active
			/>
			<Category
				title='Mangás'
			/>
			<Category
				title='Wallpapers'
			/>
			<Category
				title='Shorts'
			/>
			<Category
				title='Comunidade'
			/>
		</Container>
	);
}