import { styles } from './styles';
import { useEffect, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Image, FlatList } from 'react-native';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import LogoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({ id, name, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, name, bannerUrl });
  }

  useEffect(() => {
    fetch('http://10.0.0.102:3000/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={LogoImg} style={styles.logo} />
        <Heading title="Encontre seu duo" subtitle="Selecione o game que deseja jogar..." />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <GameCard data={item} onPress={() => handleOpenGame(item)} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}