import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
    },
    quote: {
        fontSize: 20
    },
    author: {
        fontSize: 15
    }
});
export default styles;