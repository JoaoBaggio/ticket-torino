import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useTheme, Modal, Portal } from "react-native-paper";
import ModalDetails from "./ModalDetails";
import { useSafeAreaInsets, } from 'react-native-safe-area-context';

export default function MyTicket(props) {
    const { lightGrey, blue } = useTheme().colors
    const [openModal, setOpenModal] = useState(false)
    const text = 'Sali a bordo e bippa'
    const insets = useSafeAreaInsets();

    setTimeout(() => {
        setOpenModal(true)
    }, 3000);
    const hideModal = () => {
        setOpenModal(false)
    }
    return (
        <View style={{
            alignItems: 'center',
            height: "100%",
            backgroundColor: lightGrey,
            justifyContent: 'space-between',
            // Paddings to handle safe area
            paddingTop: insets.top + 80,
            paddingBottom: insets.bottom + 10,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Portal>
                <Modal visible={openModal} onDismiss={hideModal}>
                    <ModalDetails onPress={hideModal} />
                </Modal>
            </Portal>
            <Image source={require('../assets/bip.jpg')}
                style={{
                    // backgroundColor: 'red',
                    width: '40%',
                    height: '38%',
                    resizeMode: 'contain',
                }} />
            <Text style={{
                color: blue,
                paddingTop: 15,
                paddingBottom: 15,
                fontSize: 25,
                fontWeight: 'bold',
            }}
            >{text}</Text>
            <Image source={require('../assets/ticket.png')}
                style={{
                    width: '95%',
                    height: '35%',
                    resizeMode: 'contain',
                }} />
        </View>
    )
}