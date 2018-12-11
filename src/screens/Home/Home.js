import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'

import HeaderTitle from '../../components/HeaderTitle'

import Menu from '../../icons/Menu'
import Search from '../../icons/Search'

import styles from './styles'

class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <HeaderTitle title="Google Books" />,
        headerLeft: (
            <TouchableHighlight onPress={() => navigation.goBack()}>
                <Menu />
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight>
                <Search />
            </TouchableHighlight>
        )
    })

    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    handleTextInput = (text) => {
        console.log(text);
    }

    render() {
        return (
            <View style={ styles.home }>
                <Text style={ styles.question }>O que você procura?</Text>
                <TextInput
                    style={styles.input }
                    placeholder="Ex: design books"
                    onChangeText={ (text) => this.handleTextInput(text) } 
                />
                <Text style={ styles.title }>Favorite Books</Text>
            </View>
        )
    }
}

export default Home