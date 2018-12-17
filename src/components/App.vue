<template>
  <div id="app">
    <div class="search">
      <label for="search-input" class="search__label">Find you machine:</label>
      <input
        type="text"
        :value="budget > 0 ? budget : ''"
        @input="onBudgetChange"
        id="search-input"
        class="search__input"
        placeholder="Write your budget">
    </div>
    <ul class="list">
      <li v-for="item in currentList" :key="item.name" class="list__item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.text }}</p>
        <p>{{ item.price }} eur</p>
        <div class="list__item-button-wrapper">
          <button>View details</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'app',
    methods: {
        ...mapActions(['loadList', 'userBudgetUpdated']),
        onBudgetChange(e) {
            this.userBudgetUpdated(e.target.value);
        }
    },
    mounted() { // Executed on component mount (obviously)
       this.loadList();
    },
    computed: {
        ...mapState({
            currentList: state => state.currentList,
            budget: state => state.budget
        }),
    }
  }
</script>


<!-- Global CSS -->
<style>
  body {
    background-color: #f6f6f6;
  }
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<style scoped>
  #app {
    text-align: center;
  }

  .search {
    font-size: 24px;
    margin: 40px;
  }

  .list {
    font-size: 24px;
    font-weight: 300;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .list__item {
    background-color: #ffffff;
    border: 1px solid #2c3e50;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    min-width: 380px;
    text-align: left;
  }

  .list__item-button-wrapper {
    text-align: right;
  }

  button {
    cursor: pointer;
    background-color: teal;
    color: white;
    border: 1px solid black;
    border-radius: 20px;
    padding: 16px;
  }

</style>
