import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
    },
    text: {
        fontFamily: 'nunito-semibold', 
        fontSize: 16,
        color: 'blue'
    },
    headerText: {
        fontFamily: 'nunito-semibold', 
        fontSize: 20,
        color: 'white'
    },
    paragraph: {
        paddingVertical: 8,
        lineHeight: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 16,
        marginTop: 24,
        fontSize: 18,
    },
    header: {
        // backgroundColor: "green",
        // height: '100%',
        // width: '100%',
        // flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center'

    }
})

export const images =  {
    rating: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
};