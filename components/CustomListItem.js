import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem key={id} onPress={() => enterChat(id, chantName)} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg',
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          {chatName}
        </ListItem.Title>

        <ListItem.Subtitle numberOfLines={1} ellipsisMode='tail'>
          This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
