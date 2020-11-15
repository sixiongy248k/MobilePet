import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    supercontainer: {
      flex: 1,
      //backgroundColor: 'rgba(255,55,155,.6)',
    },
    subcontainer: {
      flex: 1, 
      justifyContent: 'flex-end', 
      alignItems: 'center',
      marginBottom: 125,
      //backgroundColor: 'rgba(155,255,55,.3)',
    },
    image: {
      flex: 1,
      resizeMode: "center",
      //justifyContent: "center"
    },
    scrollView: {
      backgroundColor: '#6d7174',

    },
    button: {
      backgroundColor: '#FD8F33',
      borderColor: "white",
      borderWidth: .5,
      width: 300,
      height: 60,
      justifyContent: 'flex-start',
    },
    title: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 20,
    },
    homeTitle: {
      marginBottom: 215, 
      fontSize: 75, 
      color: 'white',
      textShadowColor: 'black',
      textShadowRadius: 5,
      textShadowOffset: { 
        width: 2,
        height: 2,  
      }, 
    },
    header: {
 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 1,
      marginBottom: 2,
      backgroundColor: '#F4A149',
      opacity: 1,
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 1.55,
      borderBottomColor: '#f77534',
      borderBottomWidth: 4
    },
    headerText: {
      
      fontSize: 25,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 3,
      
    },
    Left: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    Right: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      
    },
    content: {
      backgroundColor: '#f3f4ef',

    }, 
    btnClear: {

      backgroundColor: '#000',
      //justifyContent: 'flex-end',
    },
    btnRight: {
      backgroundColor: '#000',
    },
    settingContainer: {
      flex: 1,
      marginHorizontal: 0,
      backgroundColor: '#6d7174',
    },
    rowContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  
    text: {
      fontSize: 17,
      color: 'black',
      padding: 10,
      backgroundColor: 'white',
    },
  
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      textShadowColor: 'black', 
      textShadowRadius: 2, 
      textShadowOffset: { 
        width: 2,
        height: 2, 
      },
    },
  
    btnTextHolder: {
      borderWidth: 0,
      borderColor: 'rgba(0,0,0,0.5)'
    },
  
    Btn: {
      padding: 6,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  });