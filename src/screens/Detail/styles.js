import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    detail: {
        flex: 1
    },
    header: {
        padding: 20,
        paddingTop: 0,
        flexDirection: 'row'
    },
    imageWrapper: {
        flex: 1,
        shadowColor: 'rgba(184, 118, 12, 0.7251)',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.75,
        shadowRadius: 33,
    },
    image: {
        width: 100,
        height: 130,
    },
    meta: {
        flex: 2,
        marginLeft: 20
    },
    title: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5
    },
    author: {
        fontSize: 14,
        color: '#9F8B0C'
    },
    price: {
        fontSize: 20,
        color: '#2C2605',
        fontWeight: 'bold',
        marginTop: 10
    },
    description: {
        flex: 2,
        padding: 15,
        paddingTop: 20,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 30,
        color: '#4F565D'
    },
    pageCount: {
        flex: 1,
        width: 100,
        textAlign: 'center',
        color: '#9F8B0C',
        fontSize: 14,
        marginTop: 5
    },
    actions: {
        flex: 2,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buyButton: {
        backgroundColor: '#4A90E2',
        width: 115,
        height: 35,
        marginRight: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyButtonText: {
        textAlign: 'center',
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: 13,
        lineHeight: 13,
        fontWeight: 'bold'
    },
    saveButton: {
        backgroundColor: '#DC4B5D',
        width: 36,
        height: 36,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles