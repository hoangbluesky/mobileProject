import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentLogo: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  NamePage : {
    alignItems: 'center',
    justifyContent: 'bottom'
  },
  nameStore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'Black',
  },
  nameTile: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9139BA',
  },
  curve: {
    width: '100%',
    height: '30%',
    backgroundColor: '#DBC0E8',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
  },
  TitleScreen: {
    alignItems: 'center',
    color: 'Black',
    fontSize: '26',
    fontWeight: '700',
    alignItems: 'bottom',
    marginBottom: 30
  },
  content: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#9139BA",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    marginTop: 10,
    fontSize: 16,
  },
  btnLogin: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#9139BA',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
  },
  btnTextLogin: {
    color: '#fff',
    fontSize: 16,
  },
  forgot: {
    color: '#9139BA',
    fontSize: 14,
    textAlign:'center'
  }
});