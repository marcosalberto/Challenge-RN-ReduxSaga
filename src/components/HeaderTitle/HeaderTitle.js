import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

class HeaderTitle extends Component {
    render() {
        return (
            <View style={ styles.header }>
                <View style={ styles.titleWrapper }>
                    <Text style={ styles.title }>
                        { this.props.title }
                    </Text>
                </View>
            </View>
        )
    }
}

export default HeaderTitle