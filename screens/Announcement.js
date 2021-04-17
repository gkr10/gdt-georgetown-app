import { localeData, min } from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, Image } from "react-native";
import { Divider } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import SwipeCards from "react-native-swipe-cards-deck";
import jack from '../assets/bulldog.png';
import logo from '../assets/logoWhite.png';
const { width, height } = Dimensions.get('window');
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const EXAMPLE_MESSAGE = 'April 14, 2021\n \nDear Members of the Georgetown University Community: \n \nAs I shared in my message on March 25, we anticipate that the conditions will be in place this fall to bring our community back and resume more regular life on our campuses. Our gradual return is beginning this summer, with a full return of our community for the fall.';

function Card({ data }) {
    return (
        <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
            <Text style={styles.cardsTitle}>{data.title}</Text>
            <Image source={logo} style={{ width: 200, height: 200, resizeMode: "contain" }} />
            <Text style={styles.cardsContent}>{data.content}</Text>
            <Text style={styles.readMore}>Read more</Text>

        </View>
    );
}

function StatusCard({ title, content }) {
    return (
        <View>
            <Text style={styles.cardsTitle}>{title}</Text>
            <Text style={styles.cardsContent}>{content}</Text>

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

const Announcement = ({ navigation }) => {
    const [cards, setCards] = useState();
    const [progress, setProgress] = useState(1 / 6);
    // replace with real remote data fetching
    useEffect(() => {
        load()
    }, []);
    function load() {
        setTimeout(() => {
            setCards([
                { title: "Annoucement #1", backgroundColor: "#041E42", content: EXAMPLE_MESSAGE },
                { title: "Annoucement #2", backgroundColor: "#041E42", content: lorem },
                { title: "Annoucement #3", backgroundColor: "#041E42", content: lorem },
                { title: "Annoucement #4", backgroundColor: "#041E42", content: lorem },
                { title: "Annoucement #5", backgroundColor: "#041E42", content: lorem },
                { title: "Annoucement #6", backgroundColor: "#041E42", content: lorem },
            ]);
        }, 3000);
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

    function incrementProgress(card) {
        setProgress(progress + 1 / 6)
        return true;
    }

    function endOfCards() {
        return (
            <BaseCard title="You have viewed all announcements..." />
        )
    }

    return (
        <View style={styles.container}>
            {cards ? (
                <SwipeCards
                    cards={cards}
                    renderCard={(cardData) => <Card data={cardData} />}
                    keyExtractor={(cardData) => String(cardData.title)}
                    loop={false}
                    renderNoMoreCards={endOfCards}
                    handleYup={handleYup}
                    handleNope={handleNope}
                    handleMaybe={handleMaybe}
                    hasMaybeAction={false}
                    showYup={false}
                    showMaybe={false}
                    showNope={false}

                    // If you want a stack of cards instead of one-per-one view, activate stack mode
                    stack={true}
                    stackDepth={3}
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
        color: 'white'
    },
    cardsContent: {
        fontSize: 20,
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
});

export default Announcement;