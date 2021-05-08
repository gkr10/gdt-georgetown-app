import { localeData, min } from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, Image, Button, Modal, TouchableWithoutFeedback, ScrollView } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import jack from '../assets/bulldog.png';
import logo from '../assets/logoWhite.png';
import * as Progress from 'react-native-progress';


const { width, height } = Dimensions.get('window');
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const EXAMPLE_MESSAGE = 'April 14, 2021\n \nDear Members of the Georgetown University Community: \n \nAs I shared in my message on March 25, we anticipate that the conditions will be in place this fall to bring our community back and resume more regular life on our campuses. Our gradual return is beginning this summer, with a full return of our community for the fall.';


const Announcement = ({ navigation }) => {
    const [expand, setExpand] = useState(false);
    const [cards, setCards] = useState();
    const [progress, setProgress] = useState(1 / 6);
    // replace with real remote data fetching
    useEffect(() => {
        load()
    }, []);
    function load() {
        setTimeout(() => {
            setCards([
                { index: 1, title: "Annoucement #1", backgroundColor: "#041E42", content: EXAMPLE_MESSAGE },
                { index: 2, title: "Annoucement #2", backgroundColor: "#041E42", content: lorem },
                { index: 3, title: "Annoucement #3", backgroundColor: "#041E42", content: lorem },
                { index: 4, title: "Annoucement #4", backgroundColor: "#041E42", content: lorem },
                { index: 5, title: "Annoucement #5", backgroundColor: "#041E42", content: lorem },
                { index: 6, title: "Annoucement #6", backgroundColor: "#041E42", content: lorem },
            ]);
        }, 0);
    }
    function handleYup(card) {
        return true; // return false if you wish to cancel the action
    }
    function handleNope(card) {
        return true;
    }
    function handleMaybe(card) {
        return true;
    }
    function incrementProgress() {
        setProgress(progress + 1 / 6)
        return true;
    }
   

    function endOfCards() {
        return (
            <BaseCard title="You have viewed all announcements..." />
        )
    }


    function Card({ data }) {
        //console.log(data.index)
        return (
            <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
                <Text style={styles.cardsTitle}>{data.title}</Text>
                <Image source={logo} style={{ width: '40%', height: '40%', resizeMode: "contain" }} />
                <Text style={styles.cardsContent}>{data.content}</Text>
                <Button title="Read More" style={styles.readMore} onPress={() => setExpand(true)} />

                <Modal style={styles.modalView}
                    animationType="slide"
                    presentationStyle="formSheet"
                    visible={expand}

                >

                    <View style={styles.modalView}>
                        <Button title="Close" onPress={() => setExpand(!expand)}>
                        </Button>
                        <ScrollView>
                            <View style={styles.modalContent}>
                                <Text style={styles.cardsTitle}> Announcement Detail</Text>
                                <Text style={styles.cardsContent}>{lorem}{"\n"}</Text>
                                <Text style={styles.cardsContent}>{lorem}{"\n"}</Text>
                                <Text style={styles.cardsContent}>{lorem}{"\n"}</Text>
                            </View>
                        </ScrollView>
                    </View>


                </Modal>

            </View>
        );
    }


    function BaseCard({ title }) {
        return (
            <View>
                <Text style={styles.baseText}>{title}</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            {cards ? (
                <SwipeCards
                    cards={cards}
                    renderCard={(cardData) => <Card data={cardData} />}
                    keyExtractor={(cardData) => String(cardData.index)}
                    loop={false}
                    renderNoMoreCards={endOfCards}
                    handleYup={handleYup}
                    handleNope={handleNope}
                    handleMaybe={handleMaybe}
                    hasMaybeAction={false}
                    showYup={false}
                    showMaybe={false}
                    showNope={false}
                    smoothtransition={true}

                    // If you want a stack of cards instead of one-per-one view, activate stack mode
                    stack={true}
                    stackDepth={2}
                    cardRemoved={incrementProgress}
                />
            ) : (
                <ActivityIndicator size='large' color='white' />
            )}
            {cards ? (<Progress.Bar progress={progress} width={200} color="white" />) : null}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00354f",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50

    },
    card: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 0.9 * width,
        height: 0.7 * height,
        elevation: 10,
        borderRadius: 25,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: .25,
        paddingTop: 10,
        paddingBottom: 15
    },
    cardsTitle: {
        fontSize: 30,
        fontFamily: 'SourceSansPro-SemiBold',
        color: 'white',
        marginBottom: 10,
        marginTop: 11
    },
    cardsContent: {
        fontSize: 16,
        fontFamily: 'SourceSansPro-SemiBold',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    readMore: {
        fontSize: 20,
        fontFamily: 'SourceSansPro-SemiBold',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        textDecorationLine: 'underline'
    },
    baseText: {
        fontSize: 30,
        fontFamily: 'SourceSansPro-SemiBold',
        color: 'white'
    },
    modalView: {
        justifyContent: "flex-start",
        backgroundColor: "#041E42",
        padding: 20,
        alignItems: "baseline",

        height: 0.95 * height,
        width: width,
        elevation: 5
    },
    modalContent: {
        alignItems: 'center',
    }

});

export default Announcement;
