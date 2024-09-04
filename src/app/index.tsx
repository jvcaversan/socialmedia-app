import { useRouter } from "expo-router";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="welcome" onPress={() => router.push("/welcome")} />
    </SafeAreaView>
  );
}
