import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    headerPart: {
        flex: 0.17,
    },
    contentPart: {
        flex: 0.83,
        alignItems: 'center'
    },
    depositText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    doubleArrowDownImage: {
        width: 32,
        height: 32,
    },
    dropdown: {
        width: 150,
        height: 50
    },
    qrCodeImage: {
        width: 250,
        height: 250
    },
    tokenWrapper: {
        flexDirection: 'row'
    },
    tokenView: {
        width: 200,
        height: 50,   
    },
    tokenText: {
        color: '#00AF80'
    },
    copyWrapper: {
        flexDirection: 'row'
    },
    pasteIcon: {
        width: 24,
        height: 24
    },
    copyText: {
        color: 'white'
    },
});

export default styles;