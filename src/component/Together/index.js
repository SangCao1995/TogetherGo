import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';
import Header from '../header';

const data = [
    {
        togetherGo: 0.1,
        unit: 'TGT',
        value: 0.02
    },
    {
        togetherGo: 0.1,
        unit: 'BTC',
        value: 0.03
    },
    {
        togetherGo: 0.1,
        unit: 'ETH',
        value: 0.04
    },
    {
        togetherGo: 0.1,
        unit: 'USDT',
        value: 0.05
    },
]

export default class Together extends React.Component {

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    goToDeposit = () => {
        this.props.navigation.navigate('Deposit');
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/together_screen.jpg')}
                    style={styles.imageBackground}>
                    <View style={styles.headerPart}>
                        <Header/>
                    </View>
                    <View style={styles.contentPart}>
                        <View style={styles.totalBalanceWrapper}>
                            <Text>Total Balance:</Text>
                            <View style={styles.balanceValue}>
                                <Text>$</Text>
                                <Text style={styles.valueText}>0.02</Text>
                            </View>
                        </View>
                        <View style={styles.investListWrapper}>
                            <FlatList data={data}
                                renderItem={({ item }) =>
                                    (
                                        <View style={styles.investList}>
                                            <View style={styles.investLeft}>
                                                <Text>TOGETHER GO</Text>
                                                <View style={styles.line}></View>
                                                <Text>BTC</Text>
                                            </View>
                                            <View style={styles.investRight}>
                                                <View>
                                                    <Text>0.1</Text>
                                                    <View style={styles.line}></View>
                                                    <Text>$ 0.02</Text>
                                                </View>
                                                <TouchableOpacity style={styles.investButton}>
                                                    <Text>INVEST</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                }
                                keyExtractor={(item, index) => index.toString()} />
                        </View>
                    </View>           
                </ImageBackground>
            </View>
        );
    }
}