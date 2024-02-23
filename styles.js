import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        fontFamily: 'NanumMyeongjoRegular'

    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
    },
    quote: {
        fontSize: 26,
        fontWeight: '400',
        fontFamily: 'NanumMyeongjoBold'
    },
    author: {
        fontSize: 15,
        fontFamily: 'NanumMyeongjoRegular'
    }
});
export default styles;