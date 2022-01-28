import IUserRepository from '../../port/IUserRepository'
import IUserService from '../IUserService'
import FindByEmailService from './ByEmailUserService'







function CreateUserServicesProxy(userRepository: IUserRepository) {

  let handler: ProxyHandler<UserServices> = {
    get(target, prop) {
      if (typeof prop === 'string') {
        if (target.services.has(prop)) {
          return target.getService(prop).execute
        } else if (prop === "addService") {
          return target.addService
        } else if (prop === "addServices") {
          return target.addServices
        }
      } else throw "Esta tentando acessar um valor invalido do UserServices"
    },
  }

  class UserServices {
    userRepository: IUserRepository
    services: Map<string, IUserService>
  
    constructor(userRepository: IUserRepository) {
      this.userRepository = userRepository
      this.services = new Map()
    }
  
    addService(serviceConfig: [IUserService, string | undefined]) {
      let [service, funcName = this.toCamelCase(service.constructor.name)] = serviceConfig
      this.services.set(funcName, service)
    }
  
    addServices(services: Array<[IUserService, string | undefined]>) {
      for (let serviceConfig of services) {
        this.addService(serviceConfig)
      }
    }
  
    getService(name: string) {
      let service = this.services.get(name)
      if (service) {
        return service
      } else throw "Não tem esse serviço cadastrado"
    }
  
    private toCamelCase(name: string): string {
      const [firstLetter, ...after] = name
      return firstLetter.toLowerCase() + after.join("")
    }
  }
  return new Proxy(new UserServices(userRepository), handler)
}
