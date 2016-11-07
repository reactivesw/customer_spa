<template>
  <div>

    <th:block layout:fragment="content">

        <div class="container top-buffer">
            <!-- Example row of columns -->
            <div class="row">
                <div class="col-md-6 hidden-xs hidden-sm text-center">
                    <div class="spacer100 .hidden-xs"></div>
                    <h1>SITE NAME</h1>
                    <p>This is a place holder for some additional advertising.</p>
                    <p>Not sure we need it or not. if not, I will just make right side center horizontally</p>
                    <p>
                        <a class="btn btn-default btn-lg" href="#" role="button"
                           style="margin: 30px 0 20px 0;">View details &raquo;</a>
                    </p>
                </div>
                <div class="col-md-4 col-md-offset-2">
                    <div class="spacer50"></div>
                    <div class="well well-lg">
                        <div id="signup-form-alert" class="alert alert-danger" style="display:none;"></div>
                        <form id="signup-form" v-on:submit.prevent="signup" method="POST">
                            <div class="form-group">
                                <label for="signup-form-email">Email</label>
                                <input id="signup-form-email" name="email" class="form-control" placeholder="Email"
                                       type="email" required="required"/>
                            </div>
                            <div class="form-group">
                                <label for="signup-form-password">Password</label>
                                <input id="signup-form-password" name="password" class="form-control" placeholder="Password"
                                       type="password" required="required"/>
                            </div>
                            <div class="form-group">
                                <label for="signup-form-confirm">Confirm</label>
                                <input id="signup-form-confirm" name="confirmPassword" class="form-control" placeholder="Confirm password"
                                       type="password" required="required"/>
                            </div>
                            <button type="submit" class="btn btn-lg btn-primary">Sign Up</button>
                        </form>
                        <a href="/signin">Already have a account?</a>
                    </div>
                </div>
            </div>
        </div>

    </th:block>

  </div>
</template>

<script>
//  import
export default {
  name: 'signin',
  computed: {
    products() {
      return JSON.stringify(this.$store.state.products);
    },
  },
  beforeMount() {
    this.$store.dispatch('FETCH_PRODUCTS');
  },
};

</script>
