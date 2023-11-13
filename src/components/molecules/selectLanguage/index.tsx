import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { languages } from '../../../utils/languages';

interface SelectLanguageProps {
  language: string;
  changeLanguage: (itemValue: string) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {
  return (
    <View>
      <Picker
        selectedValue={props.language}
        onValueChange={props.changeLanguage}
      >
        {languages.map(({ code, label }) => (
          <Picker.Item key={code} label={label} value={code} />
        ))}
      </Picker>
    </View>
  );
}

export default SelectLanguage;
