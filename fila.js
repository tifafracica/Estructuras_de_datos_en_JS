// caracterisada por se una secuencia de elementos en la que la operacion de inserción (enqueue) se realiza por un extremo y la operación de extracción (dequeue) por el otro.
//FIFO => FIRST IN FIRST OUT

class Queue {
  constructor(){
    this.items = {};
    this.front = 0;
    this.end = 0;
  };

  enqueue(data){
    this.items[this.end] = data;
    this.end++;
  }

  dequeue(){
    if(this.front === this.end){
      return null
    }

    const data = this.items[this.front];
    this.front++;
    return data;
  }

  // saber el tamaño de items
  getSize(){
    return this.end - this.front;
  }

  // saber si items esta vacio o no
  isEmpty(){
    if(this.getSize === 0){
      return true;
    }else{
      return false;
    }
  }

  // traer la primera posicion de items
  peek(){
    if(this.getSize === 0){
      return null;
    }

    return this.items[this.front];
  };

  // imprimir cada elemento de items
  print(){
    if(this.getSize === 0){
      return null;
    };
    let result = '';
    for (let i = this.front; i < this.end; i++) {
      result += this.items[i] + ' ';
    };
    return result;
  }
}