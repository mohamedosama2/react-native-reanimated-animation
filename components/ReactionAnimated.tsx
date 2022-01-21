import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  color,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';

const ReactionAnimated = () => {
  const [state, setState] = useState(1);
  const sv1 = useSharedValue(0);
  const sv2 = useSharedValue(0);

  //   useAnimatedReaction(
  //     () => {
  //       return sv1.value * state;
  //     },
  //     (result, previous) => {
  //       console.log('Result', result);
  //       console.log('Privios', previous);
  //       if (result !== previous) {
  //         console.log('Inside');
  //         sv2.value = result - 5;
  //       }
  //     },
  //   );
  //   useAnimatedReaction(
  //     //will not run since it  depends on sv2  value && sv1 is changeing
  //     () => {
  //       return sv2.value * state;
  //     },
  //     (result, previous) => {
  //       console.log('Result', result);
  //       console.log('Privios', previous);
  //       if (result !== previous) {
  //         console.log('Inside');
  //         sv1.value = result - 5;
  //       }
  //     },
  //   );
  //   useAnimatedReaction(
  //     ///infinite render because  sv1 change then=> render then =>sv1 change ......etc
  //     () => {
  //       return sv1.value * state;
  //     },
  //     (result, previous) => {
  //       console.log('Result', result);
  //       console.log('Privios', previous);
  //       if (result !== previous) {
  //         console.log('Inside');
  //         sv1.value = result - 5;
  //       }
  //     },
  //   );
  //...
  return (
    <>
      <Text>HI</Text>
      <Pressable onPress={() => (sv1.value = sv1.value + 20)}>
        <Text
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            borderRadius: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
            textAlignVertical: 'center',
            color: '#fff',
            textAlign: 'center',
          }}>
          Change
        </Text>
      </Pressable>
    </>
  );
};

export default ReactionAnimated;
