import React, { Component } from 'react'
import { View } from 'react-native'

import Container from '../../components/Container'
import Header from '../../components/Header'
import BookList from '../../components/BookList'

import styles from './styles'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            query: 'Design Books'
        }
    }

    fetchBooks() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.query + '&maxResults=40')
            .then(response => response.json())
            .then(data => {
                console.log('fetchBooks', data)
                this.setState({ books: data.items })
            })
    }

    componentDidMount() {
        this.fetchBooks();
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={ styles.list }>
                <Container backgroundColor="#ffe207">
                    <Header />
                    <BookList books={ this.state.books } navigate={ navigate } />
                </Container>
            </View>
        )
    }
}

export default List;