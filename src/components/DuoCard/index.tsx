import { View } from 'react-native';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChanel: boolean;
    weekDays: [string];
    yearsPlaying: Number;
}

interface Props {
    data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo
                label="Name"
                value={data.name} />
            <DuoInfo
                label="Tempo de Jogo"
                value={
                    data.yearsPlaying > 1 ? `${data.yearsPlaying} anos` : `${data.yearsPlaying
                        } ano`} />
            <DuoInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dias`} />
            <DuoInfo
                label="Name"
                value="John Doe" />
        </View>
    );
}
