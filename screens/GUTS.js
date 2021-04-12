import React, { useState } from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity, Modal, Button} from 'react-native';
import { Table, TableWrapper, Cell, Row, Rows, Col, Cols } from 'react-native-table-component';
import { StatusBar } from 'expo-status-bar';
import HomeStyles from '../HomeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import GUTSStyles from '../GUTSStyles.js'; 
import Home from './Home';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import  dupontTableData  from '../assets/dupontData';
import rosslynTableData from '../assets/rosslynData';
import { BlurView } from 'expo-blur';

// var fs = require ('fs');
// let departTimes = JSON.parse(JSON.stringify(dupontData))["depart times"]
// let dupontTableData = [];
// let rowData = [];
// for (let i = 0; i < departTimes.length; i++) {
//     // rowData.push(departTimes[i]["Depart Bus Turn Around Time"]);
//     // rowData.push(departTimes[i]["Depart Dupont Time"]);
//     // console.log(rowData);
//     dupontTableData.push([departTimes[i]["Depart Bus Turn Around Time"], 
//     departTimes[i]["Depart Dupont Time"]]);
//     // rowData.pop();
//     // rowData.pop();
    
// }
let dupontTableHead = ["Depart Bus Turn Around", "Depart Dupont"]; 
const rosslynTableHead = ["Depart Bus Turn Around", "Depart Rosslyn"]; 
// console.log(dupontTableData.length);

const GUTS = ({navigation}) => {
    const {width, height} = Dimensions.get('window');
    const [dupontModalVisible, setDupontModalVisible] = useState(false); 
    const [rosslynModalVisible, setRosslynModalVisible] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView style={{}}>
                <View style={styles.container}>
                    <View style= {{marginVertical: height * .01}}>

                    </View>
                    <StatusBar style="auto" />
                    <View activeOpacity={0.8} style={GUTSStyles.GutsTransportBox}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={GUTSStyles.LocationText}>DUPONT</Text>
                            <View>
                                <TouchableOpacity title="..."  onPress={()=> {
                                    setDupontModalVisible(true);
                                    
                                }}>
                                
                                    <Text style={GUTSStyles.openModal}>...</Text>
                                </TouchableOpacity>
                                <Modal animationType="slide" transparent={true} visible={dupontModalVisible} >
                                <BlurView tint='dark' intensity={100} style={StyleSheet.absoluteFill}>
                                    <View style={GUTSStyles.modal}>
                                        
                                        <TouchableOpacity
                                            // style={{width:'25%'}}
                                            onPress={() => {
                                                setDupontModalVisible(!dupontModalVisible);
                                            }}>
                                            <Text style={GUTSStyles.hideButton}>Hide</Text>
                                        </TouchableOpacity>
                                        <Text style={GUTSStyles.dupontTimes}>Dupont Times</Text>
                                        <ScrollView>
                                            <Table style={{margin: '5%', marginBottom: '0%'}} borderStyle={{borderWidth: 3, borderColor: '#041E42'}}>
                                                <Row textStyle={{color: '#000', textAlign: 'center', padding:'3%'}} data={dupontTableHead
                                            }/>
                                            </Table>
                                            <Table borderStyle={{borderWidth: 3, borderColor: '#041E42'}} style={{margin: '5%', marginTop:'0%'}}>
                                                {
                                                dupontTableData.map((rowData, index) => (
                                                    
                                                    <Row
                                                    key={index}
                                                    data={rowData}
                                                    // widthArr={state.widthArr}
                                                    // style={[index%2 && {backgroundColor: '#F7F6E7', color: 'black'}]}
                                                    textStyle={{color: '#000', textAlign: 'center', padding:'10%'}}
                                                    // style={{padding: '5%' }}
                                                    />
                                                ))
                                                }
                                            </Table>
                                        </ScrollView>
                                        {/* <Text sytle={{color: '#fff'}}>{JSON.parse(dupontData)}</Text> */}
                                        
                                    </View>
                                    </BlurView>
                                </Modal>
                            </View>
                        </View>

                        {/* <Text style={GUTSStyles.vector}></Text> */}
                        {/* <Image source={logo} style={{width: 180, height: 40, resizeMode: "contain"}} /> */}
        
                        
                        <View style={{flexDirection: 'row',}}>
                            <View style= {GUTSStyles.Rectangle1}/> 
                            <View> 
                                <Text style={GUTSStyles.SubheadText}>Arrival</Text>
                                <Text style={GUTSStyles.SmallText}>Bus Turnaround {'\n'}6:00AM</Text>
                            </View>
                        </View>
                        
                        <View style={{flexDirection: 'row'}}>
                            <View style= {GUTSStyles.Rectangle2}/>
                            <View>
                                <Text style={GUTSStyles.DeputureSubheadText}>Departure</Text>
                                <Text style={GUTSStyles.DepatureSmallText}>20th Street and Massachusetts Avenue, NW {'\n'}6:15AM</Text>
                            </View>
                        </View>
                        
                    </View>

                    <View activeOpacity={0.8} style={GUTSStyles.GutsTransportBox}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={GUTSStyles.LocationText}>ROSSLYN</Text>
                            <View>
                                <TouchableOpacity title="..."  onPress={()=> {
                                    setRosslynModalVisible(true);
                                    
                                }}>
                                
                                    <Text style={GUTSStyles.openModal}>...</Text>
                                </TouchableOpacity>
                                <Modal animationType="slide" transparent={true} visible={rosslynModalVisible} >
                                <BlurView tint='dark' intensity={100} style={StyleSheet.absoluteFill}>
                                    <View style={GUTSStyles.modal}>
                                        
                                        <TouchableOpacity
                                            
                                            onPress={() => {
                                                setRosslynModalVisible(!rosslynModalVisible);
                                            }}>
                                            <Text style={GUTSStyles.hideButton}>Hide</Text>
                                        </TouchableOpacity>
                                        <Text style={GUTSStyles.dupontTimes}>Rosslyn Times</Text>
                                        <ScrollView>
                                            <Table style={{margin: '5%', marginBottom: '0%'}} borderStyle={{borderWidth: 3, borderColor: '#041E42'}}>
                                                <Row textStyle={{color: '#000', textAlign: 'center', padding:'3%'}} data={rosslynTableHead
                                            }/>
                                            </Table>
                                            <Table borderStyle={{borderWidth: 3, borderColor: '#041E42'}} style={{margin: '5%', marginTop:'0%'}}>
                                                {
                                                rosslynTableData.map((rowData, index) => (
                                                    
                                                    <Row
                                                    key={index}
                                                    data={rowData}
                                                    // widthArr={state.widthArr}
                                                    // style={[index%2 && {backgroundColor: '#F7F6E7', color: 'black'}]}
                                                    textStyle={{color: '#000', textAlign: 'center', padding:'10%'}}
                                                    // style={{padding: '5%' }}
                                                    />
                                                ))
                                                }
                                            </Table>
                                        </ScrollView>
                                        {/* <Text sytle={{color: '#fff'}}>{JSON.parse(dupontData)}</Text> */}
                                        
                                    </View>
                                    </BlurView>
                                </Modal>
                            </View>
                        </View>

                        {/* <Text style={GUTSStyles.vector}></Text> */}
                        {/* <Image source={logo} style={{width: 180, height: 40, resizeMode: "contain"}} /> */}
        
                        
                        <View style={{flexDirection: 'row',}}>
                            <View style= {GUTSStyles.Rectangle1}/> 
                            <View> 
                                <Text style={GUTSStyles.SubheadText}>Arrival</Text>
                                <Text style={GUTSStyles.SmallText}>Bus Turnaround {'\n'}4:45AM</Text>
                            </View>
                        </View>
                        
                        <View style={{flexDirection: 'row'}}>
                            <View style= {GUTSStyles.Rectangle2}/>
                            <View>
                                <Text style={GUTSStyles.DeputureSubheadText}>Departure</Text>
                                <Text style={GUTSStyles.DepatureSmallText}>19th Street and North Moore Street {'\n'}5:00AM</Text>
                            </View>
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
      alignItems: 'center',
      //justifyContent: 'space-evenly'
    },
});

// console.log(JSON.parse(JSON.stringify(dupontData))["depart times"][0]);

export default GUTS;