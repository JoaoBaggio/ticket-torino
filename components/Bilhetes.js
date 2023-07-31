import { useState } from "react";
import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { Button, IconButton, Modal, Portal } from "react-native-paper";
import { useTheme } from 'react-native-paper';
import ModalDetails from "./ModalDetails";


export default function Biglietti(props) {
    const { source } = props;
    const { blue, yellow, lightGrey } = useTheme().colors;
    const [openModal, setOpenModal] = useState(false)

    const handleImagePress = () => {
        setOpenModal(true)
    }
    const hideModal = () => {
        setOpenModal(false)
    }


    return (
        <View style={{
            flex: 0,
            width: "100%",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxHeight: 110,
            backgroundColor: lightGrey,
            paddingLeft: 15,
            paddingRight: 15,
        }}>
            <Portal>
                <Modal visible={openModal} onDismiss={hideModal}>
                    <ModalDetails onPress={hideModal} />
                </Modal>
            </Portal>
            <Image source={source} style={{
                resizeMode: 'contain',
                width: 150,
                marginRight: 60,
            }} />
            <Button style={{
                backgroundColor: blue,
                height: 45,
                width: 80,
                justifyContent: 'center',
            }}
                onPress={() => console.log('Pressed')}
            >
                <Text style={{
                    color: yellow,
                    fontSize: 14,
                    fontWeight: 'bold',
                }}>
                    USA</Text>
            </Button>
            <IconButton icon={require('../assets/list.png')}
                iconColor='white'
                style={{
                    height: 45,
                    width: 45,
                    backgroundColor: blue,

                }} />
        </View>


    )


}