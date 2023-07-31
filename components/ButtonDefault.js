import { Button, useTheme, Text } from "react-native-paper";

export default function (props) {
    const { label, onPress } = props;
    const { yellow, blue } = useTheme().colors;
    return (
        <Button style={{
            maxHeight: 'auto',
            width: "85%",
            backgroundColor: yellow,
        }}
            onPress={onPress}
        >
            <Text style={{
                color: blue,
                fontWeight: 'bold',
            }}>{label}</Text>
        </Button>
    )
}