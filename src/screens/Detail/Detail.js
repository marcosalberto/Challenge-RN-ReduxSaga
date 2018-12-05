import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, Linking } from 'react-native'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Heart from '../../Icons/Heart'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

class Detail extends Component {
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

    handleSaveButtonClick(bookId) {
        console.log(bookId)
    }

    handleNotifyMeButtonClick(bookId) {
        console.log(bookId)
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
                <Container backgroundColor="#ffe207">
                    <Header />
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
                            { this.state.saleability !== 'FOR_SALE' && (
                                <TouchableHighlight style={ styles.buyButton } onPress={ () => this.handleNotifyMeButtonClick(this.state.buyLink) }>
                                    <Text style={ styles.buyButtonText }>NOTIFY ME</Text>
                                </TouchableHighlight>
                            )}
                            <TouchableHighlight style={ styles.saveButton } onPress={ () => this.handleSaveButtonClick(this.props.navigation.state.params.id) }>
                                <Heart />
                            </TouchableHighlight>
                        </View>
                    </View>
                </Container>
                <ScrollView contentContainerStyle={ styles.description }>
                    <Text style={ styles.descriptionText }>
                        { this.state.description }
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

export default Detail;