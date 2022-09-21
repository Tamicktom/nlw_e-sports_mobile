import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameParams } from '../../@types/navegation';
import { View, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";

import { Background } from '../../components/Background';
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";

import logoImg from "../../assets/logo-nlw-esports.png";
import { THEME } from "../../theme";
import { styles } from './styles';
import { Entypo } from "@expo/vector-icons";

export function Game() {
    const [duo, setDuo] = useState<DuoCardProps[]>([]);
    const navegation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    useEffect(() => {
        fetch(`http://10.0.0.100:3000/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuo(data))
    }, []);

    function handleGoBack() {
        navegation.goBack();
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo name="chevron-thin-left" size={24} color={THEME.COLORS.CAPTION_300} />
                    </TouchableOpacity>
                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                />
 
                <Heading
                    title={game.name}
                    subtitle="Conete-se e comece a jogar!"
                />

                <FlatList
                    data={duo}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <DuoCard data={item} onConnect={() => { }} />}
                    horizontal
                    contentContainerStyle={duo.length > 0 ? styles.contentList : styles.emptyListContent}
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerList}
                    ListEmptyComponent={() => (<Text style={styles.emptyListText}>"Nenhum jogador encontrado"</Text>)}
                />

            </SafeAreaView>
        </Background>
    );
}