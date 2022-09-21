import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
    hoursEnd: string;
    hoursStart: string;
    id: string;
    name: string;
    useVoiceChanel: boolean;
    weekDays: [string];
    yearsPlaying: Number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo
                label="Name"
                value={data.name} />
            <DuoInfo
                label="Tempo de Jogo"
                value={
                    data.yearsPlaying > 1 ? `${data.yearsPlaying} anos` : `${data.yearsPlaying} ano`} />
            <DuoInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dias \u2022 ${data.hoursStart}-${data.hoursEnd}`} />
            <DuoInfo
                label="Chamada de áudio"
                value={data.useVoiceChanel ? "Sim" : "Não"}
                colorValue={data.useVoiceChanel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >

                <GameController
                    color={THEME.COLORS.TEXT}
                    size={20}
                />

                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>

            </TouchableOpacity>
        </View>
    );
}
