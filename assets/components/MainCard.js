import {
    StyleSheet,
    View,
    Image,
    Text,
    Pressable
} from 'react-native';

const MainCard = ({
    image,
    design,
    rotate
}) => {
    //<Text styles={styles.numberCard}>****4313</Text>
    image = image || require('./ColorImages/Green.png');
    design = design || require('./ColorImages/SimpleLG.png');

    return (
        <Pressable onPress={() => { rotate.value = rotate.value ? 0 : 1 }}>
            <View style={styles.viewCard}>
                <Image style={{ flex: 1, width: '100%', height: '100%', borderRadius: 20, position: 'absolute' }} source={image} />
                <View style={{ justifyContent: 'flex-end', width: '100%', height: '100%' }}>
                    <Text style={styles.submitText}>$9,999</Text>
                    <Image style={{ width: 160, height: 130, borderBottomLeftRadius: 20 }} source={design} />
                </View>
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
        fontWeight: "bold",
        fontSize: 28,
        paddingBottom: 32,
        paddingStart: 32,
        position: 'absolute'
    },
    numberCard: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 28,
        paddingBottom: 32,
        paddingStart: 32,
        position: 'absolute',
        alignContent: 'flex-end'
    },
    view: {
        flex: 1,
        height: '100%'
    },
    viewCard: {
        width: 300,
        height: 176,
        marginLeft: 40,
        marginRight: 40,
        aspectRatio: 135 / 76,
        backgroundColor: '#91A6FF',
        borderRadius: 20,
    }
});

export default MainCard;