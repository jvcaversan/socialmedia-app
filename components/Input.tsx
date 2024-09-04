import {
  View,
  Text,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";

interface InputProps extends TextInputProps {
  containerStyles?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  inputRef?: React.RefObject<TextInput>;
}

const Input = ({ containerStyles, icon, inputRef, ...rest }: InputProps) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});
