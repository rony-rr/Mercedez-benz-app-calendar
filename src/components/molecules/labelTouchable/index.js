import React from 'react'
import { TouchableOpacity} from 'react-native'
import Text from '../../atoms/text'
import styles from './styles';

const index = (props) => {
    const {label,onPress} = props;
    return (
        <TouchableOpacity style={styles.btn} >
            <Text
            text={label}
            />
        </TouchableOpacity>
    )
}

export default index
