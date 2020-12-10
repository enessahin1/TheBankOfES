import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { NewSize } from '../utils/sizeColculater';
Fontisto.loadFont()

export default function ManyCard({ svgName, label, cash, sticker }) {
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        container: {
            width: '42%',
            backgroundColor: 'white',
            height: NewSize(fontSize = 130, height = SCREEN_HEIGHT),
            borderRadius: SCREEN_HEIGHT / 50,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.05,
            shadowRadius: 2.84,
            elevation: 5,
        },

        svgStyle: {
            borderRadius: 200,
            backgroundColor: '#f5f8fe',
            width: '34%',
            height: '30%',
            justifyContent: 'center',
            marginLeft: '10%',
            marginTop: '10%'
        },

        contentStye: {
            marginLeft: '10%',
            marginTop: '5%'
        },

        labelStyle: {
            color: '#3d3a59',
            fontSize: NewSize(fontSize=10, height=SCREEN_HEIGHT)
        },

        cashStyle: {
            fontWeight: 'bold'
        },
        stickerBacground: {
            width: '60%',
            height: '40%',
            borderRadius: 5,
            backgroundColor: '#ecf6ef',
            justifyContent: 'center',
            alignItems: 'center'
        },

        stickerStyle: {
            color: '#38a560',
            fontSize: NewSize(fontSize=10, height=SCREEN_HEIGHT)
        }
    })

    return (
        <>
            <View style={styles.container}>
                <View style={styles.svgStyle}>
                    <View style={{ marginLeft: '20%' }}>
                        <Fontisto
                            name={svgName}
                            style={{ color: 'blue', fontSize: NewSize(fontSize= 30, height=SCREEN_HEIGHT) }}
                            color="white"
                        />
                    </View>
                </View>
                <View style={styles.contentStye}><Text style={styles.labelStyle}>{label}</Text></View>
                <View style={styles.contentStye}><Text style={styles.cashStyle, { fontSize: NewSize(fontSize = 15, height = SCREEN_HEIGHT) }}> $ {cash}</Text></View>
                <View style={styles.contentStye} >
                    <View style={styles.stickerBacground}><Text style={styles.stickerStyle}>{sticker}</Text></View>
                </View>
            </View>
        </>
    )
}
