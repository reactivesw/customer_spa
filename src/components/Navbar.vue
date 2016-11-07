<template>
  <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div class="container">
      <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-toggleable-md" id="navbarResponsive">
        <router-link :to="{ name: 'home' }" class="navbar-brand">Site name</router-link>

        <ul class="nav navbar-nav">
            <router-link
            class="nav-item"
            active-class="active"
            tag="li"
            v-for="category of sortedCategories"
            :to="{ name: 'category', params: { id: category.id }}">
            <a class="nav-link">{{category.name[$store.state.lang]}}</a>
            </router-link>
        </ul>

        <ul class="nav navbar-nav float-lg-right">
            <li class="nav-item" style="display:none;"><a class="nav-link">{User Name}</a></li>
            <li class="nav-item"><a class="nav-link">Log In</a></li>
            <li class="nav-item"><a class="nav-link">Sign Up</a></li>
            <li class="nav-item"><a class="nav-link">Cart</a></li>
        </ul>
        
        <form class="form-inline float-lg-right">
            <input class="form-control" type="text" placeholder="Search">
            <button class="btn btn-outline-secondary">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {
    computed: {
      sortedCategories() {
        const categories = this.$store.state.category.categories;
        const sorted = Object.keys(categories).map(key => categories[key])
        .sort((one, another) => one.orderHint < another.orderHint);
        return sorted;
      },
    },
  };
</script>

