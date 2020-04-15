import React from 'react';
import {ImageBackground, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Text from '../../components/CustomText';
import {AuthContext} from '../../context/AuthProvider';
import gql from 'graphql-tag';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
      }
      token
    }
  }
`;

const authClient = new ApolloClient({
  uri: 'http://localhost:8383/',
});

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    authContext: {signInContext},
  } = React.useContext(AuthContext);

  return (
    <Mutation mutation={LOGIN_MUTATION} client={authClient}>
      {(loginMutation) => (
        // <ImageBackground
        //   style={styles.content}
        //   blurRadius={10}
        //   source={require('../../assets/images/waves.jpg')}>
        <View style={styles.content}>
          <Text style={styles.header}>THRIVAL</Text>
          {/* <Text style={styles.inputTitle}>Email</Text> */}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholder="Email"
          />
          {/* <Text style={styles.inputTitle}>Password</Text> */}
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const res = await loginMutation({
                variables: {email, password},
              });
              const {token, user} = await res.data.login;
              if (token) {
                signInContext({token, user});
              }
            }}>
            <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={async () => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.signupText}>
              Don't have an account?
              <Text style={styles.signupTextBold}> Sign Up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
        // </ImageBackground>
      )}
    </Mutation>
  );
};
export default Login;
