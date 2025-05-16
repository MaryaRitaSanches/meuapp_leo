import { useRoute } from "@react-navigation/native";
import { router, useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function OptionsScreen() {
    const router = useRouter();
    return (
        <View>
            Estou na página options

            <Button title=" Ir para detalhes" onPress={() => router.push('/options/details')}/>
       </View>
    );
}