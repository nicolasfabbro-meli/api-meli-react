import axios from 'axios';

class MeliService {
  search = async (terms) => {
    const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=';
    try {
      const response = await axios.get(baseUrl + terms);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}

export default MeliService;
