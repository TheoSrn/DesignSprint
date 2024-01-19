import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const CheckBoxComponent = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked || false);

  const toggleCheckbox = () => {
    setChecked(!checked);
    onChange && onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: '#6949FF',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: checked ? '#6949FF' : 'transparent',
          }}
        >
          {checked && <Text style={{ color: '#FFFFFF' }}>✓</Text>}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBoxComponent;
