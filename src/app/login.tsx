import { Alert, Pressable, Text, View } from "react-native";
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
import { supabase } from "@/lib/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      router.replace("/primeiratela");
    }
    setLoading(false);
  };

  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={{ flex: 1, gap: 45, paddingHorizontal: wp(5) }}>
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
            Olá,
          </Text>
          <Text
            style={{
              fontSize: hp(4),
              fontWeight: "700",
              color: theme.colors.text,
            }}
          >
            Bem vindo de volta
          </Text>
        </View>

        <View style={{ gap: 25 }}>
          <Text
            style={{
              fontSize: hp(1.5),
              color: theme.colors.text,
              marginTop: -15,
            }}
          >
            Faça o login para continuar
          </Text>
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
          <Text className="text-right font-semibold text-black">
            Esqueceu a senha?
          </Text>
          <Button
            title="Fazer login"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={handleLogin}
            loading={loading}
            disabled={!email || !password}
          />
        </View>
        <View className="flex flex-row gap-1 items-center justify-center">
          <Text className="text-center">Não possui cadastro?</Text>
          <Pressable onPress={() => router.push("/signUp")}>
            <Text className="text-center text-green-500 font-bold">
              Criar Cadastro
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
