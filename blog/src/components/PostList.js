import React from "react";
import Post from "./Post";
import { View, FlatList } from "react-native";

const PostList = ({ data, onOpen }) => (
  <View>
    <FlatList
      data={data}
      keyExtractor={post => post.id}
      renderItem={({ item }) => {
        return <Post post={item} onOpen={onOpen} />;
      }}
    />
  </View>
);

export default PostList;
