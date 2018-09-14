
import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes';

const styles = StyleSheet.create({
	imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
	},

	loginFormBody:{
		width: Metrics.WIDTH,
		height: Metrics.WIDTH * 0.7,
		marginTop: Metrics.HEIGHT * 0.2,
		flex: 1,
		flexDirection: 'column'
	},

	logostyle: {
		alignSelf:'center',
		width: Metrics.WIDTH * 0.40,
		height: Metrics.WIDTH * 0.35,
	},

  inputFieldSec:{
    width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.20,
		marginTop: Metrics.HEIGHT * 0.15,
    alignItems: 'center',
	},
	
	item: {
		marginTop: 2.5,
		marginBottom: 2.5,
		width: Metrics.WIDTH * 0.80,
		height: Metrics.HEIGHT * 0.08
	},

	input: {
		marginLeft: Fonts.moderateScale(18),
		fontFamily: 'AirbnbCereal-Book',
	  color: 'black'
	},
	
	signInSec:{
    width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.10,
		// marginTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
	},
	
	buttondialogsignup:{
		backgroundColor: '#e25858',
		justifyContent: 'center',
		alignItems: 'center',
		width: Metrics.WIDTH * 0.80,
	},

	buttonsignin: {
		alignSelf: 'center',
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		color: Colors.snow,
		padding: Fonts.moderateScale(13),
	},
	
	forgotpass: {
		marginTop: Fonts.moderateScale(10),
		fontSize: Fonts.moderateScale(17),
		color: '#9b9fa2',
		alignSelf: 'center',
		justifyContent: 'center',
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

});
export default styles;
