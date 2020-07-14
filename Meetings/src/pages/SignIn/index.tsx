import styled from "styled-components/native";
import React, { useRef, useCallback } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from "react-native";

import logo from "../../assets/logo.png";
// import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <View>
      <Image source={logo} />
    </View>
  );
};

export default styled(SignIn)``;
