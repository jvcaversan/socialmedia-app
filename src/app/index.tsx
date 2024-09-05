import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.replace("/primeiratela"); // Redireciona para a tela inicial
      } else {
        router.replace("/login"); // Redireciona para a tela de login
      }
    };

    checkUser();
  }, []);

  return (
    <SafeAreaView>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="welcome" onPress={() => router.push("/welcome")} />
    </SafeAreaView>
  );
}
