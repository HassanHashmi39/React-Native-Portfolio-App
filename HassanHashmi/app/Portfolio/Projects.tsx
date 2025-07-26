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

const bannerImages = [
  require('./banner (1).jpg'),
  require('./banner (2).jpg'),
  require('./banner (3).jpg'),
  require('./banner (4).jpg'),
];

const PortfolioPage = () => {
  const openLink = (url) => Linking.openURL(url);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📁 My Portfolio</Text>

      <View style={styles.card}>
        <Image
          source={require('./website-banner.jpg')} // Replace with your own website image
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardTitle}>Personal Website</Text>
        <Text style={styles.cardDesc}>
          A full-stack MERN website designed to showcase branding and technical work.
        </Text>
        <TouchableOpacity onPress={() => openLink('https://hassanshah.mystrikingly.com/')}>
          <Text style={styles.link}>🌐 Visit Website</Text>
        </TouchableOpacity>
      </View>



       <View style={styles.card}>
        <Image
          source={require('./website-banner1.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.cardTitle}>Portfolio Website</Text>
        <Text style={styles.cardDesc}>
          A showcase of my design and development projects, highlighting my skills and creativity.
        
        </Text>

        
        <TouchableOpacity onPress={() => openLink('https://hashmitech.mystrikingly.com/')}>
          <Text style={styles.link}>🌐 Visit Website</Text>
        </TouchableOpacity>
      </View>


      {/* Graphics Section */}
      <Text style={styles.sectionTitle}>🎨 LinkedIn Banners (Graphics)</Text>
      {bannerImages.map((imgSrc, index) => (
        <View key={index} style={styles.card}>
          <Image source={imgSrc} style={styles.image} resizeMode="cover" />
          <Text style={styles.cardTitle}>LinkedIn Banner {index + 1}</Text>
          <Text style={styles.cardDesc}>
            Professional banner crafted to enhance personal branding on LinkedIn.
          </Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>🔗 External Profiles</Text>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => openLink('https://github.com/hassanhashmi928')}>
          <Text style={styles.link}>💻 GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.behance.net/hassanhashmi39')}>
          <Text style={styles.link}>🎨 Behance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/hassanshahhashmi')}>
          <Text style={styles.link}>🔗 LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PortfolioPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2deff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  cardDesc: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
    marginBottom: 8,
  },
  links: {
    marginTop: 10,
    gap: 10,
  },
  link: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
    marginVertical: 4,
  },
});
