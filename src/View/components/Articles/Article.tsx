import React, {FC} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

import {styles} from '../../screens/Articles/styles.ts';
const {width} = Dimensions.get('window');
const cardMargin = 10;
const CARD_WIDTH = width / 2 - cardMargin * 3;

type ArticleItemProps = {
  item: {
    id: number;
    title: string;
    description: string;
  };
  navigation: any;
};

export const ArticleItem: FC<ArticleItemProps> = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {width: CARD_WIDTH}]}
      onPress={() => navigation.navigate('ArticleDetails', {article: item})}>
      <Image
        style={[styles.image, {height: CARD_WIDTH * 0.8}]}
        source={require('../../../../src/assets/img.png')}
      />
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.description}>
        {item.description.length > 100
          ? `${item.description.substring(0, 100)}...`
          : item.description}
      </Text>
    </TouchableOpacity>
  );
};
