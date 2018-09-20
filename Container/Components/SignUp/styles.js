
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes';

const styles = StyleSheet.create({
	imgContainer: {
		flex: 1,
		width: null,
		height: null,
	},
	
	// overlay 
	overlay:{
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'black',
		opacity: 0.6
	},

	// View -  Body
	userSignUp: {
		flex: 1,
		marginTop: Metrics.HEIGHT * 0.20,
		alignSelf: 'center',
		backgroundColor: 'transparent',
		position: "absolute"
	},

	seniorSignUp: {
		flex: 1,
		marginTop: Metrics.HEIGHT * 0.15,
		alignSelf: 'center',
		backgroundColor: 'transparent',
		position: "absolute"
	},
	
	// Headertext
	headerText:{
		fontFamily: "AirbnbCereal-Bold",
		fontSize:  Fonts.moderateScale(30),
		textAlign: 'center',
		color: 'white'
	},

	meaningful:{
		fontFamily: "AirbnbCereal-Bold",
		fontSize:  Fonts.moderateScale(30),
		textAlign: 'center',
		color: '#e25858',
	},

	// View Containers
	inputFieldSec:{
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.5,
		marginTop: Metrics.HEIGHT * 0.2,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	
	signInSec:{
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.10,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	
	// Item Styles
	item: {
		alignSelf:'center',
		width: Metrics.WIDTH * 0.80,
		height: Metrics.HEIGHT * 0.08
	},

	// Button
	signUpButton:{
		fontFamily: "AirbnbCereal-Book",
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(17),
		width: (Metrics.WIDTH) * 0.80,
		color:'white',
		backgroundColor: '#e25858',
		paddingTop: Metrics.HEIGHT * 0.02,
		paddingBottom: Metrics.HEIGHT * 0.02,
		borderRadius: 3,
		borderColor: 'black'
	},

	// Input Styles
	input: {
		marginLeft: Fonts.moderateScale(0),
		fontFamily: "AirbnbCereal-Book",
		color: 'white'
	},

});
export default styles;
