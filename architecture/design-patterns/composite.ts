interface User {
  name: string
  email: string
}

interface Validation {
  validate(data: User): boolean
}

class ValidationComposite implements Validation {
  constructor(
    private nameValidation: NameValidationMock,
    private emailValidation: EmailValidationMock
  ){}
  validate(user: User) {
    const nameIsValid = this.nameValidation.validate(user)
    const emailIsValid = this.emailValidation.validate(user)
    return [nameIsValid, emailIsValid].every(value => value)
  }
}

class CreateClienteController {
  constructor (
    private validation: Validation
  ) {}

  create({name, email}: User) {
    const isValid = this.validation.validate({name, email})
    if (!isValid) throw 'Invalid request'
    console.log('User was created')
  }
}

class NameValidationMock implements Validation {
  isValid = true
  user: User|undefined
  validate(data: User) {
    this.user = data
    return this.isValid
  }
}

class EmailValidationMock implements Validation{
  isValid = true
  user: User|undefined
  validate(data: User) {
    this.user = data
    return this.isValid
  }
}

function makeSut() {
  const nameValidation = new NameValidationMock()
  const emailValidation = new EmailValidationMock()
  const validationComposite = new ValidationComposite(nameValidation, emailValidation)
  const createUserController = new CreateClienteController(validationComposite)
  return {
    nameValidation, emailValidation, validationComposite, createUserController
  }
}

const {
  nameValidation, emailValidation, validationComposite, createUserController
} = makeSut()

createUserController.create({name: 'any_name', email: 'any_email'})

nameValidation.isValid = false
createUserController.create({name: 'invalid_name', email: 'any_email'})
