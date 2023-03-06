import React from 'react';
import { AccountNotifications, NotificationValue } from './style';

import { Ionicons } from '@expo/vector-icons';

export default function Notification(){
	return (
		<AccountNotifications>
			<NotificationValue>10</NotificationValue>
			<Ionicons
				name='notifications'
				size={30}
				color="#ffffff"
			/>
		</AccountNotifications>
	);
}