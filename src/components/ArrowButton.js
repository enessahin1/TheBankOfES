import React from 'react'
import { View, StyleSheet , Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import { NewSize } from '../utils/sizeColculater'
Icon.loadFont()

export default function ArrowButton({ name, width, height, radius, size }) {
    const deviceHeight = Dimensions.get('window').height
    const styles = StyleSheet.create({
        container: {
            width: width,
            height: height,
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#f3994f',
            borderRadius: radius,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 5,
        },

        iconStyle: {
            fontSize: NewSize(fontSize= size, height=deviceHeight),
            fontWeight: 'bold'
        }
    })

    return (
        <>
            <View style={styles.container}>
                <Icon
                    name={name}
                    style={styles.iconStyle}
                    color="white"
                />
            </View>
        </>
    )
}