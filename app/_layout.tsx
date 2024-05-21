import { Stack } from "expo-router";
import { register } from "@videosdk.live/react-native-sdk";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    register();
  })
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
