import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
Icon.loadFont()

export default function ArrowButton({ name, width, height, radius, size }) {

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
            fontSize: size,
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