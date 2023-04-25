import axios from 'axios';

axios.defaults.baseURL = 'https://6447cd5950c25337442f85d0.mockapi.io/';

export async function getUsers() {
  const response = await axios('users');
  return response.data;
}

export async function upFollowers(user) {
  const response = await axios.put(`users/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers + 1,
    tweets: user.tweets,
  });
  return response.data;
}

export async function downFollowers(user) {
  const response = await axios.put(`users/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers - 1,
    tweets: user.tweets,
  });
  return response.data;
}
