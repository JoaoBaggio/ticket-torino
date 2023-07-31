import { View } from 'react-native'
import HeaderDefault from './HeaderDefault';
import Bilhetes from './Bilhetes';
import BigliettiScelto from './BigliettiScelto';
import ButtonDefault from './ButtonDefault';
import Footer from './Footer';
import { useTheme, Text } from 'react-native-paper';

export default function Home({ navigation }) {
    const { lightGrey, blue } = useTheme().colors;
    return (
        <View style={{
            alignItems: 'center',
            height: "100%",
            backgroundColor: lightGrey,
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