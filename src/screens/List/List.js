import React, { Component } from 'react'
import { View, FlatList, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { requestBooks, receiveBooks, clearBooks } from '../../actions/books'

import HeaderTitle from '../../components/HeaderTitle'
import BookItem from '../../components/BookItem'

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
    ),
  }

  constructor(props) {
    super(props)

    this.state = {
      query: 'Design Books',
      startAt: 0,
      perPage: 15,
      isRefreshing: false,
    }
  }

  fetchBooks() {
    const { query, startAt } = this.state
    this.props.requestBooks(query, startAt)
  }

  loadMoreBooks = () => {
    this.setState(
      {
        startAt: this.state.startAt + this.state.perPage,
      },
      () => {
        this.fetchBooks()
      }
    )
  }

  handleRefresh = () => {
    this.setState(
      {
        startAt: 0,
        isRefreshing: true,
      },
      () => {
        this.props.clearBooks()
        this.fetchBooks()
      }
    )
  }

  componentDidMount() {
    this.fetchBooks()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.list}>
        <FlatList
          contentContainerStyle={styles.bookList}
          data={this.props.books}
          keyExtractor={item => item.id}
          numColumns={3}
          onEndReached={this.loadMoreBooks}
          onEndReachedThreshold={0.1}
          onRefresh={this.handleRefresh}
          refreshing={this.state.isRefreshing}
          renderItem={({ item }) => (
            <BookItem item={item} navigate={navigate} />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching, items } = state.books
  return {
    books: items,
    isFetching,
  }
}

const mapDispatchToProps = dispatch => ({
  requestBooks: (query, startAt) => {
    dispatch(requestBooks(query, startAt))
  },
  receiveBooks: books => {
    dispatch(receiveBooks(books))
  },
  clearBooks: () => {
    dispatch(clearBooks())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
