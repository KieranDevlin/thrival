import React, {Component} from 'react';
import {ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText';
import styles from './styles';
import gql from 'graphql-tag';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';

const SIGNUP_MUTATION = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`;

const authClient = new ApolloClient({
  uri: 'http://localhost:8383/',
});

const Signup = (props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const {
    authContext: {signUpContext},
  } = React.useContext(AuthContext);

  const onSubmit = async (singupMutation) => {
    if (name && email && password) {
      const res = await singupMutation({variables: {name, email, password}});
      const data = res.data.register;
      const {user, token} = data;
      if (token) {
        signUpContext({user, token});
      }
    } else {
      setError('Please provide all the information');
    }
  };

  return (
    <Mutation mutation={SIGNUP_MUTATION} client={authClient}>
      {(singupMutation) => (
        <ImageBackground
          style={styles.content}
          blurRadius={10}
          source={require('../../assets/images/waves.jpg')}>
          <Text style={styles.header}>Create an account</Text>

          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.input}
            value={name}
          />

          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
            style={styles.input}
          />

          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            value={password}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => onSubmit(singupMutation)}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </Mutation>
  );
};

export default Signup;
