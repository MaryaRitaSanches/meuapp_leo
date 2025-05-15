import React from "react";
import { Slot, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return(
  <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
    <Tabs.Screen name= 'index' 
    options= {{
      title : 'INICIO',
      tabBarIcon: ({color, size}) => <Ionicons name = 'home-outline' size = {size} color = {color}/>
    }}
    />
    <Tabs.Screen name= 'about' 
    options= {{
      title : 'Sobre',
      tabBarIcon: ({color, size}) => <Ionicons name = 'information-outline' size = {size} color = {color}/>
    }}
    />
    <Tabs.Screen name= 'settings' 
    options= {{
      title : 'Configurações',
      tabBarIcon: ({color, size}) => <Ionicons name = 'settings-outline' size = {size} color = {color}/>
    }}
    />
    <Tabs.Screen name= 'products' 
    options= {{
      title : 'Produtos',
      tabBarIcon: ({color, size}) => <Ionicons name = 'products-outline' size = {size} color = {color}/>
    }}
    />
     <Tabs.Screen name= 'sales' 
    options= {{
      title : 'Vendas',
      tabBarIcon: ({color, size}) => <Ionicons name = 'sales-outline' size = {size} color = {color}/>
    }}
    />
    
  </Tabs>
  );
}