import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

{/* <Snackbar
    message="This is a custom Snackbar"
    actionText="Dismiss"
    onActionPress={() => {
        // Implement the action logic here.
    }}
    duration={5000} // Customize duration
    position="bottom" // Change the position to 'top'/'bottom'
    backgroundColor="#2E67F8" // Customize background color
    textColor="white" // Change text color
    actionTextColor="white" // Customize action text color
    containerStyle={{ marginHorizontal: 12 }} // Apply additional styling
    messageStyle={{}} // Adjust message text styling
    actionTextStyle={{}} // Customize action text styling
/> */}

const Snackbar = ({
    message,
    actionText,
    onActionPress,
    duration = 3000, // Default duration in milliseconds
    position = "bottom", // Default position
    containerStyle,
    messageStyle,
    actionTextStyle,
    backgroundColor,
    textColor,
    actionTextColor,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isVisible) {
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, duration);

            return () => clearTimeout(timeout);
        }
    }, [isVisible, duration]);

    return isVisible ? (
        <View style={[
            styles.container,
            position === "top" ? styles.topContainer : styles.bottomContainer,
            containerStyle,
            { backgroundColor: backgroundColor }]}>
            <Text style={[styles.messageText, messageStyle, { color: textColor }]}>
                {message}
            </Text>
            {actionText && (
                <TouchableOpacity onPress={onActionPress}>
                    <Text style={[styles.actionText, actionTextStyle, { color: actionTextColor },]}>
                        {actionText}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        left: 0,
        right: 0,
    },
    topContainer: {
        top: 15,
    },
    bottomContainer: {
        bottom: 15,
    },
    messageText: {
        fontSize: 16,
    },
    actionText: {
        marginLeft: 8,
        fontSize: 14,
    },
});

export default Snackbar;