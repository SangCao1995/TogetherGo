import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

import styles from './styles';
import Header from '../header';

const data = [
    {
        value: 'TGT',
        qrCode: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        token: '0x3f51c1734f24d69971c8b9afe342e8f5f4625b378092898af06f3878ef5c29a8'
    },
    {
        value: 'BTC',
        qrCode: 'https://images.vexels.com/media/users/3/158117/isolated/preview/ccf8792bac0e235d217f3e0993841bac-qr-code-label-by-vexels.png',
        token: '0xcdece9fcb49ed564499e32b3dfd1718ac4b507cf1129d901dd5077a985798c56'
    },
    {
        value: 'ETH',
        qrCode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Qr-sco-m-wikipedia.svg/1200px-Qr-sco-m-wikipedia.svg.png',
        token: '0xaa12fa91410a38cf59e90d4384c00d26233e0f71353833bf1589c8d2433588db'
    }
];
export default class Deposit extends React.Component {

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/deposit_screen.jpg')}
                    style={styles.imageBackground}>
                    <View style={styles.headerPart}>
                        <Header/>
                    </View>
                    <View style={styles.contentPart}>
                        <Text style={styles.depositText}>DEPOSIT</Text>
                        <Image source={require('../../asset/double_arrow_down.png')}
                            style={styles.doubleArrowDownImage}/>
                        <Dropdown 
                            label='Coin'
                            data={data}
                            containerStyle={styles.dropdown}/>
                        <Image source={{uri: 'https://images.vexels.com/media/users/3/158117/isolated/preview/ccf8792bac0e235d217f3e0993841bac-qr-code-label-by-vexels.png'}}
                            style={styles.qrCodeImage}/>
                        <View style={styles.tokenWrapper}>
                            <View style={styles.tokenView}>
                                <Text numberOfLines={1} style={styles.tokenText}>0x3f51c1734f24d69971c8b9afe342e8f5f4625b378092898af06f3878ef5c29a8</Text>
                            </View>
                            <TouchableOpacity style={styles.copyWrapper}>
                                <Text style={styles.copyText}>COPY</Text>
                                <Image source={require('../../asset/paste.png')}
                                    style={styles.pasteIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}