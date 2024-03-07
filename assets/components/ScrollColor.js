import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrollColorCard = ({ onColorChange }) => {

    useEffect(() => {
        _retrieveColorData()
    })

    const [selectedButton, setSelectedButton] = useState(1);

    const button = [
        { uri: require('./ColorImages/Green.png'), id: '1' },
        { uri: require('./ColorImages/Purple.png'), id: '2' },
        { uri: require('./ColorImages/Orange.png'), id: '3' },
        { uri: require('./ColorImages/Red.png'), id: '4' },
        { uri: require('./ColorImages/Blue.png'), id: '5' },
        { uri: require('./ColorImages/LightRed.png'), id: '6' },
    ];

    const handleButtonPress = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const _saveColor = async (color, id) => {
        try {
            await AsyncStorage.setItem('selectedColorCard', `${color}`,);
            await AsyncStorage.setItem('selectedIdButton', `${id}`,);
        } catch (error) {
            console.log("error _saveColor: ", error)
        }
    };

    const _retrieveColorData = async () => {
        try {
            const idButton = await AsyncStorage.getItem('selectedIdButton');
            const color = await AsyncStorage.getItem('selectedColorCard');
            if (idButton !== null) {
                setSelectedButton(idButton);
                onColorChange(color)
            } else selectedButton;
        } catch (error) {
            console.log("error _retrieveColorData: ", error)
        }
    };

    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.scrollView}>
                {button.map((item) => {
                    return (
                        <TouchableOpacity
                            style={styles.viewCard}
                            key={item.id}
                            onPress={() => {
                                handleButtonPress(item.id)
                                onColorChange(item.uri)
                                console.log('color', item.uri)
                                _saveColor(item.uri, item.id)
                            }}>
                            <Image style={{ flex: 1, width: null, height: null, borderRadius: 12 }} source={item.uri} />
                            <View style={styles.viewForIcon}>
                                {selectedButton == item.id && (<Icon style={styles.checkIconColor} size={24} name="check" />)}
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginLeft: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    submit: {
        marginTop: 24,
        backgroundColor: '#91A6FF',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 4,
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        marginRight: 58,
        marginLeft: 58,
        fontSize: 18,
        marginBottom: 14,
        marginTop: 24,
    },
    view: {
        flex: 1,
        height: '100%'
    },
    viewCard: {
        width: 62,
        height: 62,
        marginRight: 16,
    },
    viewForIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center'
    },
    checkIconColor: {
        color: 'white',
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default ScrollColorCard;