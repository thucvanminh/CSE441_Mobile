import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import {FormOutlined} from "@ant-design/icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs

            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Index',
                }}
            />
            <Tabs.Screen
                name="EmployeeForm"
                options={{
                    title: 'Employee Form',
                }}
            />
            <Tabs.Screen
                name="HailstoneSequence"
                options={{
                    title: 'Hailstone Sequence',
                }}
            />
            <Tabs.Screen name = "SumProgramme"
                options={{
                    title: 'Sum',
                }}/>
        </Tabs>
    );
}