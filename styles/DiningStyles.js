import { StyleSheet, Dimensions } from 'react-native';
import Dining from '../screens/Dining';

const {width, height} = Dimensions.get('window');

const DiningStyles = StyleSheet.create({
    diningContainer: {
        flexDirection: 'row', 
        borderBottomColor: '#C4C4C4', 
        borderBottomWidth: 1, 
        padding: '3%'
    },
    
});

export default DiningStyles; 