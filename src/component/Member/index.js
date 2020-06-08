import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import Header from '../header';

export default class Member extends React.Component {

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
                        <Text style={styles.memberText}>MEMBER</Text>
                        <Image source={require('../../asset/double_arrow_down.png')}
                            style={styles.doubleArrowDownImage} />
                        <View style={styles.tabButton}>
                            <TouchableOpacity style={styles.memberListButton}>
                                <Text>MEMBER LIST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.memberTreeButton}>
                                <Text>MEMBER TREE</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.registerLinkWrapper}>
                            <View style={styles.registerLinkView}>
                                <Text numberOfLines={1} style={styles.registerLinkText}>0x3f51c1734f24d69971c8b9afe342e8f5f4625b378092898af06f3878ef5c29a8</Text>
                            </View>
                            <TouchableOpacity style={styles.copyWrapper}>
                                <Text style={styles.copyText}>COPY</Text>
                                <Image source={require('../../asset/paste.png')}
                                    style={styles.pasteIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.memberWrapper}>
                            <View style={styles.memberLeftWrapper}>
                                <Text>ID: 329563</Text>
                                <Text>F: 17</Text>
                                <Text>Invest: null</Text>
                            </View>
                            <View style={styles.memberRightWrapper}>
                                <Text>left@tgt.c</Text>
                                <Text>2020-02-20 09:08:02</Text>
                                <Text>Sales: 0.0000</Text>
                            </View>
                        </View>
                        <View>
                            
                        </View>
                    </View>                   
                </ImageBackground>
            </View>
        );
    }
}