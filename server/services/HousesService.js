import { dbContext } from "../db/DbContext.js";



class HousesService {

  async getAllHouses(query = {}) {
    return await dbContext.Houses.find(query)
  }

}

export const housesService = new HousesService()