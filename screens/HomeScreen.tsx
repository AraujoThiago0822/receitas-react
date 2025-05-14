import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍃 Receitas Outdoor</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('Detail', { recipe: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
