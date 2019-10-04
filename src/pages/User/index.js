import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  state = {
    stars: [],
    loading: true,
    pageStarred: 1,
  };

  componentDidMount() {
    this.loadStars();
  }

  componentDidUpdate(_, prevState) {
    const { pageStarred } = this.state;
    if (prevState.pageStarred !== pageStarred) {
      this.loadStars();
    }
  }

  async loadStars() {
    const { stars, pageStarred } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const { data } = await api.get(`/users/${user.login}/starred`, {
      params: { page: pageStarred },
    });

    this.setState({ stars: [...stars, ...data], loading: false });
  }

  render() {
    const { stars, loading, pageStarred } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
            // carrega mais registros ao chegar a 20% do final da lista
            onEndReachedThreshold={0.2}
            onEndReached={() => this.setState({ pageStarred: pageStarred + 1 })}
          />
        )}
      </Container>
    );
  }
}

User.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').name,
});

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
