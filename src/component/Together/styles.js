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
        alignItems: 'center',
    },

    totalBalanceWrapper: {
        width: 250,
        height: 130,
        backgroundColor: 'green'
    },
    balanceValue: {
        flexDirection: 'row'
    },
    valueText: {
        marginLeft: 15
    },
    investListWrapper: {
        width: 250,
        height: 100
    },
    line: {
        borderBottomWidth: 1.5,
        borderBottomColor: 'white',
        marginTop: 10,
        width: 20
    },
    investButton: {
        width: 50,
        height: 20,
    },
    investButton: {
        width: 50,
        height: 20,
    },
    investList: {
        flexDirection: 'row'
    },
    investRight: {
        flexDirection: 'row',
        marginLeft: 50,
        alignItems: 'center'
    },
    
    memberText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    doubleArrowDownImage: {
        width: 32,
        height: 32,
    },
    tabButton: {
        flexDirection: 'row'
    },
    memberListButton: {
        width: 120,
        height: 30,
        backgroundColor: 'red'
    },
    memberTreeButton: {
        width: 120,
        height: 30,
        backgroundColor: 'green'
    },
    memberWrapper: {
        flexDirection: 'row'
    },
    memberRightWrapper: {
        marginLeft: 20
    },
    registerLinkWrapper: {
        flexDirection: 'row',
    },
    registerLinkView: {
        width: 200,
        height: 50,   
    },
    registerLinkText: {
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