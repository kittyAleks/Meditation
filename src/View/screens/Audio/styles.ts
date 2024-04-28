import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    margin: 5,
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  description: {
    fontSize: 14,
    padding: 5,
  },
  // ArticleDetails
  container: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
});
