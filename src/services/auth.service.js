import html from "../common/http-common";
import TokenService from "./token.service";

const API_URL = '/auth/';

class AuthService {
  login(user) {
    return html
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(user) {
    return html.post(
      API_URL + 'signup',
      {
        email: user.email,
        password: user.password,
        roles: user.roles,
        firstName: user.firstName,
        lastName: user.lastName,
        type: user.type
      }
    );
  }

  newPassord(data) {
    return html.post(
      API_URL + 'newPassword',
      {
        data
      }
    );
  }
}

export default new AuthService();