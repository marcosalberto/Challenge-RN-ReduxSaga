import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles';

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View 
                style={{ 
                    ...styles.container, 
                    backgroundColor: this.props.backgroundColor 
                }}
            >
                { this.props.children }
            </View>
        )
    }
}

export default Container;