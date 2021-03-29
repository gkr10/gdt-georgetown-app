import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const HomeStyles = StyleSheet.create({
    ButtonContainer1: {
        justifyContent: 'space-evenly',
        alignSelf:'center',
        marginVertical: '5%',
        backgroundColor: '#041E42',
        borderRadius: 5,
        elevation: 8,
        borderRadius: 25,
        width: width * .9,
        height: height * .10,
        shadowOffset: {width:4, height: 4},
        shadowOpacity: .25,
        //elevation: 8,
        //borderRadius: 25,
        //marginTop: 100,
    },
    ButtonContainer2: {
        justifyContent: 'space-evenly',
        alignSelf:'center',
        marginVertical: '5%',
        backgroundColor: '#C4C4C4',
        borderRadius: 5,
        elevation: 8,
        borderRadius: 25,
        width: width * .9,
        height: height * .10,
        shadowOffset: {width:3, height: 4},
        shadowOpacity: .25,
        //elevation: 8,
        //borderRadius: 25,
        //marginTop: 100,
    },
    ButtonText1: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 25,
        color: "#fff",
        alignSelf: "center",
        fontWeight: "600",
        
        //lineHeight: 18,
    },
    /*gradient: {
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
        elevation: 8,
        borderRadius: 25,
        width: width * .8,
        height: 50,
    },*/
});

export default HomeStyles; 
