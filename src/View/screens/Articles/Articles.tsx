import React, {FC} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useGetArticlesQuery} from '../../../bus/article/slice.ts';
import {ArticleItem} from '../../components/Articles/Article.tsx';
import {styles} from './styles.ts';
import {useNavigation} from '@react-navigation/native';

export const Articles: FC = () => {
  const navigation = useNavigation();

  const {data, isLoading, isError} = useGetArticlesQuery();

  const renderArticleItem = ({item}) => (
    <ArticleItem item={item} navigation={navigation} />
  );

  return (
    <View>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Something went wrong...</Text>}
      {data?.articles && (
        <FlatList
          data={data?.articles}
          numColumns={2}
          columnWrapperStyle={[styles.row, {marginBottom: 20}]}
          contentContainerStyle={styles.listContainer}
          renderItem={renderArticleItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};
