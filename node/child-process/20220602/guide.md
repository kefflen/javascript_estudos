> Ref: https://www.digitalocean.com/community/tutorials/how-to-launch-child-processes-in-node-js-pt


## Exec
  > Executa um comando no terminal
  - Error: Caso aconteça algum erro ao tentar executar
  - stdout: As mensagens que forem escritas pelo processo
  - stderr: As mensagens de erro do processo
  - Parece que tem problemas para executar .bat no windows, ja que estes precisam de terminal

## Spawn
  > Ele pega dados via stream e não inicia o shell

## Fork
  > Executa processos nodes
  - Principal vantagem como é entre processos node, tambem é permitido a comunicação pai e filho
  - 