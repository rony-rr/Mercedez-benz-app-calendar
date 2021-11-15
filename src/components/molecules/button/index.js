import React from 'react'
import { TouchableOpacity ,View} from 'react-native'
import Text from '../../atoms/text'
import styles from './styles'
const index = (props) => {
  const { label, onSubmit } = props;
  return (
    <View>
      <TouchableOpacity
      style={styles.btn}
      onPress={onSubmit}
    >
      <Text
        text={label}
        size={20}
      />
    </TouchableOpacity>
    </View>
  )
}

export default index
