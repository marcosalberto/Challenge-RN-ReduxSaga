import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 50,
        marginBottom: 20
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
    },
    menuButton: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 5,
        paddingLeft: 20
    },
    searchButton: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 5,
        paddingRight: 20
    },
})

export default styles;