import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import AboutScreen from "../screens/AboutScreen";
import CreateScreen from "../screens/CreateScreen";
import BookedScreen from "../screens/BookedScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";

const navigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
  }
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  navigationOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen
  },
  navigationOptions
);

const buttomConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: "Menu",
      tabBarIcon: info => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      )
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: info => {
        return (
          <Ionicons name="ios-star-half" size={25} color={info.tintColor} />
        );
      }
    }
  }
};

const ButtomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(buttomConfig, {
        activeTintColor: "#fff",
        shifting: true,
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR
        }
      })
    : createBottomTabNavigator(buttomConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      });

const AboutScreenNavigation = createStackNavigator(
  {
    About: AboutScreen
  },
  navigationOptions
);
const CreateScreenNavigation = createStackNavigator(
  {
    Create: CreateScreen
  },
  navigationOptions
);

const drowerNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: ButtomNavigator,
      navigationOptions: {
        drawerLabel: "main menu",
        drawerIcon: <Ionicons name="ios-menu" size={25} />
      }
    },
    About: {
      screen: AboutScreenNavigation,
      navigationOptions: {
        drawerLabel: "about application",
        drawerIcon: <Ionicons name="md-mail-unread" size={25} />
      }
    },
    Create: {
      screen: CreateScreenNavigation,
      navigationOptions: {
        drawerLabel: "create post",
        drawerIcon: <Ionicons name="ios-create" size={25} />
      }
    }
  },
  {
    drawerContentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: "roboto-bold"
      }
    }
  }
);

export const AppNavigation = createAppContainer(drowerNavigator);
