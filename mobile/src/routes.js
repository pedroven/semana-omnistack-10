import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
	createStackNavigator(
		{
			Main: {
				screen: Main,
				navigationOptions: {
					title: 'DevRadar'
				}
			},
			Profile: {
				screen: Profile,
				navigationOptions: {
					title: 'Perfil no Github'
				}
			}
		},
		{
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: '#7d40e7'
				},
				headerBackTitleVisible: false,
				headerTintColor: '#fff',
				headerTitleAlign: 'center'
			}
		}
	)
);

export default Routes;
