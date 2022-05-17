import axios from "axios";

class api {
  static get(url) {
      return axios.get(`http://localhost:5000${url}`);
  }

  static post(url, body) {
    return axios.post(`http://localhost:5000${url}`, body);
}

  static getTipoServico() {
    return api.get('/tipo-servico')
  }

  static postTipoServico(data) {
    return api.post('/tipo-servico', data)
  }


}

export default api;
