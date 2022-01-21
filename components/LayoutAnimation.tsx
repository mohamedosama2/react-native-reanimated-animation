import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  TextInput,
  ViewStyle,
} from 'react-native';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
  SequencedTransition,
  Transition,
  ZoomIn,
} from 'react-native-reanimated';

interface EventParticipant {
  name: string;
  id: string;
}

const styles = {
  participantView: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffbeb',
  } as ViewStyle,
  listView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 30,
  } as ViewStyle,
  bottomRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  } as ViewStyle,
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
};

function Participant({
  name,
  onRemove,
}: {
  name: string;
  onRemove: () => void;
}): React.ReactElement {
  return (
    <Animated.View
      entering={ZoomIn}
      exiting={LightSpeedOutRight.duration(200)}
      layout={Layout.duration(1000)}
      style={[styles.participantView]}>
      <Text>{name}</Text>
      <Button title="Remove" color="red" onPress={onRemove} />
    </Animated.View>
  );
}

export default function LayoutAnimation(): React.ReactElement {
  const [inputValue, setInputValue] = useState('');
  const [participantList, setParticipantList] = useState<EventParticipant[]>([
    {name: 'loutaa', id: '1'},
    {name: 'loutaa', id: '2'},
    {name: 'loutaa', id: '3'},
    {name: 'loutaa', id: '4'},
    {name: 'loutaa', id: '5'},
    {name: 'loutaa', id: '6'},
    {name: 'loutaa', id: '7'},
  ]);

  const addParticipant = () => {
    setParticipantList(
      [{name: inputValue, id: Date.now().toString()}].concat(participantList),
    );
  };

  const removeParticipant = (id: string) => {
    setParticipantList(
      participantList.filter(participant => participant.id !== id),
    );
  };

  return (
    <View style={[styles.listView]}>
      <ScrollView style={[{width: '100%'}]}>
        {participantList.map(participant => (
          <Participant
            key={participant.id}
            name={participant.name}
            onRemove={() => removeParticipant(participant.id)}
          />
        ))}
      </ScrollView>

      <View style={[styles.bottomRow]}>
        <View style={[styles.textInput]}>
          <Text>Add participant: </Text>
          <TextInput
            placeholder="Name"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        <Button
          title="Add"
          disabled={inputValue === ''}
          onPress={addParticipant}
        />
      </View>
    </View>
  );
}
