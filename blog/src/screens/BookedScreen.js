import React from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { IconHeaderButton } from "../components/AppHeaderIcon";
import PostList from "../components/PostList";

const BookedScreen = ({ navigation }) => {
  const openPostHAndler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      post,
      booked: post.booked
    });
  };

  const bookedPost = useSelector(state => state.post.bookedPost);

  return <PostList data={bookedPost} onOpen={openPostHAndler} />;
};

BookedScreen.navigationOptions = {
  headerTitle: "Favorites",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item
        title={"drawer menu"}
        iconName={"ios-menu"}
        onPress={() => console.log("press Drower")}
      />
    </HeaderButtons>
  )
};

export default BookedScreen;
