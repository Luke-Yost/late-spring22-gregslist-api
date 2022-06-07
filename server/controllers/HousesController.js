import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";



export class HousesController extends BaseController {

  constructor(){
    super('api/houses')
    this.router
    .get('',this.getAllHouses)
  }

  async getAllHouses(req, res, next){
    try {
      logger.log("[QUERY]", req.query)
      const houses = await housesService.getAllHouses(req.query)
      return res.send(houses)
    }
    catch(error){
      next(error)
    }
  }

  // async makeHouse(req, res, next){
  //   try {
      
  //   }
  // }

}