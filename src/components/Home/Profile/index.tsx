import React from 'react';
import {
	ProfileContainer,
	ProfileAccount,
	ProfileAccountName,
	ProfileDefaultMessage,
	ProfileImage
} from './style';

import { IProfileDTO } from '../../../dtos/IProfileDTO';

export default function Profile({ image, name }: IProfileDTO){
	return (
		<ProfileContainer>
			<ProfileImage
				source={image}
			/>
			<ProfileAccount>
				<ProfileDefaultMessage>Olá,</ProfileDefaultMessage>
				<ProfileAccountName>{ name }</ProfileAccountName>
			</ProfileAccount>
		</ProfileContainer>
	);
}