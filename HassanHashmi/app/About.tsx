import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AboutMeScreen = () => {
  const openLink = (url) => Linking.openURL(url);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>👤 About Me</Text>

      <Text style={styles.paragraph}>
        Hello! I’m Hassan Hashmi, currently studying Software Engineering at UCP (2022–2026). With over 2 years of freelance experience on Fiverr and Upwork, I specialize in web development, graphics design, and LinkedIn branding.
      </Text>

      <Text style={styles.sectionTitle}>🎓 Education</Text>
      <Text style={styles.paragraph}>Bachelor’s in Software Engineering — University of Central Punjab (2022–2026)</Text>

      <Text style={styles.sectionTitle}>💼 Experience</Text>
      <Text style={styles.paragraph}>• Web Developer on Upwork (May 2023 – Nov 2024)</Text>
      <Text style={styles.paragraph}>• Graphic Designer on Fiverr (July 2023 – March 2025)</Text>
      <Text style={styles.paragraph}>• LinkedIn Growth Expert (1+ Year)</Text>

      <Text style={styles.sectionTitle}>🚀 What I Do</Text>
      <Text style={styles.paragraph}>
        ✔ Build strategic personal brands for CEOs and founders{'\n'}
        ✔ Design stunning visuals that convert{'\n'}
        ✔ Help people grow on LinkedIn{'\n'}
        ✔ Create websites that reflect your identity and drive action
      </Text>

      <Text style={styles.sectionTitle}>📬 Let’s Connect</Text>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/hassanshahhashmi')}>
          <Text style={styles.link}>🔗 LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.behance.net/hassanhashmi39')}>
          <Text style={styles.link}>🎨 Behance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://calendly.com/hassanhashmi658')}>
          <Text style={styles.link}>📅 Book Meeting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('mailto:hassanhashmi658@gmail.com')}>
          <Text style={styles.link}>📧 Email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2deff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1e293b',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: '#111827',
  },
  paragraph: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 10,
    lineHeight: 24,
  },
  links: {
    marginTop: 10,
    gap: 10,
  },
  link: {
    fontSize: 16,
    color: '#2563eb',
    marginBottom: 6,
    fontWeight: '500',
  },
});
