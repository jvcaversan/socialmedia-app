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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name,
        },
      },
    });
    console.log(session?.user);

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
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
          <Text
            style={{
              fontSize: hp(1.5),
              color: theme.colors.text,
              marginTop: -15,
            }}
          >
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
          <View style={{ position: "relative" }}>
            <Input
              placeholder="Senha"
              secureTextEntry={!showPassword} // Alterna a visibilidade
              icon={<Octicons name="key" size={24} color={theme.colors.text} />}
              onChangeText={setPassword}
              value={password}
            />
            <Pressable
              style={{
                position: "absolute",
                right: 10, // Alinha o ícone no lado direito do Input
                top: 19, // Ajuste conforme necessário
              }}
              onPress={() => setShowPassword(!showPassword)} // Alterna entre mostrar e esconder a senha
            >
              <AntDesign
                name={showPassword ? "eye" : "eyeo"} // Muda o ícone com base na visibilidade da senha
                size={24}
                color={theme.colors.text}
              />
            </Pressable>
          </View>

          <Button
            title="Criar Conta"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={handleSignUp}
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
