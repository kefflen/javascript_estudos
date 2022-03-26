#Iniciando o projeto GraphQL

## Para iniciar o projeto
```cmd
npm i type-graphql graphql apollo-server class-validator reflect-metadata
npm i typescript @types/node ts-node-dev -D
```

## Para o projeto funcionar é necessario alterar o tsconfig
```json
  "target": "ES2018"
  "lib": ["es2018", "ESNext.AsyncIterable"]
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "strictPropertyInitialization": false,
```