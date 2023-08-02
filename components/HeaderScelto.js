import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from 'react-native-paper';


export default function (props) {
    const { blue, lightBlue } = useTheme().colors;

    return (
        <View style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            width: "100%",
            marginBottom: 15,
        }}>
            <View style={{
                backgroundColor: lightBlue,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                marginRight: '10%',
            }}>
                <Button icon="close" textColor={blue} labelStyle={{ fontSize: 25 }} />
            </View>
            <Text style={{
                color: blue,
                fontSize: 18,
            }}>BIGLIETTO SCELTO</Text>

        </View>
    )
}