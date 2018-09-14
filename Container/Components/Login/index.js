// Library Imports
import React from 'react';
import { ImageBackground } from 'react-native';
import { Container} from 'native-base';
// Component Imports
import LoginForm from './LoginForm'
// Style Imports
import styles from './styles';

export default function LoginComponent(props){
	const backgroundImage = require('../../Images/SIF/background.jpg');
	const logoImage = require('../../Images/SIF/logo.png');
	return (
		<Container>
			<ImageBackground style={styles.imgContainer} source={backgroundImage}>
				{/* Currently passing navigation prop 2 layers down, might want to reconsider storing in with redux */}
				<LoginForm logoImage={logoImage} navigate={props.navigation.navigate} destination="SeniorStack"/>
			</ImageBackground>
		</Container>
	);
}
