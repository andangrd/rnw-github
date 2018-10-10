import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Components/Shared.style';

const centerComponentStyle = { color: '#fff' };

const outerContainerStyle = {
  height: 50,
  paddingHorizontal: 0,
  width: '100%'
};

const buttonStyle = {
  alignItems: 'center',
  height: 48,
  justifyContent: 'center',
  paddingRight: 5,
  width: 40
};

const withHeader = (props) => (WrappedComponent) => {
  class HOC extends PureComponent {
    goBack = () => this.props.history.goBack();

    goHome = () => this.props.history.replace('/');

    horizontalComponent = (name, size, onPress) => (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Icon name={name} size={size} color='#fff' />
      </TouchableOpacity>
    );
  
    centerComponent = (title) => ({
      text: title.toUpperCase(),
      style: centerComponentStyle
    });

    render() {
      console.log({ props });
      console.log(this.props);

      const { title } = props;

      return (
        <View style={styles.container}>
          <Header
            outerContainerStyles={outerContainerStyle}
            leftComponent={this.horizontalComponent('chevron-left', 20, this.goBack)}
            centerComponent={this.centerComponent(title)}
            rightComponent={this.horizontalComponent('home', 25, this.goHome)}
          />
          <WrappedComponent {...this.props} />
      </View>
      );
    }
  }

  return HOC;
}

export default withHeader;
