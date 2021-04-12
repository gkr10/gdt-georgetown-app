import { StyleSheet, Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window');

const FlexDollarsStyles = StyleSheet.create({
    
    modal: {
        // justifyContent: 'center',
        // alignSelf:'center',
        marginVertical: '30%',
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 8,
        borderRadius: 25,
        width: width * .9,
        height: height * .55,
        // marginLeft: '5%',
        shadowOffset: {width:4, height: 4},
        shadowOpacity: .25,
        borderColor:'#fff'
    },
    dupontTimes: {
        color: '#000',
        // marginLeft: '35%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: '3%'
    },
    dollarsBox: {
        borderWidth: 1, 
        borderRadius: 20, 
        margin: '12%', 
        marginTop: '10%',
        marginBottom: '0%',
        backgroundColor: '#C4C4C4'
    },
    buttonBox: {
        backgroundColor: '#041E42', 
        borderRadius: 10, 
        marginBottom: '15%', 
        marginTop: '10%', 
        width: '35%', 
        height: '45%' 
    },
    buttonText: {
        color: '#fff', 
        fontSize: 20, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        padding: '5%'
    },
    dollarsBoxSmallerText: {
        fontSize: 20, 
        textAlign: 'center',
        padding: '1%'
    },
    dollarsText: {
        color: '#000',
        textAlign: 'center',
        marginLeft: '20%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: '1%',
        // marginTop: '1%'
    },
    wrapper: {
            flexDirection:'row', 
            paddingLeft: '5%', 
            paddingTop: '1%'
    }
    
})

export default FlexDollarsStyles; 

/*

position: absolute;
width: 328px;
height: 258px;
left: 24px;
top: 175px;

background: #041E42;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;

*/

/* Rectangle 39 

position: absolute;
left: 0%;
right: 97.53%;
top: 52.78%;
bottom: 9.03%;

background: #D7503E;
border: 1px solid #000000;
box-sizing: border-box;
*/