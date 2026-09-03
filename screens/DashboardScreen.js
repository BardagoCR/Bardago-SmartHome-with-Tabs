import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Header row: title + settings gear */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Smart Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings-sharp" size={39} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        {/* Thermostat Card */}
        <View style={styles.thermoCard}>
          <View style={styles.thermoIconRow}>
            <Ionicons name="thermometer-outline" size={92} color="#3b82f6" />
            <Ionicons name="snow-outline" size={46} color="#60a5fa" style={{ marginLeft: -20, marginBottom: 50 }} />
          </View>
          <Text style={styles.thermoTemp}>27°C</Text>
          <Text style={styles.thermoLabel}>Living Room</Text>
        </View>

        {/* 2x2 device grid */}
        <View style={styles.grid}>
          <DeviceTile icon="bulb" bg="#2563eb" iconColor="#f59e0b" title="Light" status="ON" />
          <DeviceTile icon="snow" iconSize={50} bg="transparent"  iconColor="#60a5fa" title="AC" status="24°C" />
          <DeviceTile icon="lock-closed" bg="#2563eb" iconColor="#f59e0b" title="Door" status="LOCKED" />
          <DeviceTile icon="camera" bg="#f59e0b" iconColor="#2563eb" title="Camera" status="ON" />
        </View>

        {/* Footer link */}
        <TouchableOpacity style={styles.viewAllRow} onPress={() => navigation.navigate('Devices')}>
          <Text style={styles.viewAllText}>View All Devices →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function DeviceTile({ icon, iconSize = 24, bg, iconColor, title, status }) {
  const isTransparent = bg === 'transparent';
  return (
    <View style={styles.gridItem}>
      <View style={styles.tile}>
        <View style={[styles.tileIconWrap, !isTransparent && { backgroundColor: bg }]}>
          <Ionicons name={icon} size={iconSize} color={iconColor} />
        </View>
        <Text style={styles.tileTitle}>{title}</Text>
        <Text style={styles.tileStatus}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 3, backgroundColor: '#f1f1f1' },
  container: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },

  // Flexbox: row layout, space between title and icon
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: { fontSize: 32, fontWeight: '900' },

  thermoCard: {
    borderWidth: 4,
    borderColor: '#002a5c',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    marginBottom: 16,
  },
  thermoIconRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 },
  thermoTemp: { fontSize: 46, fontWeight: '900', marginBottom: 6 },
  thermoLabel: { fontSize: 20, fontWeight: '600' },

  
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: { width: '48%', marginBottom: 16 },
  tile: {
    borderWidth: 3,
    borderColor: '#002a5c',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 24,
  },
  tileIconWrap: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tileTitle: { fontSize: 26, fontWeight: '800', marginBottom: 4 },
  tileStatus: { fontSize: 14, fontWeight: '600', color: '#333' },

  viewAllRow: { alignItems: 'center', marginTop: 10 },
  viewAllText: { fontSize: 16, fontWeight: '700' },
});
