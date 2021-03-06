import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { List, ListItem, Card, Text, Icon } from 'react-native-elements'
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
const menuList = [
  {
    title: 'Search Albums with text',
    subtitle: 'Search your favorite music',
    icon: 'music',
    navigateTo: 'Albums'
  }, {
    title: 'Favorite Albums',
    subtitle: 'Access your favorite albums',
    icon: 'heart',
    navigateTo: 'Favorite'
  }, {
    title: 'Search Albums with camera',
    subtitle: 'Search your favorite music using pictures',
    icon: 'camera',
    navigateTo: 'CameraAlbums'
  }
]
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{ backgroundColor: '#eaeaea', marginTop: 0 }}
        >
          {menuList.map((item, index) => {
            return (
              <Card key={index}
                title={item.title}
              >
                <View style={styles.cardView}>
                  <Text style={styles.text}>{item.subtitle}</Text>
                  <Icon raised
                    name={item.icon}
                    type='font-awesome'
                    color='#f50'
                    size={30}
                    onPress={() => { this.props.navigation.navigate(item.navigateTo) }} />
                </View>
              </Card>
            )
          })}</List>
      </ScrollView>
    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, cardView: {
    alignItems: 'center'
  }, text: {
    marginBottom: 10
  }

});
