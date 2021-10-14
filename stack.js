// Permite almacenar y recuperar datos, el modo de acceso a sus elementos es de tipo LIFO (Last in - First out)

class Stack {
  constructor(){
    this.items = {};
    this.top = 0;
  };

  //agregar items al objeto
  push(data){
    this.top++;
    this.items[this.top] = data;
  };

  // quitar el ultimo elemento del array
  pop(){
    let deletedData;

    if(this.top){
      deletedData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deletedData;
    };
  };

  // nos va a dar el tamaño del stack
  getSize(){
    return this.top;
  }

 // verificamos si el stack esta vacio o no
  isEmpty(){
    if(!this.getSize()){
      return true;
    }else{
      return false;
    };
  };

  // seleccionar el proximo en salir

  peek(){
    if(this.isEmpty()){
      return null;
    };

    return this.items[this.top];
  };


// imprimir todos los valores del stack, el primer valor que sale es el primero que se imprime

  print(){
     if(this.isEmpty()){
      return null;
    };
    let result = '';
    for (let i = this.top; i < 0; i--) {
      result += this.items[i] + ' ';
    }

    return result
  }
}