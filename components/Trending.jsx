import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <Text key={item.id} className="text-3xl text-white">
          {item.id}
        </Text>
      )}
    />
  );
};

export default Trending;
