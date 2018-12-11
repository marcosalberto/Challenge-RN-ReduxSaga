import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, Linking } from 'react-native'

import { connect } from 'react-redux'
import { likeBook, dislikeBook } from '../../actions/likes'

import HeaderTitle from '../../components/HeaderTitle'

import Heart from '../../icons/Heart'
import ArrowLeft from '../../icons/ArrowLeft'
import Search from '../../icons/Search'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

class Detail extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <HeaderTitle title="Design Books" />,
        headerLeft: (
            <TouchableHighlight onPress={() => navigation.goBack()}>
                <ArrowLeft />
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight>
                <Search />
            </TouchableHighlight>
        )
    })

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            authors: [],
            description: '',
            thumbnail: null,
            saleability: null,
            price: null,
            buyLink: '',
            pageCount: 0
        }
    }

    fetchBook(id) {
        fetch('https://www.googleapis.com/books/v1/volumes/' + id)
            .then(response => response.json())
            .then(data => {
                
                console.log('fetchBook', data);

                let bookObj = {
                    title: data.volumeInfo.title,
                    authors: data.volumeInfo.authors,
                    description: data.volumeInfo.description,
                    thumbnail: data.volumeInfo.imageLinks.thumbnail,
                    pageCount: data.volumeInfo.pageCount,
                    saleability: data.saleInfo.saleability
                };

                if (data.saleInfo.saleability === 'FOR_SALE') {
                    bookObj = { 
                        ...bookObj, 
                        price: data.saleInfo.listPrice.amount,
                        buyLink: data.saleInfo.buyLink
                    }
                }

                this.setState(bookObj)
            })
            .catch(err => console.error(err));
    }

    handleBuyButtonClick(link) {
        Linking
            .openURL(link)
            .catch(err => console.error(err));
    }

    handleLikeButtonClick(bookId) {        
        this.props.likeBook(bookId)
    }

    handleDislikeButtonClick(bookId) {        
        this.props.dislikeBook(bookId)
    }

    isBookLiked() {

        const { likes } = this.props;
        const { id } = this.props.navigation.state.params;

        const isLiked = likes.filter((item) => {
            return item.id === id;
        })

        return isLiked.length === 0 ? false : true;
    }

    componentDidMount() {
        this.fetchBook(this.props.navigation.state.params.id);
    }

    render() {
        
        let authors = this.state.authors.map((author, index) => {
            return (this.state.authors.length - index == 1) ? author : author + ', ';
        });

        return (
            <View style={ styles.detail }>
                <View style={ styles.header }>
                    { this.state.thumbnail && (
                        <View style={ styles.imageWrapper }>
                            { this.state.thumbnail && (
                                <Image 
                                    style={ styles.image }
                                    source={ { uri: this.state.thumbnail }} 
                                />
                            )}
                        </View>
                    )}
                    <View style={ styles.meta }>
                        <Text style={ styles.title}>{ this.state.title }</Text>
                        <Text style={ styles.author }>By { authors }</Text>
                        { this.state.price && (
                            <Text style={ styles.price }>$ { this.state.price }</Text>
                        )}
                    </View>
                </View>
                <View style={ styles.header }>
                    <Text style={ styles.pageCount }>
                        { this.state.pageCount } pages
                    </Text>
                    <View style={ styles.actions }>
                        { this.state.saleability === 'FOR_SALE' && (
                            <TouchableHighlight style={ styles.buyButton } onPress={ () => this.handleBuyButtonClick(this.state.buyLink) }>
                                <Text style={ styles.buyButtonText }>Buy</Text>
                            </TouchableHighlight>
                        )}
                        { !this.isBookLiked() && (
                            <TouchableHighlight style={ styles.likeButton } onPress={ () => this.handleLikeButtonClick(this.props.navigation.state.params.id) }>
                                <Heart />
                            </TouchableHighlight>
                        )}
                        { this.isBookLiked() && (
                            <TouchableHighlight style={ { ...styles.likeButton, ...styles.dislikeButton }}  onPress={ () => this.handleDislikeButtonClick(this.props.navigation.state.params.id) }>
                                <Heart />
                            </TouchableHighlight>
                        )}
                    </View>
                </View>
                <ScrollView contentContainerStyle={ styles.description }>
                    <Text style={ styles.descriptionText }>
                        { this.state.description }
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { likes } = state;
    
    return {
        likes
    }
}

const mapDispatchToProps = (dispatch) => ({
    likeBook: id => {
        dispatch(likeBook(id))
    },
    dislikeBook: id => {
        dispatch(dislikeBook(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);