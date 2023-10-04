import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#9139BA',
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
    },
    menu: {
        flexDirection: 'row',
    },
    contentLogo: {
        alignItems: 'center',
    },
    nameStore: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'Black',
    },
    nameTile: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    body: {
    },
    tracker: {
        padding: 10,
        borderBottomColor: 'gray', // Màu sắc của border
        shadowColor: 'black', // Màu sắc của đổ bóng
        shadowOffset: { width: 0, height: 1 }, // Độ đổ bóng theo chiều ngang và dọc
        shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
        shadowRadius: 5, // Bán kính của đổ bóng
        elevation: 3,
    },
    textTracker: {
        fontSize: 16,
        fontWeight: '700',
        color: '#9139BA'
    },
    headerBody: {
        backgroundColor: '#f7f7f7',
    },
    order: {
        backgroundColor: '#9139BA',
        borderRadius: 10,
        margin: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    flexTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    titleOrder: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        alignItems: 'center',
    },
    shipping: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnShipping: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#F0E3F6',
        borderRadius: 5,
        marginVertical: 10,
    },
    btnShippingText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    search: {
        margin: 10,
        marginBottom: 15,
        
    },
    inputSearch: {
        backgroundColor: '#F0E3F6',
        paddingVertical: 12,
        borderRadius: 30,
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: '600',
    },
    //body
    content: {

    },
    contentNext: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    foodCategory: {
        color: "#000",
        fontWeight: '800',
    },
    nextIcon: {

    },
    contentProduct: {
        // paddingHorizontal: 5,
    },
    product: {

    },
    boxImg: {
        position: 'relative',
    },
    imgProduct: {
        width: '100%',
    },
    btnProduct: {
        height: 45,
        width: 120,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: [
            { translateX: -50 }, // Để điều chỉnh vị trí sau khi căn giữa theo chiều ngang
            { translateY: -20 }, // Để điều chỉnh vị trí sau khi căn giữa theo chiều dọc
        ],
        backgroundColor: 'rgba(0, 116, 228, 0.4)',
        borderRadius: 10,
        borderWidth: 2,        // Độ dày của border (3px)
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameProduct: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
        
    },
    valuate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    percent: {
        fontSize: 15,
        fontWeight: '700',
    },
});