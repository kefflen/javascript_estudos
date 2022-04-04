import faker from 'faker-br'

//Documentations: https://github.com/tamnil/Faker-br#readme

console.log(faker.name.firstName())
console.log(faker.br.cpf())


function generateSql(query, howMany, ...dataGenerator) {
  let result = []
  for (let queryIndex=0; queryIndex < howMany; queryIndex++) {
    let queryRow = query
    for (let index in dataGenerator) {
      let generator = dataGenerator[index]
      let toReplace = Number(index)+1
      queryRow = queryRow.replace(`%${toReplace}`, generator())
    }
    result.push(queryRow)
  }
  return result
}
// Dar um geito de colocar unique
// Minha ideia é trocar os %# e colocar os nomes de fato. E guardar os do tipo unique em set e casa ja tenha no set invocar o generator novamente

console.log({
  result: generateSql('insert into Funcionario (nome, cpf) VALUES (%1, %2)', 10, faker.name.firstName, faker.br.cpf)
})

/*
generateSqlV2.insert(funcionario, [
  {nome, nomeGenerator},
  {cpf, cpfGenerator, unique},
  {state, getChoseFrom, nullable}
])

*/

//Fazer função para converter json para sql