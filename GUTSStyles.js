import { StyleSheet, Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window');

const GUTSStyles = StyleSheet.create({
    openModal: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 30,
        color: "#fff",
        marginLeft: '60%',
        marginTop: '10%',
        fontWeight: "600",
        textAlign: "left"
        
    },
    GutsTransportBox: {
        justifyContent: 'flex-start',
        // alignSelf:'center',
        marginVertical: '5%',
        backgroundColor: '#041E42',
        borderRadius: 5,
        elevation: 8,
        borderRadius: 25,
        width: width * .9,
        height: height * .4,
        shadowOffset: {width:4, height: 4},
        shadowOpacity: .25,
        // flex: 1
        //elevation: 8,
        //borderRadius: 25,
        //marginTop: 100,
    },
    LocationText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 25,
        color: "#fff",
        marginLeft: '5%',
        marginTop: '10%',
        
        fontWeight: "600",
        
        //lineHeight: 18,
    },
    SubheadText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 18,
        color: "#fff",
        // alignSelf: "center",
        fontWeight: "600",
        marginLeft: '10%',
        marginTop: '5%',
        
        //lineHeight: 18,
    },
    SmallText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 11,
        color: "#BBBCBC",
        // alignSelf: "center",
        fontWeight: "600",
        marginLeft: '10%',
        marginTop: '2%',
        
        //lineHeight: 18,
    },
    DepatureSmallText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 11,
        color: "#BBBCBC",
        // alignSelf: "center",
        fontWeight: "600",
        marginLeft: '5%',
        marginTop: '2%',
    },
    DeputureSubheadText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 18,
        color: "#fff",
        // alignSelf: "center",
        fontWeight: "600",
        marginLeft: '5%',
        marginTop: '5%',
    },
    Rectangle1: { 
        backgroundColor:'#D7503E', 
        flex: 0.01,
        marginLeft: '5%',
        marginTop: '3%'
        },
    Rectangle2: {
        backgroundColor:'#00B5E2', 
        flex: 0.02,
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '0%'
    },
    hideButton: {
        marginLeft:'5%',
        color: '#000',
        marginBottom: '5%',
        marginTop: '5%'
    },
    tableHeader: {
        color: '#000'
    },
    modal: {
        justifyContent: 'center',
        // alignSelf:'center',
        marginVertical: '30%',
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 8,
        borderRadius: 25,
        width: width * .9,
        height: height * .5,
        marginLeft: '5%',
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
    }

})

export default GUTSStyles; 

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