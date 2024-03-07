import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    useColorScheme,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from './Snackbar';

// In fact, the button was added for beauty, 
// so it performs the function of simply 
// displaying a message

const BtnSave = () => {

    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';

    const confirmedMessage = () => {
        Alert.alert('Castomization', 'The design of the card is successfully changed.')
    }

    const clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }

    return (
        <TouchableOpacity
            style={[styles.button, isDarkTheme ? { backgroundColor: '#fff' } : { backgroundColor: '#F99417' }]}
            onPress={confirmedMessage}>
            <Text style={styles.submitText}>Continue</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
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
        color: '#000',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 14,
        marginTop: 20,
    },
    view: {
        flex: 1,
        height: '100%'
    },
    button: {
        width: undefined,
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
    }
});

export default BtnSave;