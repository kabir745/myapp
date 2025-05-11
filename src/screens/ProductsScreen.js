import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Product A', description: 'Description of A' },
  { id: '2', name: 'Product B', description: 'Description of B' },
  { id: '3', name: 'Product C', description: 'Description of C' }
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, marginBottom: 10 },
  product: { marginBottom: 15 },
  name: { fontWeight: 'bold' }
});