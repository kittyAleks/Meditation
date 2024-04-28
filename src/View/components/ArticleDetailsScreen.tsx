import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import Markdown from 'react-native-markdown-display';
import {styles} from '../screens/Articles/styles.ts';

type ArticleDetailsProps = {
  route: {
    params: {
      article: {
        id: number;
        title: string;
        description: string;
      };
    };
  };
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({route}) => {
  const {article} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Markdown>{article.description}</Markdown>
    </ScrollView>
  );
};
