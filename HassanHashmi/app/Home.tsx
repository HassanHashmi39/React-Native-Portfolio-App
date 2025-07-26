import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = () => {
  const router = useRouter();

  const handleBookMeeting = () => {
    Linking.openURL('https://calendly.com/hassanhashmi658');
  };

  const handleLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/hassanshahhashmi');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.mainTitle}>Hello Guy's 👑</Text>
          <Text style={styles.subTitle}>I Design Brands That Reflect You</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://hassanshah.mystrikingly.com/')}
              style={[styles.button, styles.yellowButton]}
            >
              <Text style={styles.buttonTextDark}>Website Building</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLinkedIn}
              style={[styles.button, styles.yellowButton]}
            >
              <Text style={styles.buttonTextDark}>LinkedIn Growth</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleBookMeeting}
              style={[styles.button, styles.blackButton]}
            >
              <Text style={styles.buttonTextLight}>Book 1:1 Meeting</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillRow}>
          {['React Native', 'JavaScript', 'Figma', 'Firebase', 'TailwindCSS'].map((skill) => (
            <TouchableOpacity
              key={skill}
              style={styles.skillTag}
              onPress={() => router.push('/Skill')}
            >
              <Text>{skill}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Blog & Articles</Text>
        <View style={styles.blogList}>
          <TouchableOpacity style={styles.blogCard} onPress={() => router.push('/Article')}>
            <Text style={styles.blogTitle}>
              Stop scrolling! Your LinkedIn profile might be costing you real opportunities
            </Text>
            <Text style={styles.blogDesc}>
              Why LinkedIn optimization is essential and how a few quick fixes can improve your personal brand.
            </Text>
          </TouchableOpacity>


        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2deff',
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 8,
    marginRight: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  yellowButton: {
    backgroundColor: '#facc15',
  },
  blackButton: {
    backgroundColor: '#000000',
  },
  buttonTextDark: {
    fontWeight: '600',
    color: '#000',
  },
  buttonTextLight: {
    fontWeight: '600',
    color: '#fff',
  },
  profileImage: {
    width: 160,
    height: 200,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
  },
  skillTag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    fontSize: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    marginRight: 8,
    marginBottom: 8,
  },
  blogList: {
    gap: 16,
  },
  blogCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginBottom: 16,
  },
  blogTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  blogDesc: {
    fontSize: 14,
    color: '#6b7280',
  },
});

export default HomeScreen;
