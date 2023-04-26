import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [timeWindow, setTimeWindow] = useState('');
  const [guests, setGuests] = useState([]);
  const [comment, setComment] = useState('');

  const handleAddGuest = () => {
    setGuests([...guests, '']);
  };

  const handleGuestChange = (text, index) => {
    const newGuests = [...guests];
    newGuests[index] = text;
    setGuests(newGuests);
  };

  const handleSubmit = () => {// Submit request to property management
  };

  const handleCancel = () => {
    setName('');
    setLastName('');
    setDate('');
    setTimeWindow('');
    setGuests([]);
    setComment('');
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Visitor Request Form</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Date of Visit" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Time Window" value={timeWindow} onChangeText={setTimeWindow} />
      {guests.map((guest, index) => <TextInput key={index} style={styles.input} placeholder={`Guest ${index + 1}`} value={guest} onChangeText={text => handleGuestChange(text, index)} />)}
      <TouchableOpacity style={styles.addButton} onPress={handleAddGuest}>
        <Text style={styles.addButtonText}>Add Guest</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Comment" value={comment} onChangeText={setComment} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor: '#4CD964',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default ScreenComponent;