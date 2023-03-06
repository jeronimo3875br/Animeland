import React from 'react';
import {
	Container,
	Header,
	Main,
	Operation,
	OperationText,
	Title
} from './style';

import { Text } from 'react-native';

import Anime from '../Anime';
import { IAnime } from '../../../dtos/IAnimeDTO';

interface IAnimeList {
    title: string;
    animes: IAnime[]
}

export default function AnimeLIst({ title, animes }: IAnimeList){
	return (
		<Container>
			<Header>
				<Title>{ title }</Title>
				<Operation>
					<OperationText>Visualizar</OperationText>
				</Operation>
			</Header>
			<Main 
				data={animes}
				horizontal
				renderItem={({ item }: { item: IAnime }) => <Anime image={item.image} />}
				keyExtractor={(item: IAnime) => item.anime}
			/>
		</Container>
	);
}