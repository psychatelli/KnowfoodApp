import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY, BORDER_RADIUS } from '../../styles/common';

export default StyleSheet.create ({
    container: {
        borderRadius: BORDER_RADIUS,
        backgroundColor: COLOR_PRIMARY,
        padding: 5,
    },
    button: {
        backgroundColor: '#111',
        color: 'white',
        borderRadius: BORDER_RADIUS,
        padding: 15,
    },
});