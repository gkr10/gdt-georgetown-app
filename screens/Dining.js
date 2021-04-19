import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Modal, Button, Image} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import DiningStyles from '../DiningStyles';
import moment, { min } from 'moment';


const Dining = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    // const [currentDate, setCurrentDate] = useState('');


    // useEffect(() => {
    //     var date = moment().utcOffset('-04:00').format(' hh:mm:ss a');
    //     // console.log(date)
    //     setCurrentDate(date);
    //     }, []);

  
    function getCurrentMeal () {
        let today = new Date();
 
        let hour = today.getHours(); 
        let minute = today.getMinutes(); 
        let breakfastStart = 9 *60;
        let breakfastEnd = 11 * 60;
        let lunchStart = breakfastEnd;
        let lunchEnd = 16 * 60; 
        let dinnerStart = lunchEnd;
        let dinnerEnd = 19 * 60; 

        let timeInMinutes = (hour * 60) + minute;
        let message = "";

        if (timeInMinutes < breakfastStart) {
            message = "Serving breakfast starting at 9:00 AM";
        } else if (timeInMinutes > breakfastStart && timeInMinutes < breakfastEnd) {
            message = "Now Serving: Breakfast until 11:00 AM"
        }else if (timeInMinutes > lunchStart && timeInMinutes < lunchEnd) {
            message = "Now Serving: Lunch until 4:00 PM"
        } else if (timeInMinutes > dinnerStart && timeInMinutes < dinnerEnd) {
            message = "Now Serving: Dinner until 7:00 PM"
        } else if (timeInMinutes > dinnerEnd) {
            message = "Serving breakfast tomorrow at 9:00AM"
        }
        // console.log(timeInMinutes); 
        return(message);
    }
    return (
        <SafeAreaView>
            <ScrollView style={{}}>
                <View style={styles.container}>

                <View style={DiningStyles.diningContainer}>
                    <Image source={require("../assets/leos.png")} />
                    <View>
                        <Text style={{fontSize: 25, fontWeight: "600"}}>The Table at Leo's</Text>
                        <Text style={{fontSize: 15, fontWeight: "600"}}>Accepts Meal Swipes</Text>
                        <Text> Location: Leo O'Donovan Hall {'\n'} {getCurrentMeal()}</Text>
                    </View>
                </View>
                <View style={DiningStyles.diningContainer}>
                
                    <Image style={{margin: 10}} source={require("../assets/launch.png")} />
                    <View>
                        <Text style={{fontSize: 25, fontWeight: "600"}}>LEO MKT | Launch </Text>
                        <Text style={{fontSize: 15, fontWeight: "600"}}>Accepts: Meal Swipes, Flex Dollars</Text>
                        <Text> Location: Leo O'Donovan Hall {'\n'} Open: Monday - Friday (11 AM - 7 PM)</Text>
                    </View>
                </View>

                <View style={DiningStyles.diningContainer}>
                    <View style={{margin: 10, borderRadius: 20, shadowOffset: {width:4, height: 4},
        shadowOpacity: .25}}>
                        <Image  source={require("../assets/royal_jacket.png")} />
                    </View>
                    
                    <View>
                        <Text style={{fontSize: 25, fontWeight: "600"}}>Royal Jacket Deli</Text>
                        <Text style={{fontSize: 15, fontWeight: "600"}}>Accepts: Meal Swipes, Flex Dollars</Text>
                        <Text> Location: Leavy Center {'\n'} Open: Monday - Friday (7 AM - 6 PM)</Text>
                    </View>
                </View>

                <View style={DiningStyles.diningContainer}>
                    <View style={{margin: 10, borderRadius: 20, shadowOffset: {width:4, height: 4},
        shadowOpacity: .25}}>
                        <Image  source={require("../assets/corp.png")} />
                    </View>
                    
                    <View>
                        <Text style={{fontSize: 25, fontWeight: "600"}}>Hilltoss</Text>
                        <Text style={{fontSize: 15, fontWeight: "600"}}>Accepts: Flex Dollars</Text>
                        <Text> Location: HSFC {'\n'} Open: Monday - Friday (11 AM - 6 PM) {"\n"} & Saturday (12 - 6 PM)</Text>
                    </View>
                </View>
                
             
            </View>
            </ScrollView>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      //justifyContent: 'space-evenly'
    },
});

// console.log(JSON.parse(JSON.stringify(dupontData))["depart times"][0]);

export default Dining;