import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({iconName, color, size}) => {
  return (
    <MaterialCommunityIcons 
      name={iconName} 
      size={size} 
      color={color} 
    />
  )
  
}

export default Icon