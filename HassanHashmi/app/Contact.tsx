import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Please fill all fields.');
      return;
    }

    try {
      const res = await axios.post('https://formspree.io/f/myzpkyrg', formData);
      if (res.status === 200) {
        Alert.alert('Message Sent Successfully!');
        alert('Thank you for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      Alert.alert('Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Contact Me</Text>

      <TextInput
        placeholder="Your Name"
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        placeholder="Your Email"
        style={styles.input}
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        placeholder="Your Message"
        style={[styles.input, { height: 100 }]}
        multiline
        value={formData.message}
        onChangeText={(text) => handleChange('message', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>

      <Text style={styles.socialHeader}>Follow Me</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/hassanshahhashmi')}>
          <Image source={require('../assets/linkedin.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/hassan_hashmi39/')}>
          <Image source={require('../assets/instragram.jpeg')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.behance.net/hassanhashmi39')}>
          <Image source={require('../assets/behance.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d2deff'
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#fcd34d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    textDecorationColor: '#000000ff',
    shadowColor: '#000',

    marginBottom: 30
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  socialHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap'
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15
  }
});

export default ContactScreen;
