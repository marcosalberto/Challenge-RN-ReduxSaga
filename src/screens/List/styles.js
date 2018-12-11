import { StyleSheet } from 'react-native'
import { variables } from '../../config/styles'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: variables.primaryColor
    },
    bookList: {
        padding: 5,
    },
    book: {
        margin: 10,
        marginBottom: 20,
        width: 100,
        height: 130
    },
    image: {
        width: 100,
        height: 130
    }
})

export default styles