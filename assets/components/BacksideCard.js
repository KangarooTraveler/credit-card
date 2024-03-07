import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    useColorScheme,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';

const BacksideMainCard = ({ rotate }) => {

    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';

    const copyNumber = () => {
        Clipboard.setString('4324 6456 1234 5672')
    }

    const copyCVC = () => {
        Clipboard.setString('432')
    }

    return (
        <Pressable onPress={() => { rotate.value = rotate.value ? 0 : 1 }}>
            <View style={[styles.viewCard, isDarkTheme ? { backgroundColor: '#28282B' } : { backgroundColor: '#E5E4E2' }]}>
                <View style={[styles.viewNumberOfCard, isDarkTheme ? { backgroundColor: '#36454F' } : { backgroundColor: '#C0C0C0' }]}>
                    <Text style={[styles.nubmerOfCard, isDarkTheme ? { color: '#FFFFFF'} : { color: '#000'}]}>4324 6456 1234 5672</Text>
                    <TouchableOpacity>
                        <View style={styles.coppyIcon}>
                            <Icon size={22} name="content-copy" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.cvc, isDarkTheme ? { backgroundColor: '#36454F' } : { backgroundColor: '#C0C0C0' }]}>
                        <Text style={[styles.nubmerOfCard, isDarkTheme ? { color: '#FFFFFF'} : { color: '#000'}]}>432</Text>
                        <TouchableOpacity>
                            <View style={{ marginTop: 9 }}>
                                <Icon size={22} name="content-copy" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.attentionText}>This is CVC2/CVV2-code. {"\n"}Do not tell anyone about him.</Text>
                </View>
                <Text style={styles.finalDate}>Can be used until 05/2026.</Text>
            </View>
        </Pressable>
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
        width: undefined,
        height: undefined,
        marginLeft: 40,
        marginRight: 40,
        aspectRatio: 135 / 76,
        borderRadius: 20,
    },
    viewNumberOfCard: {
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 14,
        marginTop: 14,
        borderRadius: 12,
    },
    cvc: {
        flexDirection: 'row',
        width: '26%',
        justifyContent: 'flex-start',
        marginStart: 14,
        marginEnd: 8,
        marginTop: 14,
        borderRadius: 12,
    },
    nubmerOfCard: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    attentionText: {
        color: '#6F6F6F',
        fontWeight: "bold",
        fontSize: 12,
        marginTop: 18
    },
    coppyIcon: {
        marginTop: 9,
        marginStart: 60
    },
    finalDate: {
        color: '#6f6f6f',
        fontWeight: "bold",
        marginTop: 40,
        marginStart: 16
    }
});

export default BacksideMainCard;