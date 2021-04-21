import React from 'react';
import {Text, TextInput, StyleSheet, Button} from 'react-native';

const feed = () => {
  return (
    <>
      <Text style={{fontSize: 20, alignSelf: 'center', marginTop: '30%'}}>
        {' '}
        Create a new Feed{' '}
      </Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        placeholder="Caption"
      />
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        placeholder="Location"
      />
      <Button title="POST" />
    </>
  );
};

const styles = StyleSheet.create({});

export default feed;
