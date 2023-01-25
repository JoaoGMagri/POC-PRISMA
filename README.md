# POC-TS

> Um pequeno projeto para registar seus gastos.

## Idealização do projeto

O projeto foi pensado para treinar os aprendizados da semana em TypeScript

- usando os types das libs;
- usando os types criados pelo propio desenvolvedor;

## DOC-API

1. Pegar todos os registros de gastos:
    
    Route get: ```"/spendings"``` 

    Desrição: nela você consegue pegar a lista de todos os gastos. 
    
    Saida:
    ```bash
    [
        {
            "id": 1,
            "name": "comida",
            "price": 300,
            "createdAt": "2023-01-18T03:00:00.000Z"
        },
        {
            "id": 1,
            "name": "comida",
            "price": 300,
            "createdAt": "2023-01-18T03:00:00.000Z"
        },
    ]
    ```

2. Pegar registros de gastos filtrado: 

    Route get: ```"/spendings/:price"``` 
    
    Desrição: Filtra até qual o maior valor que se pode aparecer na busca. 

    Saida:
    ```bash
    [
        {
            "id": 1,
            "name": "comida",
            "price": 300,
            "createdAt": "2023-01-18T03:00:00.000Z"
        },
        {
            "id": 1,
            "name": "comida",
            "price": 300,
            "createdAt": "2023-01-18T03:00:00.000Z"
        },
    ]
    ```

3. Novo gasto:

    Route post: ```"/spendings"```
    
    Desrição: Criar um novo gasto.

    Entrada: 
    ```bash
    {
        "name": "joao",
        "price": 300
    }
    ```
    Saida: status 200.


4. Editar gasto:

    Route put: ```"/spendings/:id"```
    
    Desrição: Editar um gasto criado.

    Entrada: 
    ```bash
    {
        "name": "joao",
        "price": 300
    }
    ```
    Saida: status 200. 

5. Deletar gasto:

    Route delete: ```"/spendings/:id"```
    
    Desrição: Deletar um gasto criado.
