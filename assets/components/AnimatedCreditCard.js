import MainCard from './assets/components/MainCard';
import BacksideMainCard from './assets/components/BacksideCard';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';

const AnimatedCard = () => {
    const rotate = useSharedValue(0);
    const frontAnimatedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [0, 180])
      return {
        transform: [
          {
            rotateY: withTiming(`${rotateValue}deg`, { duration: 500 })
          }
        ]
      }
    })
    const backAnimatedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [180, 360])
      return {
        transform: [
          {
            rotateY: withTiming(`${rotateValue}deg`, { duration: 500 })
          }
        ]
      }
    })
    return (
        <View>
            <View>
                <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
                    <MainCard image={selectedBackground} rotate={rotate} />
                </Animated.View>
                <Animated.View style={[styles.backCard, backAnimatedStyles]}>
                    <BacksideMainCard rotate={rotate} />
                </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    frontcard: {
        position: "absolute",
        //  backfaceVisibility: 'hidden'
    },
    backCard: {
        //  backfaceVisibility: "hidden"
    }
})

export default AnimatedCard;