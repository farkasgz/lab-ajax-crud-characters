class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const response = await axios.get("http://localhost:8000/characters")
    if (response.status === 200){
      console.log(response.data)
      return response.data;
    }
    
  }

  async getOneRegister (id) {
    const response = await axios.get(`http://localhost:8000/characters/${id}`)
    if (response.status === 200){
      console.log(response.data)
      return response.data;
    }
  }

  async createOneRegister (newChar) {
    const response = await axios.post("http://localhost:8000/characters", newChar)
    if (response.status === 200){
      console.log(response.data)
      return response.data;
    }
  }

  async updateOneRegister (id, updatedInfo) {
    const response = await axios.put(`http://localhost:8000/characters/${id}`, updatedInfo)
    if (response.status === 200){
      console.log(response.data)
      return response.data;
    }
  }

  async deleteOneRegister (id) {
    const response = await axios.delete(`http://localhost:8000/characters/${id}`)
    if (response.status === 200){
      console.log(response.data)
      return response.data;
    }
  }
}
