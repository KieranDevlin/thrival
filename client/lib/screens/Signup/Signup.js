import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText';
import styles from './styles';
import gql from 'graphql-tag';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import {AuthContext} from '../../context/AuthProvider';

const SIGNUP_MUTATION = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      user {
        id
        name
        email
        employerProfile {
          id
          linkedin
        }
        applicantProfile {
          id
          linkedin
          github
        }
        profileImage
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
        <View style={styles.content}>
          <Text style={styles.header}>CREATE AN ACCOUNT</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.input}
            value={name}
            placeholder="Name"
          />
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            value={password}
            secureTextEntry
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onSubmit(singupMutation)}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </Mutation>
  );
};

export default Signup;
