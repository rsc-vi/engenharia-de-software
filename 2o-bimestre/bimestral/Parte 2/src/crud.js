class CRUD {
    constructor() {
      this.items = [];
    }
  
    // Adicionar um item
    createItem(item) {
      this.items.push(item);
    }
  
    // Ler todos os itens
    readItems() {
      return this.items;
    }
  
    // Ler item por indice
    readItem(index) {
      return this.items[index];
    }
  
    // Atualizar um item pelo índice
    updateItem(index, updatedItem) {
      if (index >= 0 && index < this.items.length) {
        this.items[index] = updatedItem;
        return true;
      }
      return false;
    }
  
    // Excluir um item pelo índice
    deleteItem(index) {
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  // Exemplo de uso do CRUD
  
  const crud = new CRUD();
  
  // Adicionar itens
  crud.createItem("Item 1");
  crud.createItem("Item 2");
  crud.createItem("Item 3");
  
  // Ler todos os itens
  const items = crud.readItems();
  console.log(items); // ['Item 1', 'Item 2', 'Item 3']
  
  // Ler item por indice
  const item = crud.readItem(1);
  console.log(item); // Item 2
  
  // Atualizar um item pelo índice
  const isUpdated = crud.updateItem(1, "Item Atualizado");
  console.log(isUpdated); // true
  
  // Ler todos os itens novamente
  const updatedItems = crud.readItems();
  console.log(updatedItems); // ['Item 1', 'Item Atualizado', 'Item 3']
  
  // Excluir um item pelo índice
  const isDeleted = crud.deleteItem(2);
  console.log(isDeleted); // true
  
  // Ler todos os itens novamente
  const remainingItems = crud.readItems();
  console.log(remainingItems); // ['Item 1', 'Item Atualizado']
  
  module.exports = {CRUD}