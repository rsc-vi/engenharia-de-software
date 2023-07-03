const assert = require('assert');
const { CRUD } = require('../src/crud');

describe("CRUD", function() {
  describe("createItem()", function() {
    it("Adicionar um item na lista", function() {
      let c = new CRUD();
      c.createItem("Teste");
      assert.strictEqual(c.items.length, 1);
    });

    it("Adicionar 3 itens na lista", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.items.length, 3);
    });
  });

  describe("readItems()", function() {
    it("Ler todos os itens da lista", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      const items = c.readItems();
      assert.deepStrictEqual(c.items.length, 2);
    });
  });

  describe("readItem(index)", function() {
    it("Ler item pelo índice", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      const item = c.readItem(1);
      assert.strictEqual(item, "Item 2");
    });
  });

  describe("updateItem(index, updatedItem)", function() {
    it("Atualizar um item existente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      const isUpdated = c.updateItem(0, "Item Atualizado");
      assert.strictEqual(isUpdated, true);
      assert.strictEqual(c.items[0], "Item Atualizado");
    });

    it("Retornar false ao atualizar um item com índice inválido", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      const isUpdated = c.updateItem(1, "Item Atualizado");
      assert.strictEqual(isUpdated, false);
    });
  });

  describe("deleteItem(index)", function() {
    it("Deletar um item existente", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      const isDeleted = c.deleteItem(0);
      assert.strictEqual(isDeleted, true);
      assert.strictEqual(c.items.length, 0);
    });

    it("Retornar false ao deletar um item com índice inválido", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      const isDeleted = c.deleteItem(1);
      assert.strictEqual(isDeleted, false);
    });
  });
});
