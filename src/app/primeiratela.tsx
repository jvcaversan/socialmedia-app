import { View, Text, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { supabase } from "@/lib/supabase";

const primeiratela = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erro ao fazer logout:", error.message);
    } else {
      console.log("Usuário deslogado com sucesso");
      // redirecione o usuário para a tela de login, por exemplo
    }
  };

  return (
    <ScreenWrapper bg="white">
      <Pressable onPress={handleLogout}>
        <Text>DESLOGAR</Text>
      </Pressable>
    </ScreenWrapper>
  );
};

export default primeiratela;
