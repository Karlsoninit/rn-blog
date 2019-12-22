import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
// import { DATA } from "../data";
import { IconHeaderButton } from "../components/AppHeaderIcon";
import { toggleBooked, deletePost } from "../store/postAction";

const PostScreen = ({ navigation }) => {
  const post = useSelector(state =>
    state.post.allPost.find(elem => elem.id === navigation.getParam("postId"))
  );
  // const post = DATA.find(elem => elem.id === navigation.getParam("postId"));
  const postId = navigation.getParam("postId");

  const dispatch = useDispatch();

  const booked = useSelector(state =>
    state.post.bookedPost.some(post => post.id === postId)
  );

  // console.log("b", booked);

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toggle: toggleHandler });
  }, [toggleHandler]);

  const onHandleDeletePost = () => {
    Alert.alert(
      `Delete post ${navigation.getParam("postId")}`,
      "are you shure?",
      [
        {
          text: "Cancel",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            dispatch(deletePost(postId));
            navigation.navigate("Main");
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    // console.log("withot post");
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: post.img }} />
        <View>
          <Text style={styles.text}>{post.text}</Text>
        </View>
        <Button
          title="Delete"
          color={THEME.DANGER_COLOR}
          onPress={() => onHandleDeletePost()}
        />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const getDate = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const toggle = navigation.getParam("toggle");

  const iconName = booked ? "ios-star" : "md-star-outline";
  return {
    headerTitle: "Пост от " + new Date(getDate).toLocaleTimeString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
        <Item title={"favorites"} iconName={iconName} onPress={toggle} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: "100%",
    height: 200
  },
  text: {
    fontSize: 20
  }
});
export default PostScreen;
