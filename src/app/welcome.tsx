import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import Button from "@/components/Button";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View
        className="flex-1 items-center justify-around bg-white"
        style={{ paddingHorizontal: wp(4) }}
      >
        <Image
          style={{ height: hp(30), width: wp(100) }}
          className="items-center"
          resizeMode="contain"
          source={require("../../assets/images/welcome.png")}
        />

        <View className="gap-5">
          <Text
            style={{
              color: theme.colors.text,
              fontSize: hp(4),
              fontWeight: "800",
            }}
            className="text-center"
          >
            LinkUp
          </Text>
          <Text
            style={{
              paddingHorizontal: wp(10),
              fontSize: hp(1.7),
              color: theme.colors.text,
            }}
            className="text-center"
          >
            onde todos acham sua casa e cada imagem conta uma história
          </Text>
        </View>
        <View className="gap-7 w-full">
          <Button
            title="Começar Agora"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => {}}
          />
          <View className="flex flex-row gap-1 items-center justify-center">
            <Text className="text-center">Já possui cadastro?</Text>
            <Pressable>
              <Text className="text-center text-green-500 font-bold">
                Efetuar Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
