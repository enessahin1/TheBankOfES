import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { NewSize } from '../utils/sizeColculater';

const windowWidth = Dimensions.get('window').width;

Fontisto.loadFont()
export default function RequestCard({ svgName, label }) {
    const deviceHeight = Dimensions.get('window').height;
    return (
        <>
            <View style={StyleSheetFactory.getSheet(deviceHeight).container}>
                <View style={StyleSheetFactory.getSheet(deviceHeight).svgStyle}>
                    <View>
                        <Fontisto
                            name={svgName}
                            style={{ fontSize: 35 }}
                            color="white"
                        />
                    </View>
                </View>
                <View style={StyleSheetFactory.getSheet(deviceHeight).labelStyle}>
                    <Text style={StyleSheetFactory.getSheet(deviceHeight).labelStyle}>{label}</Text>
                </View>
            </View>
        </>
    )
}

class StyleSheetFactory {
    static getSheet(height = 0) {
        return StyleSheet.create({
            container: {
                width: '30%',
                height: NewSize(fontSize = 85, height = height),
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
    }
}