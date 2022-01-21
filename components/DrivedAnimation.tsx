import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const DrivedAnimation = () => {
  const animation = useSharedValue(0);
  const width = useDerivedValue(() => animation.value * 3);

  const style = useAnimatedStyle(() => ({
    height: animation.value,
    width: animation.value,
    backgroundColor: 'red',
  }));
  const drivedStyle = useAnimatedStyle(() => ({
    height: 100,
    width: width.value,
    backgroundColor: 'green',
  }));
  return (
    <>
      <Animated.View {...{style}} />
      <Animated.View style={drivedStyle} />
      <Pressable
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={
          () =>
            (animation.value = withTiming(animation.value === 100 ? 0 : 100, {
              duration: 300,
              easing: Easing.ease,
            }))
          // (animation.value = withRepeat(withTiming(100), 6, true))
        }>
        <Text style={{color: '#fff', textAlign: 'center'}}>Animate</Text>
      </Pressable>
    </>
  );
};

export default DrivedAnimation;
