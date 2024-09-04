import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import Input from "@/components/Input";
import { AntDesign, Octicons } from "@expo/vector-icons";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, isLoading] = useState(false);

  const handleLogin = async () => {};

  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={{ flex: 1, gap: 30, paddingHorizontal: wp(5) }}>
        <BackButton
          buttonStyle={{
            alignSelf: "flex-start",
            padding: 5,
            borderRadius: theme.radius.sm,
            backgroundColor: "rgba(0,0,0,0.07)",
          }}
        />

        <View>
          <Text
            style={{
              fontSize: hp(4),
              fontWeight: "700",
              color: theme.colors.text,
            }}
          >
            Vamos
          </Text>
          <Text
            style={{
              fontSize: hp(4),
              fontWeight: "700",
              color: theme.colors.text,
            }}
          >
            Começar!
          </Text>
        </View>

        <View style={{ gap: 25 }}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Preencha os campos para criar sua conta!
          </Text>
          <Input
            placeholder="Nome"
            icon={<AntDesign name="user" size={24} color={theme.colors.text} />}
            onChangeText={setName}
            value={name}
          />
          <Input
            placeholder="Email"
            icon={<AntDesign name="mail" size={24} color={theme.colors.text} />}
            onChangeText={setEmail}
            value={email}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            icon={<Octicons name="key" size={24} color={theme.colors.text} />}
            onChangeText={setPassword}
            value={password}
          />

          <Button
            title="Criar Conta"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={handleLogin}
            loading={loading}
            disabled={!email || !password || !name}
          />
        </View>
        <View className="flex flex-row gap-1 items-center justify-center">
          <Text className="text-center">Já possui cadastro?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text className="text-center text-green-500 font-bold">
              Efetuar Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
