import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from '../../components/Background';
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { styles } from './styles';
import { GameParams } from '../../@types/navegation';

import { Heading } from "../../components/Heading";
import logoImg from "../../assets/logo-nlw-esports.png";
export function Game() {
    const navegation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

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
            </SafeAreaView>
        </Background>
    );
}