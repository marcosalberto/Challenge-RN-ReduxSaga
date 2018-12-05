import React, { Component } from 'react'
import { View, FlatList, Image, TouchableHighlight } from 'react-native'

import Container from '../../components/Container'
import Header from '../../components/Header'

import styles from './styles'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            query: 'Design Books',
            index: 0,
            perPage: 15,
            isRefreshing: false
        }
    }

    fetchBooks() {

        const { query, index, perPage } = this.state;

        fetch('https://www.googleapis.com/books/v1/volumes?key=AIzaSyAqANg4F856EBsIi-sPP5sXqvDc8H5ngFQ&q=' + query + '&startIndex=' + index + '&maxResults=' + perPage)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    books: index === 0 ? data.items : [...this.state.books, ...data.items],
                    isRefreshing: false
                })
            })
    }

    loadMoreBooks = () => {

        this.setState({ 
            index: this.state.index + this.state.perPage
        },() => {
            this.fetchBooks();
        })
    }

    handleRefresh = () => {
        this.setState({
            index: 0,
            isRefreshing: true
        }, () => {
            this.fetchBooks();
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
                    <FlatList 
                        contentContainerStyle={ styles.bookList }
                        data={ this.state.books }
                        keyExtractor={ (item) => item.id }
                        numColumns={ 3 }
                        onEndReached={ this.loadMoreBooks }
                        onRefresh={ this.handleRefresh }
                        refreshing={ this.state.isRefreshing }
                        renderItem={ item => {
                            let book = item.item;
                            return (
                                <TouchableHighlight 
                                    key={ book.id } 
                                    style={ styles.book }
                                    onPress={ () =>  navigate('Detail', { id: book.id }) }
                                >
                                    <Image 
                                        style={ styles.image }
                                        source={ { uri: book.volumeInfo.imageLinks.thumbnail } }
                                    />
                                </TouchableHighlight>
                            )}
                        }
                    />
                </Container>
            </View>
        )
    }
}

export default List;