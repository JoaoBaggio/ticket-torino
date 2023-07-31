import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';


export default function () {
    const { blue, lightBlue } = useTheme().colors;

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            width: "100%",
            marginBottom: 15,
        }}>
            <View style={{
                backgroundColor: lightBlue,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
            }}>
                <Button icon="menu" textColor={blue} labelStyle={{ fontSize: 25 }} />
            </View>
            <Text style={{
                color: blue,
                fontSize: 18,
            }}>BIGLIETTI COMPRATI</Text>
            <View style={{
                backgroundColor: lightBlue,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
            }}>
                <Button icon="refresh" textColor={blue} labelStyle={{ fontSize: 25 }} />
            </View>
        </View>
    )
}