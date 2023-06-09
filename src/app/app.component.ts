import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'editor-e';

  expression!: string;

  lstExpression!: string;
  array!: Array<string>;

  parse(exp:string){

    let lstOpeBasic: Array<Object> = this.getListWithOpe(exp);
    lstOpeBasic.forEach( item => {
      this.lstExpression =  JSON.stringify(item);
    });

  }

  getListWithOpe(exp: string): Array<Object>{

    const charList = exp.replace(/\s/g,'').split(''); // clean expression


    charList.forEach(char =>{
    if(char === '{'){

    }
    });


    return charList;
  }


  getVariables(): Array<Object> {
    return [
      {
        "id": "1111111111111111111",
        "name": "contrato.requiere_deposito",
        "value": "",
        "type": "boolean",
        "origin": "usage case variable"
      },
      {
        "id": "1111111111111111111",
        "name": "contrato.total_pagado",
        "value": "",
        "type": "int",
        "origin": "usage case variable"
      },
      {
        "id": "1111111111111111111",
        "name": "contrato.valor_total",
        "value": "",
        "type": "int",
        "origin": "usage case variable"
      },
      {
        "id": "1111111111111111111",
        "name": "ciclo.cantidad_pagada",
        "value": "",
        "type": "int",
        "origin": "usage case variable"
      },
      {
        "id": "1111111111111111111",
        "name": "company.name",
        "value": "",
        "type": "string",
        "origin": "session variable"
      },


    ];
  }

  getOperators(): Array<Object> {
    return [ {
      "id": "1111111111111",
      "operatorType": "ART",
      "code": "SUM",
      "name": "SUMA",
      "status": "A",
      "symbol": "+",
      "priority": "2",
      "documentation": "",
      "type": "OPERATOR"
    },
    {
      "id": "1111111111111",
      "operatorType": "ART",
      "code": "RES",
      "name": "RESTA",
      "status": "A",
      "symbol": "-",
      "priority": "2",
      "documentation": "",
      "type": "OPERATOR"

    },
    {
      "id": "1111111111111",
      "operatorType": "ART",
      "code": "MLT",
      "name": "MULTIPLICACION",
      "status": "A",
      "symbol": "*",
      "priority": "1",
      "documentation": "",
      "type": "OPERATOR"

    },
    {
      "id": "1111111111111",
      "operatorType": "ART",
      "code": "DVS",
      "name": "DIVISIÓN",
      "status": "A",
      "symbol": "/",
      "priority": "1",
      "documentation": "",
      "type": "OPERATOR"

    },

    ];
  }

  getFuntions(): Array<Object>{
    return  [
      {
        "id": "1111111111111111111",
        "code": "fact",
        "name": "FACT",
        "status": "ACTIVE",
        "requiredParameters": "NOT",
        "executeMethod": "POST",
        "requestUrl": "/execute-function",
        "parameters": [
          {
            "id": "4650e632-1370-9e15-4759-ce78ea41e426",
            "parameterId": null,
            "dataType": "NUMERIC",
            "label": "number",
            "tooltip": "Number",
            "status": "ACTIVE",
            "type": "BODY",
            "required": "YES",
            "defaultValue": "",
            "section": 1,
            "order": 1,
            "documentation": "El número no negativo para el que desea el factorial.",
            "data": {
              "id": "1111111111111111111",
              "name": "contrato.total_pagado",
              "value": "",
              "type": "int",
              "origin": "usage case variable"
            }
          }
        ],
        "documentation": "Devuelve el factorial de un número.",
        "type": "FUNCTION",
        "functionType": "MATH",
        "returnDataType": "NUMERIC",
        "origin": "usage case function"
      },
      {
        "id": "1111111111111111111",
        "code": "execute-abs",
        "name": "ABS",
        "status": "ACTIVE",
        "requiredParameters": "NOT",
        "executeMethod": "POST",
        "requestUrl": "/execute-function",
        "parameters": [
          {
            "id": "1111111111111111111",
            "parameterId": "2222222222222222222",
            "dataType": "NUMERIC",
            "label": "Valor",
            "tooltip": "Valor",
            "status": "ACTIVE",
            "type": "INPUT",
            "required": "YES",
            "defaultValue": null,
            "section": 1,
            "order": 1,
            "documentation": "El numero real del que se desea obtener el valor absoluto"
          }
        ],
        "documentation": "Valor absoluto",
        "type": "FUNCTION",
        "returnDataType": "NUMERIC",
        "origin": "usage case function"
      }
    ];
  }

}
