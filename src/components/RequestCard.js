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
                            style={{ fontSize: NewSize(fontSize=23, height=deviceHeight) }}
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
                height: NewSize(fontSize = 75, height = height),
                backgroundColor: 'white',
                borderRadius: windowWidth / 25,
                shadowColor: "#000",
            },

            svgStyle: {
                borderRadius: 15,
                backgroundColor: '#d8eddf',
                width: '100%',
                height: NewSize(fontSize=70, height=height),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },

            labelStyle: {
                color: '#3d3a59',
                fontSize: NewSize(fontSize = 8, height = height),
                alignItems: 'center',
                fontWeight: 'bold'
            },
        })
    }
}