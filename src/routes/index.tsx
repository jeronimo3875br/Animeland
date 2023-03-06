import React from 'react';
import { RootStackParamsList } from '../RootStackParamsList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Views
import HomePage from '../pages/Home';
import HomeHeader from '../components/Home/Header';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator();

function StackRoutes(){
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="home"
				component={HomePage}
				options={{
					header: () => <HomeHeader />
				}}
			/>
		</Stack.Navigator>
	);
}

function TabRoutes(){
	return (
		<Tab.Navigator>
			<Tab.Screen 
				name="Home" 
				component={StackRoutes} 
				options={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: '#212121',
						height: 60,
						paddingBottom: 5,
						position: 'absolute',
						borderTopWidth: 0,
						
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
							}}>Home</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
						}}>Home</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="home"
								color="#ad8f67"
								size={23}
							/>;
						}

						return <Ionicons 
							name="home-outline"
							color="#3f3e37"
							size={23}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="Search" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>}
				options={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: '#212121',
						height: 60,
						paddingBottom: 5,
						position: 'absolute',
						borderTopWidth: 0,
						
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
							}}>Pesquisar</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
						}}>Pesquisar</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="search"
								color="#ad8f67"
								size={23}
							/>;
						}

						return <Ionicons 
							name="search"
							color="#3f3e37"
							size={23}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="MyList" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>} 
				options={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: '#212121',
						height: 60,
						paddingBottom: 5,
						position: 'absolute',
						borderTopWidth: 0,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
							}}>Minha lista</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
						}}>Minha lista</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="bookmark"
								color="#ad8f67"
								size={25}
							/>;
						}

						return <Ionicons 
							name="bookmark-outline"
							color="#3f3e37"
							size={25}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="Catalog" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>} 
				options={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: '#212121',
						height: 60,
						paddingBottom: 5,
						position: 'absolute',
						borderTopWidth: 0,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
							}}>Categorias</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
						}}>Categorias</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="apps"
								color="#ad8f67"
								size={25}
							/>;
						}

						return <Ionicons 
							name="apps-outline"
							color="#3f3e37"
							size={25}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="Perfil" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>} 
				options={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: '#212121',
						height: 60,
						paddingBottom: 5,
						position: 'absolute',
						borderTopWidth: 0,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
							}}>Perfil</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
						}}>Perfil</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="person"
								color="#ad8f67"
								size={25}
							/>;
						}

						return <Ionicons 
							name="person-outline"
							color="#3f3e37"
							size={25}
						/>;
					}
				}}
			/>
		</Tab.Navigator>
	);
}

export { TabRoutes, StackRoutes };