import { StyleSheet, View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import SearchProps from "./interface";
import { useTranslation } from "react-i18next";

const SearchInput = ({ onSearch }:SearchProps) => {
  const {t} = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{t("search")}</Text>
      <View style={styles.containerSearch}>
        <Feather name="search" size={25}  style={styles.icon } />
        <TextInput
        style={styles.input}
        clearButtonMode="while-editing"
        placeholder={t("search")}
        value={searchTerm}
        onChangeText={handleChange}
      />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center",
  },
  text: {
    fontSize:20,
    fontWeight:'bold'
  },
  icon: {
    color:"black",
    padding:16,
    
  },
  containerSearch:{
    backgroundColor: '#f1f1f1c8',
    flexDirection: "row",
    borderWidth: 1,
    borderRadius:30,
    alignItems:"center",
    margin:20
  },
  input: {
    height: 'auto',
    padding: 16,
    fontSize: 16,
    marginLeft:-15,
    borderColor: '#D9D9D9',
  },
});
