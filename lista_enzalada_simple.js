// Una Lista Enlazada Simple es una coleccion **Linear** constituida por una secuencia de *nodos* en donde se guardan campos de datos arbitrarios y una referencia al siguiente nodo.

class Node {
    constructor(data, next){
        this.data = data;
        this.next = next:
    };
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    };

    add(data){
        const newNode = new Node (data, null);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
            current = current.next;
            };
            current.next = newNode;
        };
        this.size++;
    };

    insertAt(data, index){
        if(index < 0 || index > this.data){
            return null
        };

        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if(index === 0){
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            newNode.next = current;
            previous.next = newNode;
        };
        this.size++
    };

    print(){
        if(!this.size){
            return null
        }
        let current = this.head;
        let result = '';
        while(current){
            result += current.data += ' -> ';
            current = current.next;
        };
        result += 'X';
        return result;
    }

    removeData(data){
        let current = this.head;
        let previous = null;

        while(current != null){
            if (current.data === data) {
                if(!previous){
                    this.head = current.next;
                }else{
                    previous.next = current.next;
                };
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return null;
        };

        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current.next
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    };

    isEmpty(){
        // if(this.size === 0){
        //     return true;
        // } else {
        //     return false;
        // }
        return this.size === 0; //esta funcion la podemos escribir en una sola linea de c??digo :)
    };

    getSize(){
        return this.size;
    }
}