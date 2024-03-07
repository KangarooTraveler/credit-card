import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrollDesignCard = ({ onDesignChange }) => {

    useEffect(() => {
        _retrieveDesignData()
    })

    const [selectedButton, setSelectedButton] = useState(require('./ColorImages/Green.png'));

    const button = [
        { id: '1', uri: './ColorImages/SimpleLG.png', require: require('./ColorImages/SimpleLG.png') },
        { id: '2', uri: './ColorImages/CurvedLines.png', require: require('./ColorImages/CurvedLines.png') },
        { id: '3', uri: './ColorImages/Cube.png', require: require('./ColorImages/Lines2.png') },
        { id: '4', uri: './ColorImages/Lines2.png', require: require('./ColorImages/Lines2.png') },
        { id: '5', uri: './ColorImages/Group4.png', require: require('./ColorImages/Group4.png') },
        { id: '6', uri: './ColorImages/Group5.png', require: require('./ColorImages/Group5.png') },
    ];

    const handleButtonPress = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const _saveDesign = async (design, id) => {
        try {
            await AsyncStorage.setItem('selectedDesignCard', `${design}`,);
            await AsyncStorage.setItem('selectedIdButtonDesign', `${id}`,);
        } catch (error) {
            console.log("error _saveColor: ", error)
        }
    };

    const _retrieveDesignData = async () => {
        try {
            const idButton = await AsyncStorage.getItem('selectedIdButtonDesign');
            const design = await AsyncStorage.getItem('selectedDesignCard');
            if (idButton !== null) {
                setSelectedButton(idButton);
                onDesignChange(design)
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
                                onDesignChange(item.require)
                                console.log('design', item.require)
                                _saveDesign(item.require, item.id)
                            }}>
                            <View style={{ justifyContent: 'flex-end', flex: 1, }}>
                                <Image style={{ width: 36, height: 34 }} source={item.require} />
                            </View>
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
        backgroundColor: "#1F1F1F",
        borderRadius: 12
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

export default ScrollDesignCard;