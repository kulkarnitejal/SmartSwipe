import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function CardsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Credit Cards</Text>
        <Link href="../card/add" asChild> 
          <TouchableOpacity style={styles.addButton}>
            <FontAwesome name="plus" size={20} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList
        data={[]} // We'll add card data later
        renderItem={() => null} // We'll implement this later
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No cards added yet. Tap the + button to add your first card.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 60,
  },
  title: {
    color: "white",
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 40,
  },
}); 