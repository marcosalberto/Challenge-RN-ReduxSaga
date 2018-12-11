import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleWrapper: {
        flex: 2,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#F0D10F'
    },
    title: {
        fontSize: 20,
        paddingBottom: 20
    }
})

export default styles;