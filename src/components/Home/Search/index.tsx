import React from 'react';
import { SearchButton } from './style';
import { Ionicons } from '@expo/vector-icons';

export default function Search(){
	return (
		<SearchButton>
			<Ionicons
				name="search"
				size={27}
				color="#ffffff"
			/>
		</SearchButton>
	);
}