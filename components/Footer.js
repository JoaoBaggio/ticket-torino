import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import FooterButtons from './FooterButtons';

export default function Footer() {
    const { blue, yellow } = useTheme().colors;
    return (
        <View style={{
                flex: 0,
                backgroundColor: blue,
                width: "100%",
                justifyContent: 'space-around',
                flexDirection: 'row',
                paddingTop: 8,
                paddingBottom: 8,
                marginBottom: 0,
                marginTop: 'auto',
                maxHeight: 'auto',
            }
        }>
            <FooterButtons color={yellow} icon={require('../assets/wallet.png')} label='Biglietti' />
            <FooterButtons color='white' icon={require('../assets/cart.png')} label='Leggi titoli' />
            <FooterButtons color='white' icon={require('../assets/map.png')} label='Infomobilità' />
        </View>
    );

}