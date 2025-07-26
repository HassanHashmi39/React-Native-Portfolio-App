import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SkillBar = ({ skill, level }) => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillText}>{skill}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${level}%` }]} />
      </View>
    </View>
  );
};

const SkillsPage = () => {
  const [expanded, setExpanded] = useState({
    web: false,
    graphics: false,
    app: false,
    programming: false,
    seo: false,
  });

  const toggleSection = (section) => {
    setExpanded({ ...expanded, [section]: !expanded[section] });
  };

  const webSkills = [
    { skill: 'HTML', level: 95 },
    { skill: 'CSS', level: 90 },
    { skill: 'JavaScript', level: 85 },
    { skill: 'Bootstrap', level: 85 },
    { skill: 'Tailwind CSS', level: 80 },
    { skill: 'React.js', level: 85 },
    { skill: 'Node.js', level: 80 },
    { skill: 'Mongoose DB', level: 75 },
    { skill: 'MERN Stack', level: 80 },
  ];

  const graphicsSkills = [
    { skill: 'Brand Identity', level: 90 },
    { skill: 'Brand Development', level: 85 },
    { skill: 'Social Media Design', level: 85 },
    { skill: 'LinkedIn Growth Expert', level: 80 },
    { skill: 'UX/UI Design', level: 85 },
  ];

  const appSkills = [
    { skill: 'React Native', level: 85 },
  ];

  const programmingSkills = [
    { skill: 'C++', level: 80 },
    { skill: 'C', level: 75 },
    { skill: 'Python', level: 70 },
  ];

  const seoSkills = [
    { skill: 'SEO (Complete Skillset)', level: 90 },
  ];

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.title}>💼 My Skills</Text>

      {/* Section Generator */}
      {[
        { key: 'web', title: '💻 Web Development', skills: webSkills },
        { key: 'graphics', title: '🎨 Graphics Design', skills: graphicsSkills },
        { key: 'app', title: '📱 App Development', skills: appSkills },
        { key: 'programming', title: '💡 Programming Languages', skills: programmingSkills },
        { key: 'seo', title: '📈 SEO Expertise', skills: seoSkills },
      ].map(({ key, title, skills }) => (
        <View key={key} style={styles.section}>
          <TouchableOpacity onPress={() => toggleSection(key)} style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>
              {expanded[key] ? 'Tap to hide skills' : 'Tap to view skills'}
            </Text>
          </TouchableOpacity>

          {expanded[key] && (
            <View style={styles.skillList}>
              {skills.map((item) => (
                <SkillBar key={item.skill} skill={item.skill} level={item.level} />
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default SkillsPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d2deff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1f2937',
  },
  section: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fcd34d',
    padding: 16,
    borderRadius: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
  },
  skillList: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
  },
  skillContainer: {
    marginBottom: 14,
  },
  skillText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  barBackground: {
    height: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  },
  barFill: {
    height: 10,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
  },
});
