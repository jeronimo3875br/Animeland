import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { 
	Container, 
	RecommendationBanner,
	RecommendationContent,
	RecommendationDescription,
	RecommendationPlayButton,
	RecommendationPlayButtonText,
	RecommendationTitle,
	RecommendationMuteButton,
	RecommendationOperations
} from './style';

import { useRecoilState } from 'recoil';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { videoTeaserEnd, videoTeaserSong } from '../../../store/index';

interface IRecommendation {
	title: string;
	description: string;
    image: ImageSourcePropType;
}

export default function Recommendation({ image, description, title }: IRecommendation){
	const [ teaserSong, setTeaserSong ] = useRecoilState(videoTeaserSong);
	const [ teaserEnd, setTeaserEnd ] = useRecoilState(videoTeaserEnd);

	return (
		<Container activeOpacity={1}>
			<RecommendationBanner source={teaserEnd ? image : undefined} resizeMode="stretch">
				<LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, .8)', 'rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, 0)'].reverse()}>
					<RecommendationContent>
						<RecommendationTitle>{ title }</RecommendationTitle>
						<RecommendationDescription>{ description }</RecommendationDescription>
						<RecommendationOperations>
							<RecommendationPlayButton>
								<Ionicons
									name="play-outline"
									size={22}
									color="#ffffff"
								/>
								<RecommendationPlayButtonText>Assistir agora</RecommendationPlayButtonText>
							</RecommendationPlayButton>
							<RecommendationMuteButton onPress={() => {
								const isMuted = teaserSong;
								setTeaserSong(!isMuted);
							}}>
								{
									!teaserSong ? 
										(
											<Ionicons
												name="volume-high"
												size={25}
												color="#ffffff"
											/>
										) :
										(
											<Ionicons
												name="volume-mute"
												size={25}
												color="#ffffff"
											/>
										)
								}
							</RecommendationMuteButton>
						</RecommendationOperations>
					</RecommendationContent>
				</LinearGradient>
			</RecommendationBanner>
		</Container>
	);
}