<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link :to="{ name: 'home' }" class="navbar-brand">Site name</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left">
                <li v-for="category of sortedCategories">
                    <router-link :to="{ name: 'category', params: { slug: category.slug.en }}">{{category.name.en}}</a>
                </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="js-navaccount-login" style="display:none;"><a>{User Name}</a></li>
                <li class="js-navaccount-guest"><a>Log In</a></li>
                <li class="js-navaccount-guest"><a href="/signup">Sign Up</a></li>
                <li><a>Cart</a></li>
            </ul>
            <form class="navbar-form navbar-right">
                <div class="input-group">
                    <input type="text" class="form-control" required="required" name="keywords"  />
                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </form>
        </div><!--/.navbar-collapse -->
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

