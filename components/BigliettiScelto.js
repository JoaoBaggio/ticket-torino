import { View, Image, Text, TouchableOpacity } from "react-native";
import { IconButton, } from "react-native-paper";
import { useTheme } from 'react-native-paper';

export default function BigliettiScelto(props) {
    const { source, navigation } = props;
    const { blue } = useTheme().colors;

    const handlePress = () => {
        navigation.navigate('MyTicket')
    }
    var now = new Date();
    now.setMinutes(now.getMinutes() + 90); // timestamp
    const time = now.toLocaleString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome' })
    return (
        <TouchableOpacity onPress={handlePress} style={{
            zIndex: 1,
        }}>
            <View style={{
                backgroundColor: 'white',
                paddingBottom: 15,
            }}>
                <Text style={{
                    color: blue,
                    paddingTop: 15,
                    paddingLeft: 15,
                    fontSize: 18,
                }}>
                    BIGLIETO SCELTO</Text>

                <View style={{
                    flex: 0,
                    width: "100%",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxHeight: 110,
                    backgroundColor: 'white',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}>
                    <Image source={source} style={{
                        resizeMode: 'contain',
                        width: 150,
                        marginRight: 60,
                    }} />

                    <IconButton icon={require('../assets/list.png')}
                        iconColor='white'
                        style={{
                            height: 45,
                            width: 45,
                            backgroundColor: blue,

                        }} />
                </View>
                <Text style={{
                    color: blue,
                    paddingTop: 0,
                    paddingLeft: 15,
                    fontSize: 15,
                    fontWeight: 'bold',
                }}>
                    scadrà alle {time}</Text>
                <Text style={{
                    color: blue,
                    paddingTop: 0,
                    paddingLeft: 15,
                    fontSize: 12,
                    fontStyle: 'italic',
                }}>
                    bippami al validatore o al tornello</Text>
            </View>
        </TouchableOpacity>
    )
}