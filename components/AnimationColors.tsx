import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {mixColor} from 'react-native-redash';

const AnimationColors = () => {
  const progress = useSharedValue(0);

  //   const style = useAnimatedStyle(() => {
  //     const color = interpolateColor(progress.value, [0, 1], ['red', 'green']);
  //     return {backgroundColor: color};
  //   });
  const backgroundColor = useDerivedValue(
    () => mixColor(progress.value, '#ff3884', '#38ffb3'), //easier way
  );

  const style = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  return (
    <>
      <Animated.View
        style={[
          {width: 200, height: 200, borderRadius: 20},
          style,
        ]}></Animated.View>
      <Pressable
        onPress={() =>
          (progress.value = withSpring(progress.value === 1 ? 0 : 1))
        }>
        <Text
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 100,
            borderRadius: 20,
            textAlign: 'center',
            color: '#fff',
            textAlignVertical: 'center',
          }}>
          Change Color
        </Text>
      </Pressable>
    </>
  );
};

export default AnimationColors;

const styles = StyleSheet.create({});
