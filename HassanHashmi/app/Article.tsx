import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const articles = [
  {
    id: 1,
    title: 'Stop scrolling! Your LinkedIn profile might be costing you real opportunities',
    summary: 'Most people update their resume… But ignore the one thing everyone sees first — your LinkedIn profile...',
    link: 'https://www.linkedin.com/posts/hassanshahhashmi_your-linkedin-profile-might-be-costing-you-ugcPost-7334671334129438721-O-LI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsFSkIB8yO82e504zYH3Ra8h5S2wgyzAaU',
  },
  {
    id: 2,
    title: 'Is your online presence holding back a great product?',
    summary: 'Even great products can be overlooked if the brand appears unprofessional. Now, I help founders fix the #1 reason they get overlooked...',
    link: 'https://www.linkedin.com/posts/hassanshahhashmi_is-your-online-presence-holding-back-a-great-ugcPost-7334239044362461186-491k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsFSkIB8yO82e504zYH3Ra8h5S2wgyzAaU',
  },
  {
    id: 3,
    title: 'Website Design Isn’t Just Aesthetics — It’s Your First Pitch',
    summary: 'Many founders still underestimate its power. Clear messaging, fast performance, and brand consistency increase trust & conversions...',
    link: 'https://www.linkedin.com/posts/hassanshahhashmi_webdesign-startupbranding-foundertips-activity-7334298451301535744-e-NN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsFSkIB8yO82e504zYH3Ra8h5S2wgyzAaU',
  },
];

const Article = () => {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📰 Blog & Articles</Text>

      {articles.map((article) => (
        <View key={article.id} style={styles.card}>
          <Text style={styles.cardTitle}>{article.title}</Text>
          <Text style={styles.cardDesc}>{article.summary}</Text>
          <TouchableOpacity onPress={() => openLink(article.link)}>
            <Text style={styles.link}>🔗 Read Full Article</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d2deff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 10,
  },
  link: {
    fontSize: 15,
    color: '#2563eb',
    fontWeight: '500',
  },
});
