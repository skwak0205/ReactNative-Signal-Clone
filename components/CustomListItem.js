import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setChatMessages(snapshot.docs.map((doc) => doc.data()));
      });

    return unsubscribe;
  }, []);

  return (
    <ListItem key={id} onPress={() => enterChat(id, chatName)} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg',
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          {chatName}
        </ListItem.Title>

        <ListItem.Subtitle numberOfLines={1} ellipsisMode='tail'>
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
