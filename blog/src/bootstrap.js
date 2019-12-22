import * as Font from "expo-font";

export const bootstrap = async () => {
  await Font.loadAsync({
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "roboto-light": require("../assets/fonts/Roboto-Light.ttf"),
    "roboto-medium": require("../assets/fonts/Roboto-Medium.ttf")
  });
};
