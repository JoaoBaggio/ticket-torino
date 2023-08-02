import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useTheme, Modal, Portal } from "react-native-paper";
import ModalDetails from "./ModalDetails";
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import HeaderScelto from "./HeaderScelto";

export default function MyTicket(props) {
    const { lightGrey, blue } = useTheme().colors
    const [openModal, setOpenModal] = useState(false)
    const text = 'Sali a bordo e bippa'
    const insets = useSafeAreaInsets();
    const { navigation } = props


    setTimeout(() => {
        setOpenModal(true)
    }, 3000);
    const hideModal = () => {
        setOpenModal(false)
        navigation.navigate('Home')
    }
    return (
        <View style={{
            alignItems: 'center',
            height: "100%",
            backgroundColor: lightGrey,
            justifyContent: 'space-between',
            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom + 10,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Portal>
                <Modal visible={openModal} dismissable={false}>
                    <ModalDetails onPress={hideModal}  />
                </Modal>
            </Portal>
            <HeaderScelto />
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