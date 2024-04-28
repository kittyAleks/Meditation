import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import TrackPlayer, {State, Track} from 'react-native-track-player';

import {styles} from './styles.ts';

const BottomSheetContext = createContext({
  openBottomSheet: () => {},
  closeBottomSheet: () => {},
});

export const useBottomSheet = () => useContext(BottomSheetContext);

const track: Track = {
  id: '1', // Унікальний ідентифікатор для треку
  url: 'https://astrodev.ams3.cdn.digitaloceanspaces.com/i-center-my-energy-a_3c1e54c0c6baa20c20ca80248cb3c335.mp3',
  title: 'Track Title',
  artist: 'Track Artist',
  artwork: 'https://example.com/artwork.png', // Ви можете замінити цей URL на URL обкладинки треку
};

const BottomSheetProvider = ({children}) => {
  const [currentItem, setCurrentItem] = useState(null);
  const bottomSheetRef = useRef(null);
  const [playerState, setPlayerState] = useState(State.None);

  const openBottomSheet = useCallback(item => {
    setCurrentItem(item);
    bottomSheetRef.current?.present();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.dismiss();
    TrackPlayer.pause();
  }, []);

  useEffect(() => {
    const setupTrackPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(track);
    };

    setupTrackPlayer();
  }, [currentItem]);
  useEffect(() => {
    TrackPlayer.stop();
  }, [currentItem]);

  const onPlayPausePress = async () => {
    const currentState = await TrackPlayer.getState();
    if (currentState === State.Playing) {
      setPlayerState(currentState);
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
      setPlayerState(currentState);
    }
  };

  return (
    <BottomSheetContext.Provider value={{openBottomSheet, closeBottomSheet}}>
      <BottomSheetModalProvider>
        {children}
        <BottomSheetModal
          ref={bottomSheetRef}
          index={1}
          snapPoints={['25%', '50%']}
          backgroundStyle={{backgroundColor: 'white'}}>
          {currentItem && (
            <View style={styles.container}>
              <Image source={{uri: currentItem.icon}} style={styles.icon} />
              <Text style={styles.title}>{currentItem.name}</Text>
              <Text style={styles.description}>{currentItem.title}</Text>
              <TouchableOpacity
                onPress={onPlayPausePress}
                style={styles.button}>
                <Text style={styles.buttonText}>
                  {playerState !== State.Playing ? 'Pause' : 'Play'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
};

export default BottomSheetProvider;
