import { View, Image, Text } from "react-native";


export default function FooterButtons(props) {
    const { color, icon, label } = props;
    return (
        <View style={{
            flex: 1,
            width: "100%",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image source={icon} style={{
                width: 30,
                height: 30,
                tintColor: color
            }} />
            <Text style={{
                fontSize: 14,
                color: color || 'white'
            }}>{label}</Text>
        </View>
    )
}