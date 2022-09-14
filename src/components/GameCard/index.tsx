import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

interface GameCardProps {
    id: string;
    name: string;
    ads: number;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>

            <ImageBackground style={styles.cover} source={data.cover} >

            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.ads}>
                    {data.ads > 1 ? `${data.ads} anúncios` : `${data.ads} anúncio`}
                </Text>
            </LinearGradient>

            </ImageBackground>

        </TouchableOpacity>
    );
}

export { GameCard, GameCardProps };