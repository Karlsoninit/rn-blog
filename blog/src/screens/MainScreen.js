import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { IconHeaderButton } from "../components/AppHeaderIcon";
import PostList from "../components/PostList";
import { loadPosts } from "../store/postAction";

const MainScreen = ({ navigation }) => {
  const openPostHAndler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      post,
      booked: post.booked
    });
  };

  const dispatch = useDispatch();
  const allPost = useSelector(state => state.post.allPost);
  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return <PostList data={allPost} onOpen={openPostHAndler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мой блог",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item
        title={"Take photo"}
        iconName={"ios-camera"}
        onPress={() => navigation.push("Create")}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item
        title={"drawer menu"}
        iconName={"ios-menu"}
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

export default MainScreen;
