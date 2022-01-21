/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimationColors from './components/AnimationColors';

import DrivedAnimation from './components/DrivedAnimation';
import GesturesAnimation from './components/GesturesAnumation';
import InterpolateAnimation from './components/InterolateAnimation';
import LayoutAnimation from './components/LayoutAnimation';
import ReactionAnimated from './components/ReactionAnimated';
import SvgAnimation from './components/SvgAnimation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <DrivedAnimation /> */}
      {/* <GesturesAnimation
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
      /> */}
      {/* <LayoutAnimation /> */}
      {/* <ReactionAnimated /> */}
      {/* <SvgAnimation /> */}
      {/* <InterpolateAnimation /> */}
      <AnimationColors />
    </SafeAreaView>
  );
};

export default App;
