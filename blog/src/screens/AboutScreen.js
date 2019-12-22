import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconHeaderButton } from "../components/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const AboutScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>AboutScreen</Text>
  </View>
);

AboutScreen.navigationOptions = ({ navigation }) => ({
  title: "About",
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AboutScreen;
