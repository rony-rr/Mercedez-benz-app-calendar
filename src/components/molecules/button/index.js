import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from '../../atoms/text'
import styles from './styles'
const index = (props) => {
  const { label, onSubmit } = props;
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onSubmit}
    >
      <Text
        text={label}
        size={20}
      />
    </TouchableOpacity>
  )
}

export default index
