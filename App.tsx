import React from 'react';
import 'react-native-gesture-handler';
import { TabRoutes } from './src/routes';
import { RecoilRoot } from 'recoil'; 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
	return (
		<NavigationContainer>
			<RecoilRoot>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<TabRoutes/>
				</GestureHandlerRootView>
				<StatusBar backgroundColor='#212121' style="light" />
			</RecoilRoot>
		</NavigationContainer>
	);
}