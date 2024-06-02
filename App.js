import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const category = [
    {
      id: 1,
      title: 'Exercise',
      subTitle: '12 Tasks',
      image: require('./assets/cat1.png')
    },
    {
      id: 2,
      title: 'Study',
      subTitle: '12 Tasks',
      image: require('./assets/cat2.png')
    },
    {
      id: 3,
      title: 'Code',
      subTitle: '12 Tasks',
      image: require('./assets/cat3.png')
    },
    {
      id: 4,
      title: 'Tutorial',
      subTitle: '12 Tasks',
      image: require('./assets/cat4.png')
    },
    {
      id: 5,
      title: 'Eat',
      subTitle: '12 Tasks',
      image: require('./assets/cat5.png')
    },
    {
      id: 6,
      title: 'Take a Coffee',
      subTitle: '12 Tasks',
      image: require('./assets/cat6.png')
    },
    {
      id: 7,
      title: 'Call Dad',
      subTitle: '12 Tasks',
      image: require('./assets/cat7.png')
    },
    {
      id: 8,
      title: 'Text Future',
      subTitle: '12 Tasks',
      image: require('./assets/cat8.png')
    }
  ];

  const ongoing = [
    {
      id: 1,
      title: 'Mobile App Development'
    },
    {
      id: 2,
      title: 'Web Development'
    },
    {
      id: 3,
      title: 'Push Ups'
    },
    {
      id: 4,
      title: 'Eating'
    },
    {
      id: 5,
      title: 'On Phone'
    },
    {
      id: 6,
      title: 'Taking Coffee'
    },
    {
      id: 7,
      title: 'Daddy Calling...'
    },
    {
      id: 8,
      title: 'Online Meeting'
    },
    {
      id: 9,
      title: 'Software Engineering'
    },
    {
      id: 10,
      title: 'Security Intelligence'
    },
    {
      id: 11,
      title: 'Novels'
    },
    {
      id: 12,
      title: 'Project Proposal'
    },
    {
      id: 13,
      title: 'Self Development'
    },
    {
      id: 14,
      title: 'Assignments'
    },
    {
      id: 15,
      title: 'Meditation'
    }
  ];




  return (
    <View style={styles.container}>
      {
        <View style={styles.profile}>
          <Text style={styles.proText}>Hello, Devs</Text>
          <View style={styles.circ}>
          <Image source={require('./assets/pro.png')} style={styles.proImage}/>
        </View>
  
        <Text style={styles.notification}>14 tasks today</Text>
        <View style={styles.search}>
        <TextInput placeholder='Search' style={styles.searchbox} keyboardType='default' keyboardAppearance='dark'/>
        <View style={styles.filter}>
          <Image source={require('./assets/Vector.png')} style={{marginTop: 12, marginLeft: 10}}/>
        </View>
      </View>
      <AntDesign name="search1" size={23} color="black" style={{marginTop: -35, marginLeft: 35, }}/>

    </View>




        
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 70
  },

  profile: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  proText: {
    color: '#000',
    fontSize: 32,
    lineHeight: 38.4,
    fontWeight: '700',
  },
  circ: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 25,
    backgroundColor: '#fff'
  },
  proImage: {
    width: 46,
    height: 45,
  },
notification: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '500',
    marginTop: -10
  },

  searchbox: {
    width: 280,
    height: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 14,
    paddingLeft: 50,
    fontWeight: '700',
    fontSize: 16,
    color: 'black'
  },
  filter: {
    width:

      },
  
  
});
