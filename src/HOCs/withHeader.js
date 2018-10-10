import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import styles from '../Components/Shared.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const withHeader = (props) => (WrappedComponent) => {
  const outerContainerStyles = { width: '100%', height: 50 };
  const centerComponentStyles = { color: "#fff" };

  const horizontalComponent = (name, size) => (<Icon
    name={name}
    size={size}
    color='#fff'
  />);

  const centerComponent = (title) => ({
    text: title.toUpperCase(),
    style: centerComponentStyles
  });

  class HOC extends PureComponent {
    render() {
      const { title } = props;

      return (
        <View style={styles.container}>
          <Header
            outerContainerStyles={outerContainerStyles}
            leftComponent={horizontalComponent('chevron-left', 20)}
            centerComponent={centerComponent(title)}
            rightComponent={horizontalComponent('home', 25)}
          />
          <WrappedComponent {...this.props} />
      </View>
      );
    }
  }

  return HOC;
}

export default withHeader;
