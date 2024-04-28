import React, {FC} from 'react';
import {Text, ActivityIndicator, FlatList, SafeAreaView} from 'react-native';

import {useGetArticlesQuery} from '../../../bus/article/slice.ts';
import {styles} from './styles.ts';

import {AudioItem} from '../../components/Audio/Audio.tsx';

export const Audio: FC = () => {
  const {data, isLoading, isError} = useGetArticlesQuery();

  const renderAudioItem = ({item}) => {
    return (
      <>
        <AudioItem item={item} />
      </>
    );
  };
  return (
    <SafeAreaView>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Something went wrong...</Text>}
      {data?.audio && (
        <FlatList
          data={data?.audio}
          numColumns={2}
          columnWrapperStyle={[styles.row, {marginBottom: 20}]}
          contentContainerStyle={styles.listContainer}
          renderItem={renderAudioItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};
