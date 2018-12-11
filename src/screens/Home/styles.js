import { StyleSheet } from 'react-native'
import { variables } from '../../config/styles'

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: variables.primaryColor,
        paddingTop: 50
    },
    question: {
        fontSize: 24,
        textAlign: 'center'
    },
    input: {
        borderBottomColor: '#9F8B0C',
        borderBottomWidth: 1,
        padding: 5,
        margin: 20,
    },
    title: {
        fontSize: 20,
        padding: 20
    }
})

export default styles