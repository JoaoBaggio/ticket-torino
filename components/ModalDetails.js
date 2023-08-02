import { View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import ButtonDefault from "./ButtonDefault";

export default function ModalDetails(props) {
    const { blue } = useTheme().colors;
    const { onPress = () => { } } = props;
    const textStyle = {
        fontSize: 17,
        color: blue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    }
    return (
        <View style={{
            width: "90%",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        }}>
            <View style={{
                backgroundColor: blue,
                width: "100%",
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 100,
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                }}>Biglietto convalidato</Text>
            </View>
            <View style={{
                backgroundColor: 'white',
                width: "100%",
                paddingLeft: 15,
                paddingTop: 15,
                paddingRight: 15,
            }}>
                <Text style={textStyle}>Il biglietto è stato convalidato correttamente!</Text>
                {/* <Text style={textStyle}>Tipo: Valido 100 minuti, rete URBANA + SUBURBANA GTT</Text>
                <Text style={textStyle}>Durata: Un viaggio in METRO</Text>
                <Text style={textStyle}>Data di acquisto:29-07-2023 22:10</Text>
                <Text style={textStyle}>Scadenza: 28-07-2024 22:10</Text>
                <Text style={textStyle}>Prezzo: 1,70€</Text>
                <Text style={textStyle}>Seriale biglietto:</Text>
                <Text style={textStyle}>38014613506578674</Text>
                <Text style={textStyle}>Seriale contratto</Text>
                <Text style={textStyle}>AE110BE1-00084090</Text>
                <Text style={textStyle}>Prima validazione: --</Text>
                <Text style={textStyle}>Ultima validazione: --</Text>
                <Text style={textStyle}>Viaggi residui: 1</Text> */}
            </View>
            <View style={{
                backgroundColor: 'white',
                width: "100%",
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 30,
            }}>
                <ButtonDefault label='OK' onPress={onPress} />
            </View>
        </View>
    )
}