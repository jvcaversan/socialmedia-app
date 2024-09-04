import {
  View,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import React from "react";
import { StyleProp } from "react-native";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import Loading from "./Loading";

interface ButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  hasShadow?: boolean;
  disabled?: boolean;
}

const shadowStyle = {
  shadowColor: theme.colors.dark,
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  elevation: 4,
};

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  hasShadow = true,
  disabled = false,
}: ButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={!disabled ? onPress : undefined} // Desativa a ação do botão se disabled
      style={[
        styles.button,
        buttonStyle,
        hasShadow && shadowStyle,
        disabled && styles.disabledButton, // Aplica o estilo desativado
      ]}
    >
      <Text
        style={[
          styles.text,
          textStyle,
          disabled && styles.disabledText, // Aplica o estilo desativado ao texto
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
    // padding: 10,
  },
  text: {
    fontSize: hp(2.5),
    color: "white",
    fontWeight: "700",
  },
  disabledButton: {
    backgroundColor: theme.colors.primary, // Define a cor de fundo quando desativado
    opacity: 0.5, // Define a opacidade para dar um visual de desativado
  },
  disabledText: {
    color: theme.colors.text, // Define a cor do texto quando desativado
  },
});
