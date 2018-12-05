import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableHighlight } from 'react-native'

import styles from './styles';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    goToDetail(bookId) {
        this.props.navigate('Detail', { id: bookId })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={ styles.bookList }>
                { this.props.books.map(book => (
                    <TouchableHighlight 
                        key={ book.id } 
                        style={ styles.book }
                        onPress={ () =>  this.goToDetail(book.id) }
                    >
                        <Image 
                            style={ styles.image }
                            source={ { uri: book.volumeInfo.imageLinks.smallThumbnail } }
                        />
                    </TouchableHighlight>
                )) }
            </ScrollView>
        )
    }
}

export default BookList