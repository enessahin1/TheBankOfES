import React from 'react'
import { StatusBar, View, Text, Image, ScrollView, Dimensions } from 'react-native'
import WavyHeader from '../../utils/weavyHeader'
import StyleSheetFactory from './HomePageStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ManyCard from '../../components/ManyCard'
import ArrowButton from '../../components/ArrowButton'
import RequestCard from '../../components/RequestCard'
import { NewSize } from '../../utils/sizeColculater'
Icon.loadFont()

export default function HomePage() {
    const SCREEN_HEIGHT = Dimensions.get('window').height
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: '#f9f9fd' }}>
                <View style={{ flex: 1 }}>
                    <View style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).container}>
                        <WavyHeader
                            customStyles={StyleSheetFactory.getSheet(SCREEN_HEIGHT).svgCurve}
                            customHeight={295}
                            customTop={250}
                            customBgColor="#38a560"
                            customWavePattern="M0,32L120,69.3C240,107,480,181,720,181.3C960,181,1200,107,1320,69.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        />
                        <View>
                            <View style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).headerContainer}>
                                <Icon
                                    name="menu"
                                    style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).sideMenu}
                                    color="white"
                                />
                                <Image style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).profileImage} source={require('../../main/images/enes.png')} />
                            </View>
                            <Text style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).headerText}>Hi, John Smith</Text>
                            <Text style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).headerSubText}>Today Mon , 17 Sep</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10%' }}>
                        <ManyCard svgName={'wallet'} label={'Walled Balance'} cash={'345.45'} sticker={'Fund Walled'} />
                        <ManyCard svgName={'onenote'} label={'Donated Amounth'} cash={'1,345.45'} sticker={'Donate Now'} />
                    </View>
                    <View style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).sposorshipAvailable}>
                        <View>
                            <View style={{ marginBottom: '5%' }}>
                                <Text style={{ fontSize: NewSize(fontSize=13, height=SCREEN_HEIGHT), color: 'white', fontWeight: 'bold' }}>Sponsorship Available</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: NewSize(fontSize=10, height=SCREEN_HEIGHT), color: 'white' }}>Can apply for sponsorship</Text>
                            </View>
                        </View>

                        <View>
                            <ArrowButton
                                name={'arrow-right'}
                                width={'200%'}
                                height={'55%'}
                                radius={5}
                                size={30}
                            />
                        </View>
                    </View>
                    <View style={StyleSheetFactory.getSheet(SCREEN_HEIGHT).scrollView}>
                        <View style={{ width: '90%', alignContent: 'center', alignSelf: 'center' }}>
                            <Text style={{marginTop: '3%'}}>What do you want to prepare for?</Text>
                        </View>
                        <View>
                            <ScrollView style={{ height: '90%', marginTop: '3%'}} showsVerticalScrollIndicator={false}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    <RequestCard svgName="apple" label={"Apple"}/>
                                    <RequestCard svgName="json" label={"Odian"}/>
                                    <RequestCard svgName="messenger" label={"Messenger"}/>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '3%'}}>
                                    <RequestCard svgName="origin" label={"Origin"}/>
                                    <RequestCard svgName="redux" label={"Redux"}/>
                                    <RequestCard svgName="swift" label={"Phoenix"}/>
                                </View>
                                
                            </ScrollView>
                        </View>
                    </View>


                </View>
            </View>
        </>
    )
}

