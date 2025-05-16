import { useRoute } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

export default function SettingsScreen () {
    const router = useRoute() 
    return (
        <View>
            Estou na tela de Configuração

            <Button title = "Ir para opções" onPress={() => router.push('/options')}/>
        </View>
    )
}