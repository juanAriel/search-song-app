import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { languages } from "../../../utils/languages";
import SelectLanguageProps from "./interface";

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {
  return (
    <RNPickerSelect
      placeholder={{}}
      value={props.language}
      onValueChange={props.changeLanguage}
      items={languages.map(({ code, label }) => ({ label, value: code }))}
    />
  );
};

export default SelectLanguage;
