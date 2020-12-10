import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

const windowWidth = Dimensions.get('window').width;

Fontisto.loadFont()
export default function RequestCard({ svgName, label}) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.svgStyle}>
                    <View>
                        <Fontisto
                            name={svgName}
                            style={{ fontSize: 35 }}
                            color="white"
                        />
                    </View>
                </View>
                <View style={styles.labelStyle}><Text style={styles.labelStyle}>{label}</Text></View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: windowWidth / 3,
        backgroundColor: 'white',
        borderRadius: windowWidth / 25,
        shadowColor: "#000",
        
       
    },

    svgStyle: {
        borderRadius: 15,
        backgroundColor: '#d8eddf',
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
       
    },

    labelStyle: {
        color: '#3d3a59',
        fontSize: 11,
        alignItems: 'center',
        fontWeight: 'bold'
    },

})