import axios from "axios";

class api {
  static get(url) {
    return axios.get(`http://localhost:5000${url}`);
  }

  static post(url, body) {
    return axios.post(`http://localhost:5000${url}`, body);
  }

  static put(url, body) {
    return axios.put(`http://localhost:5000${url}`, body);
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

  static getTiposCliente() {
    return api.get('/tipo-cliente')
  }

  static postFuncionario(data) {
    return api.post('/funcionario', data)
  }

  static deleteFuncionario(id) {
    return api.delete(`/funcionario/${id}`)
  }

  static getClientes() {
    return api.get('/cliente')
  }

  static postClientes(data) {
    return api.post('/cliente', data)
  }

  static getOrdens() {
    return api.get('/ordem-servico')
  }

  static postOrdens(data) {
    return api.post('/ordem-servico', data)
  }

  static putOrdens(data) {
    return api.put('/ordem-servico', data)
  }

}

export default api;
