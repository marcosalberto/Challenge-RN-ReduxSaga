import React, { Component } from 'react'
import { View, FlatList, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { requestBooks, receiveBooks, clearBooks } from '../../actions/books'

import HeaderTitle from '../../components/HeaderTitle'

import Search from '../../icons/Search'
import Menu from '../../icons/Menu'

import styles from './styles'

class List extends Component {

    static navigationOptions = {
        headerTitle: <HeaderTitle title="Design Books" />,
        headerLeft: (
            <TouchableHighlight>
                <Menu />
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight>
                <Search />
            </TouchableHighlight>
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            query: 'Design Books',
            index: 0,
            perPage: 15,
            isRefreshing: false
        }
    }

    fetchBooks() {

        const { query, index, perPage } = this.state;

        this.props.requestBooks();

        fetch('https://www.googleapis.com/books/v1/volumes?key=AIzaSyAqANg4F856EBsIi-sPP5sXqvDc8H5ngFQ&q=' + query + '&startIndex=' + index + '&maxResults=' + perPage)
            .then(response => response.json())
            .then(data => {
                this.props.receiveBooks(data.items);
                this.setState({
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

            this.props.clearBooks();
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
                <FlatList 
                    contentContainerStyle={ styles.bookList }
                    data={ this.props.books }
                    keyExtractor={ (item) => item.id }
                    numColumns={ 3 }
                    onEndReached={ this.loadMoreBooks }
                    onEndReachedThreshold={ 0.1 }
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
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { isFetching, items } = state.books;
    return {
        books: items,
        isFetching
    }
}

const mapDispatchToProps = dispatch => ({
    requestBooks: () => {
        dispatch(requestBooks())
    },
    receiveBooks: (books) => {
        dispatch(receiveBooks(books))
    },
    clearBooks: () => {
        dispatch(clearBooks())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);