import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const ScrollBar = ({ scrollY, contentHeight, containerHeight }) => {
  const scrollIndicatorHeight = containerHeight * (containerHeight / contentHeight);
  const translateY = Animated.multiply(scrollY, containerHeight / contentHeight);

  return (
    <View style={styles.scrollBarContainer}>
      <Animated.View
        style={[
          styles.scrollIndicator,
          {
            height: scrollIndicatorHeight,
            transform: [{ translateY }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBarContainer: {
    width: 8,
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'absolute',
    right: 4,
    top: 0,
  },
  scrollIndicator: {
    width: '100%',
    backgroundColor: '#FF6B3D',
    borderRadius: 4,
  },
});

export default ScrollBar;
