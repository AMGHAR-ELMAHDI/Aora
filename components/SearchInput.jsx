import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeHolder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className="border-2 border-black-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row justify-between items-center space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        // value={value}
        placeholder="Search for a video topic"
        placeHolderTextColor="#7b7b8b"
        // onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
