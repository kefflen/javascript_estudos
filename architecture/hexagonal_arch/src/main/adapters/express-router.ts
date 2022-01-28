import { Controller } from "../../presentation/controller/contracts"


export const adaptRouteExpress = async (controller: Controller): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}