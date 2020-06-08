import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Header extends React.Component {

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    goToDeposit = () => {
        this.props.navigation.navigate('Deposit');
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.headerPart}>
                    <TouchableOpacity style={styles.drawerButton}>
                        <Image source={require('../../asset/grid.png')}
                            style={styles.drawerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.yourAccountText}>YOUR ACCOUNT</Text>
                    <TouchableOpacity style={styles.addMemberButton}>
                        <Image source={require('../../asset/add_member.png')}
                            style={styles.addMemberIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
            </View>
        );
    }
}