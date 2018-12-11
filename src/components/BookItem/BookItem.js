import React from 'react'
import { TouchableHighlight, View, Image, Text } from 'react-native'

import styles from './styles'

const BookItem = props => {
  let book = props.item

  return (
    <TouchableHighlight
      key={book.id}
      style={styles.item}
      onPress={() => props.navigate('Detail', { id: book.id })}
    >
      <View>
        {book.volumeInfo.imageLinks && (
          <Image
            style={styles.image}
            source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
          />
        )}
        {!book.volumeInfo.imageLinks && <Text>{book.title}</Text>}
      </View>
    </TouchableHighlight>
  )
}

export default BookItem
