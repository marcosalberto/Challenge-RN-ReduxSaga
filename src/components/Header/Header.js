import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles';

import Menu from '../../Icons/Menu'
import Search from '../../Icons/Search'

class Header extends Component {
    render() {
        return (
            <View style={ styles.header }>
                <TouchableHighlight style={ styles.menuButton }>
                    <Menu />
                </TouchableHighlight>
                <View style={ styles.titleWrapper }>
                    <Text style={ styles.title }>
                        Design Books
                    </Text>
                </View>
                <TouchableHighlight style={ styles.searchButton }>
                    <Search />
                </TouchableHighlight>
            </View>
        )
    }
}

export default Header