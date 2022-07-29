/* eslint-disable no-alert */
import axios from 'axios';
import CONFIG from '../config';

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}?apikey=${CONFIG.API_KEY}`;
};

export const handleNetworkError = (error) => {
  if (error.message === 'Network request failed') {
    alert(
      'Kesalahan Jaringan',
      'Silakan periksa koneksi Anda dan coba kembali.',
      'iconNoInet'
    );
  }
  throw error;
};

export const handleCommonError = (error) => {
  if (error && error.data.msg === 'invalid token') {
    alert(
      'Session kamu telah habis',
      'Silakan login kembali dengan akun kamu yg telah terdaftar'
    );
    throw new Error({
      logout: true
    });
  } else {
    throw error;
  }
};

const post =
  (api) =>
  (data, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios.post(
      fullURL(api),
      data,
      {
        method: 'POST',
        headers: {
          Authorization: tokens
        }
      },
      timemout
    );
  };

const patch =
  (api) =>
  (data, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios
      .patch(
        fullURL(api),
        data,
        {
          method: 'POST',
          headers: {
            Authorization: tokens
          }
        },
        timemout
      )
      .catch((err) => {
        const {
          history: { push }
        } = this.props;
        push('/');
        localStorage.clear();
      });
  };

const postData =
  (api) =>
  (data, timemout = true) => {
    const tokens = localStorage.getItem('token');
    return axios
      .post(
        fullURL(api),
        data,
        {
          method: 'POST',
          headers: {
            Authorization: tokens
          }
        },
        { handleNetworkError, handleCommonError },
        timemout
      )
      .catch((err) => {
        const {
          history: { push }
        } = this.props;
        push('/');
        localStorage.clear();
      });
  };

const get = (api) =>
  (params) => {
    const tokens = localStorage.getItem('token');
    return axios(
      fullURL(api),
      params,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokens}`
        },
        
      }
    ).catch((err) => {
      // todo
    });
  };

const getWithSlug =
  (api) =>
  (slug, timemout = true) => {
    return axios(
      `${fullURL(api)}${slug}`,
      {
        method: 'GET',
      },
      { handleNetworkError, handleCommonError },
      timemout
    ).catch((err) => {
      const {
        history: { push }
      } = this.props;
      push('/');
      localStorage.clear();
    });
};

// Auth
export const login = post('admins/auth_token/');

export const getMovie = getWithSlug();

const API = {
    login,
    getMovie
}

export default API;