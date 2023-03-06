import React, { useEffect } from 'react';
import { Container, CategorysScroll } from './style';

// import Banner from '../../components/Home/Banner';
import { LinearGradient } from 'expo-linear-gradient';
import AnimeList from '../../components/Home/AnimeList';
import Continuations from '../../components/Home/Continuations';
import Recommendations from '../../components/Home/Recommendations';

// import BannerOne from '../../../assets/images/banner3.jpg';
import AnimeTrailer from '../../../assets/videos/trailer1.mp4';

import { useRecoilState } from 'recoil';
import { videoTeaserEnd } from '../../store';
import TeaserVideoPlayer from '../../components/Home/TeaserVideoPlayer';
import Shorts from '../../components/Home/Shorts';
import animeList from '../../data/animes';

export default function HomePage(){
	const [ teaserEnd ] = useRecoilState(videoTeaserEnd);

	useEffect(() => {
		alert('Esse aplicativo é apenas uma demo não funcional, desenvolvida como o intuito de estudar, praticar ou simplesmente por hobbie.');
	}, []);

	return (
		<Container>
			<LinearGradient colors={['#171717', '#25231f']} style={{ flex: 1 }}>
				<CategorysScroll>
					{ !teaserEnd ? <TeaserVideoPlayer video={AnimeTrailer} /> : undefined }
					<Recommendations />
					<Shorts />
					{/* <Banner 
						image={BannerOne}
					/> */}
					<AnimeList 
						title='Recomendados para você'
						animes={animeList}
					/>
					<Continuations/>
					<AnimeList 
						title='Meus favoritos'
						animes={animeList}
					/>
					<AnimeList 
						title='Novos animes'
						animes={animeList}
					/>
					<AnimeList 
						title='Populares'
						animes={animeList}
					/>
				</CategorysScroll>
			</LinearGradient>
		</Container>
	);
}