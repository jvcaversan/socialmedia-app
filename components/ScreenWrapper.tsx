import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ScreenWrapperProps {
  children: ReactNode;
  bg?: string;
}

const ScreenWrapper = ({ children, bg }: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View className="flex-1" style={{ backgroundColor: bg, paddingTop }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
