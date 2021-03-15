import React, { Component } from "react";
import { StyleSheet, Text, Dimensions, SafeAreaView } from "react-native";
import { Card } from "native-base";
import InViewPort from "../InViewPort";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

class CarouselItem extends Component {
  pauseVideo = () => {
    if (this.video) {
      this.video.pauseAsync();
    }
  };

  playVideo = () => {
    if (this.video) {
      this.video.playAsync();
    }
  };

  handlePlaying = (isVisible) => {
    isVisible ? this.playVideo() : this.pauseVideo();
  };

  render() {
    const { item } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <InViewPort onChange={this.handlePlaying}>
          <Card style={{ borderRadius: 20 }}>
            <Video
              ref={(ref) => {
                this.video = ref;
              }}
              source={{ uri: item.url }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              useNativeControls
              
              style={{ width: width - 20, height: 400, borderRadius: 20 }}
            />
            <Text style={styles.desc}> {item.desc} </Text>
          </Card>
        </InViewPort>
      </SafeAreaView>
    );
  }
}

export default CarouselItem;

const styles = StyleSheet.create({
  desc: {
    marginVertical: 10,
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
    padding: 5,
    position: "absolute",
  },
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});
