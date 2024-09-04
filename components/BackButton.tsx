import { Pressable, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";

interface BackButtonProps {
  onPress?: () => void;
  iconName?: any;
  iconSize?: number;
  iconColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

const BackButton = ({
  onPress,
  iconName = "arrowleft",
  iconSize = 24,
  iconColor = theme.colors.text,
  buttonStyle,
}: BackButtonProps) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={buttonStyle}>
      <AntDesign name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default BackButton;
