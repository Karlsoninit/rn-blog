import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

export const IconHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={24} />
);
