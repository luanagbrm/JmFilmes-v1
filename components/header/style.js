import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: "center"
    },
    viewHeader:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 10
    },
    textHeader:{
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 20
    }

})

export default style;