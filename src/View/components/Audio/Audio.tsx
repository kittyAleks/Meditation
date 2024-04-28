import React, {FC} from 'react';
import {Dimensions, TouchableOpacity, Text, Image} from 'react-native';

import {styles} from '../../screens/Articles/styles.ts';
import {useBottomSheet} from '../BottomSheet.tsx';
const {width} = Dimensions.get('window');
const cardMargin = 10;
const CARD_WIDTH = width / 2 - cardMargin * 3;

type AudioItemProps = {
  item: {
    id: number;
    name: string;
    title: string;
  };
};

export const AudioItem: FC<AudioItemProps> = ({item}) => {
  const {openBottomSheet} = useBottomSheet();
  return (
    <TouchableOpacity
      style={[styles.card, {width: CARD_WIDTH}]}
      onPress={() => openBottomSheet(item)}>
      <Image
        style={[styles.image, {height: CARD_WIDTH * 0.8}]}
        source={require('../../../../src/assets/music.png')}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>
        {item.title.length > 100
          ? `${item.title.substring(0, 100)}...`
          : item.title}
      </Text>
    </TouchableOpacity>
  );
};
