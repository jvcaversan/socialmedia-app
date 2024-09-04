import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";

interface LoadingProps {
  size?: ActivityIndicatorProps["size"];
  color?: string;
}

const Loading = ({
  size = "large",
  color = theme.colors.primary,
}: LoadingProps) => {
  return (
    <View className="justify-center items-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
