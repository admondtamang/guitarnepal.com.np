import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import TopNav from "../../routes/HomeTopTabs";

import { useNavigation, useTheme } from "@react-navigation/native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
export default function Home() {
    const navigation = useNavigation();
    const { colors } = useTheme();

    const onPress = () => {
        navigation.navigate("Search");
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            {/* header */}
            <Header>
                <TouchableOpacity onPress={onPress}>
                    <Feather name="search" size={24} color="black" onPress={onPress} />
                </TouchableOpacity>
                <Title style={{ fontWeight: "bold" }}>GuitarNepal</Title>
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name="user" size={24} color="black" />
                </TouchableOpacity>
            </Header>

            {/* Navigation */}
            <TopNav />
        </SafeAreaView>
    );
}

const Header = styled.View`
    padding: 10px;
    /* margin-top: 30px; */
    flex-direction: row;
    justify-content: space-between;
`;

const StyledSafeArea = styled.SafeAreaView``;