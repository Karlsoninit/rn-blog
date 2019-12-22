import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import shortId from "shortid";
import { IconHeaderButton } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { addPost } from "../store/postAction";

const CreateScreen = ({ navigation }) => {
  const [post, setPost] = useState("");
  const dispatch = useDispatch();

  const savePost = () => {
    console.log("savePost");
    console.log(post);

    const img =
      "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg";

    dispatch(
      addPost({
        id: shortId(),
        img: img,
        text: post,
        date: new Date().toJSON(),
        booked: false
      })
    );
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CreateScreen</Text>
      <TextInput
        placeholder="enter your post"
        value={post}
        onChangeText={setPost}
        multiline
      />
      <Image
        style={styles.image}
        source={{
          uri:
            "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg"
        }}
      />
      <Button title="create" onPress={savePost} />
    </View>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  title: "Create",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  title: {},
  image: {
    width: "100%",
    height: 200
  }
});
export default CreateScreen;
