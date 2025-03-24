import { View, Text, StyleSheet } from 'react-native';
import { CategorySelector } from '../../components/CategorySelector';

export default function RewardsFinderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Best Card</Text>
      <CategorySelector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
