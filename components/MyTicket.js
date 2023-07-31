import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useTheme, Modal, Portal } from "react-native-paper";
import ModalDetails from "./ModalDetails";

export default function MyTicket(props) {
    const { lightGrey, blue } = useTheme().colors
    const [openModal, setOpenModal] = useState(false)
    const text = 'Sali a bordo e bippa'
    setTimeout(() => {
        setOpenModal(true)
    }, 3000);
    const hideModal = () => {
        console.log('hide')
        setOpenModal(false)
    }
    return (
        <View style={{
            alignItems: 'center',
            height: "100%",
            backgroundColor: lightGrey,
            justifyContent: 'space-between',
            paddingTop: 80,
            paddingBottom: 15,
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