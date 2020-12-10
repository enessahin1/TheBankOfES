import { StyleSheet } from 'react-native'
import { NewSize } from '../../utils/sizeColculater';


export default class StyleSheetFactory {
  static getSheet(height = 0) {
    return StyleSheet.create({
      svgCurve: {
        position: 'absolute',
        width: '100%'
      },

      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

      },

      headerText: {
        fontSize: NewSize(fontSize = 20, height = height),
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '5%',
        marginLeft: '5%'
      },

      headerSubText: {
        fontSize: NewSize(fontSize = 13, height = height),
        color: '#9cd2b0',
        marginTop: '2%',
        marginLeft: '5%'
      },

      sideMenu: {
        marginTop: '15%',
        fontWeight: 'bold',
        fontSize: NewSize(fontSize = 25, height = height),
        marginLeft: '4%'
      },
      profileImage: {
        borderRadius: 400 / 2,
        width: 35,
        height: 35,
        marginTop: '15%',
        marginRight: '5%',
        backgroundColor: 'red'
      },
      sposorshipAvailable: {
        width: '90%',
        height: '12%',
        flexDirection: 'row',
        backgroundColor: '#38a560',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: '3%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2.84,
      },

      scrollView: {
        width: '90%',
        height: '42%',
        backgroundColor: 'white',
        alignSelf: "center",
        borderRadius: 10,
        marginTop: '3%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.84,
      }
    })
  }
}