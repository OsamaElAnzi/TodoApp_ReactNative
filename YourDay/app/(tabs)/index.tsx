import { Image, StyleSheet, Platform, View, Pressable, Text } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <>
    <View style={styles.title}>
      <ThemedText type="title">Your Day</ThemedText>
    </View>
    <View style={styles.mainContainer}>
      <Pressable style={styles.button}>
      <AntDesign name="plus" size={24} color="black" />
      </Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 36,
    gap: 8,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10
  }

});
