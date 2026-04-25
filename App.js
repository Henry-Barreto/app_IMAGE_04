import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native-web";

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image
          source={require('./img/Character.png')}
          style={styles.character}
          resizeMode="contain"
        />
        <Image
          source={require('./img/Phone.jpeg')}
          style={styles.phone}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textSection}>
        <Text style={styles.title}>Bem-vindo(a) ao aplicativo Barilife!</Text>
        <Text style={styles.description}>
          A Sociedade Brasileira de Cirurgia Bariátrica e Metabólica (SBCBM) 
          desenvolveu o aplicativo pensando em você, paciente bariátrico. 
          É um aplicativo inovador e gratuito.
        </Text>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity>
          <Image 
            source={require('./img/Jump.jpeg')} 
            style={styles.btnImg} 
            resizeMode="contain"
          />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image 
            source={require('./img/Next.jpeg')} 
            style={styles.btnImg} 
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  imageSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 250,
    marginBottom: 30,
  },
  character: {
    width: 90,
    height: 180,
    marginRight: -20,
    zIndex: 1,
  },
  phone: {
    width: 160,
    height: 250,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnImg: {
    width: 140,
    height: 60,
  },
});

export default App;