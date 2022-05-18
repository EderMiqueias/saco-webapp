import axios from "axios";

class api {
  static get(url) {
    return axios.get(`http://localhost:5000${url}`);
  }

  static post(url, body) {
    return axios.post(`http://localhost:5000${url}`, body);
  }

  static delete(url) {
    return axios.delete(`http://localhost:5000${url}`);
  }

  static getTipoServico() {
    return api.get('/tipo-servico')
  }

  static postTipoServico(data) {
    return api.post('/tipo-servico', data)
  }

  static getConsultas() {
    return api.get('/consultas')
  }

  static getEspecialidades() {
    return api.get('/especialidade')
  }

  static postFuncionario(data) {
    return api.post('/funcionario', data)
  }

  static deleteFuncionario(id) {
    return api.delete(`/funcionario/${id}`)
  }

}

export default api;
