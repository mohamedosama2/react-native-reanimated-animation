import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useAnimatedReaction,
} from 'react-native-reanimated';
// import {Text} from 'react-native-svg';

export const HEADER_IMAGE_HEIGHT = Dimensions.get('window').width / 3;

export default function InterpolateAnimation() {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });
  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 100], [1, 2], {
      //   extrapolateLeft: Extrapolate.CLAMP,
      extrapolateRight: Extrapolate.CLAMP,
    });
    // console.log(scale);
    return {
      transform: [{scale: scale}],
    };
  });

  //   useAnimatedReaction(
  //     () => scrollY.value,
  //     result => console.log(result),
  //   );
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            // position: 'absolute',
            // top: 20,
            // left: 0,
            width: 100,
            height: 100,
            backgroundColor: 'blue',
          },
          animatedStyles,
        ]}
      />
      {/* <View style={{flex: 1}}> */}
      <Animated.ScrollView
        scrollEventThrottle={1}
        // contentContainerStyle={{flexGrow: 1}}
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        style={[
          {
            // height: 1000,
            // width: 200,
            borderWidth: 1,
            //   backgroundColor: 'orange',
          },
        ]}
        onScroll={scrollHandler}>
        <Text style={{height: 900, fontSize: 20}}> ssss </Text>
      </Animated.ScrollView>
      {/* </View> */}
    </View>
  );
}
