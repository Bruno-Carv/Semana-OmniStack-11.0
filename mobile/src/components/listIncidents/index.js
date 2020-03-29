import React, { useState } from 'react';
import Constants from 'expo-constants';
import {
  Animated,
  Dimensions,
  Platform,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

const HEADER_EXPANDED_HEIGHT = Constants.statusBarHeight + 200;
const HEADER_COLLAPSED_HEIGHT = 80;

const { width: SCREEN_WIDTH } = Dimensions.get("screen")

export default function ListIncidents({header, data, renderItem, keyExtractor, showsHorizontalScrollIndicator, onEndReached, onEndReachedThreshold, showsVerticalScrollIndicator}) {
  
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    });
    const heroTitleOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.View style={{textAlign: 'center', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>{header}</Animated.View>
        </Animated.View>
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  y: scrollY
                }
              }
            }])
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          scrollEventThrottle={16}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 32,
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT,
  },
  header: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999,
  }
});
