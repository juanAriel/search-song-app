import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import SearchProps from "./interface";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native/";

const ViewContainerSearch = styled.View`
  background-color: #f1f1f1c8;
  flex-direction: row;
  border-width: 1px;
  border-radius: 30px;
`;
const IconSearch = styled(Feather)`
  color: black;
  padding: 16px;
  font-size: 25px;
`;
const TextInputSearch = styled.TextInput`
  height: auto;
  padding: 16px;
  font-size: 16px;
  margin-left: -15px;
  border-color: #d9d9d9;
  width: 100%;
`;

const SearchInput = ({ onSearch }: SearchProps) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <ViewContainerSearch>
      <IconSearch name="search" />
      <TextInputSearch
        placeholder={t("search")}
        value={searchTerm}
        onChangeText={handleChange}
      />
    </ViewContainerSearch>
  );
};

export default SearchInput;
