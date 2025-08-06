import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    loadBag(state, products) {
      state.productsInBag = products;
    },

    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter(
        (item) => productId != item.id
      );
      state.productsInBag = updatedBag;
      localStorage.setItem(
        "productsInBag",
        JSON.stringify(state.productsInBag)
      );
    },
    increaseQ(state, product) {
      var quantityProduct = state.productsInBag.find(
        (item) => item.id === product.id
      );
      if (quantityProduct) {
        quantityProduct.quantity++;
        localStorage.setItem(
          "productsInBag",
          JSON.stringify(state.productsInBag)
        );
      }
    },
    decreaseQ(state, product) {
      var quantityProduct = state.productsInBag.find(
        (item) => item.id === product.id
      );
      if (quantityProduct) {
        quantityProduct.quantity--;
        localStorage.setItem(
          "productsInBag",
          JSON.stringify(state.productsInBag)
        );
      }
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("loadProducts", response.data);
      });
    },
    loadBag({ commit }) {
      if (localStorage.getItem("productsInBag"))
        commit("loadBag", JSON.parse(localStorage.getItem("productsInBag")));
    },
    addToBag({ commit, state }, product) {
      commit("addToBag", product);
      localStorage.setItem(
        "productsInBag",
        JSON.stringify(state.productsInBag)
      );
    },
    removeFromBag({ commit }, productId) {
      if (confirm("Do you want to remove item?")) {
        commit("removeFromBag", productId);
      }
    },
  },
  modules: {},
});
