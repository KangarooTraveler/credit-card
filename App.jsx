import React, { useEffect, useState, useRef, Fragment, createContext } from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView, useColorScheme } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ScrollColorCard from './assets/components/ScrollColor';
import MainCard from './assets/components/MainCard';
import ScrollDesignCard from './assets/components/ScrollDesign';
import BtnSave from './assets/components/ButtonSave';
import BacksideMainCard from './assets/components/BacksideCard';

const App = () => {

  const [selectedBackground, setSelectedBackground] = useState();
  const [selectedDesign, setSelectedDesign] = useState();

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const handleColorChange = (color) => {
    setSelectedBackground(color);
  };

  const handleDesignChange = (design) => {
    setSelectedDesign(design);
  };

  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180])
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 })
        }
      ]
    }
  })

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360])
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 })
        }
      ]
    }
  })

  return (
    <SafeAreaView style={[{ flex: 1 }, isDarkTheme ? { backgroundColor: '#141414' } : { backgroundColor: '#F5F5F5' }]}>
      <View style={[styles.container, isDarkTheme ? { backgroundColor: '#141414' } : { backgroundColor: '#F5F5F5' }]}>
        <View style={{ width: '100%', height: '100%' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.submitText, isDarkTheme ? { color: '#fff' } : { color: '#000' }]}>Design your virtual card</Text>
            <View>
              <Animated.View style={[styles.frontcard, frontAnimatedStyles]}>
                <MainCard image={selectedBackground} design={selectedDesign} rotate={rotate} />
              </Animated.View>
              <Animated.View style={[styles.backCard, backAnimatedStyles]}>
                <BacksideMainCard rotate={rotate} />
              </Animated.View>
            </View>
            <Text style={[styles.titleChoose, isDarkTheme ? { color: '#fff' } : { color: '#000' }]}>Select color</Text>
            <ScrollColorCard onColorChange={(color) => handleColorChange(color)} />
            <Text style={[styles.titleChoose, isDarkTheme ? { color: '#fff' } : { color: '#000' }]}>Add shapes</Text>
            <ScrollDesignCard onDesignChange={(design) => handleDesignChange(design)} />
            <Text style={styles.descriptionText}>Don't worry. You can always change the design of your virtual card later. Just enter the settings.</Text>
            <BtnSave />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frontcard: {
    position: 'absolute',
    backfaceVisibility: 'hidden'
  },
  backCard: {
    backfaceVisibility: "hidden"
  },
  container: {
    flex: 1,
    //backgroundColor: "#141414",
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
    textAlign: 'center',
    fontWeight: "bold",
    marginRight: 58,
    marginLeft: 58,
    fontSize: 18,
    marginBottom: 28,
    marginTop: 18,
  },
  titleChoose: {
    color: '#fff',
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 58,
  },
  descriptionText: {
    color: '#6F6F6F',
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 48,
    marginBottom: 28
  },
  view: {
    flex: 1,
    height: '100%'
  },
});

export default App;