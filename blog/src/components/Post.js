import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(post)}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.wrap}>
            <Text style={styles.text}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
    paddingHorizontal: 8
  },
  image: {
    width: "100%",
    height: 200
  },
  wrap: {
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "roboto-light"
  }
});

export default Post;
