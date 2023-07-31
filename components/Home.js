import { View } from 'react-native'
import HeaderDefault from './HeaderDefault';
import Bilhetes from './Bilhetes';
import BigliettiScelto from './BigliettiScelto';
import ButtonDefault from './ButtonDefault';
import Footer from './Footer';
import { useTheme, Text } from 'react-native-paper';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
    const { lightGrey, blue } = useTheme().colors;
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            alignItems: 'center',
            height: "100%",
            backgroundColor: lightGrey,
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <HeaderDefault />
            <View style={{
                flex: 1,
                width: "100%",
                height: '100%',
            }}>
                <BigliettiScelto source={require('../assets/ticket.png')} navigation={navigation} />
                <View style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: blue,
                }} />
                <Text style={{
                    color: blue,
                    paddingTop: 15,
                    paddingLeft: 15,
                    fontSize: 18,
                }}>I MIEI BIGLIETTI DISPONIBILI</Text>
                <Bilhetes source={require('../assets/ticket.png')} />
                <Bilhetes source={require('../assets/ticket.png')} />
            </View>
            <View style={{
                width: "100%",
                backgroundColor: lightGrey,
                alignItems: 'center',
                paddingBottom: 15,
            }}>
                <ButtonDefault label='ACQUISTA NUOVO BIGLIETTO' />
            </View>
            <Footer />
        </View>
    )
}