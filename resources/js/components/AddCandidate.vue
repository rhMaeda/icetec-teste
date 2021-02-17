<template>
    <div>
        <h3 class="text-center">Add candidate</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addCandidate">
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                        <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="candidate.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="candidate.email">
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="text" class="form-control" v-model="candidate.age">
                    </div>
                    <div class="form-group">
                        <label>Linkedin</label>
                        <input type="text" class="form-control" v-model="candidate.url">
                    </div>
                    <div class="form-group">
                        <label>Stack</label>
                        </br>
                        <label>C#</label>
                        <input type="checkbox" value = "C#" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>Javascript</label>
                        <input type="checkbox" value = "Javascript" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>Nodejs</label>
                        <input type="checkbox" value = "Nodejs" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>Angular</label>
                        <input type="checkbox" value = "Angular" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>React</label>
                        <input type="checkbox" value = "React" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>Ionic</label>
                        <input type="checkbox" value = "Ionic" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>Mensageria</label>
                        <input type="checkbox" value = "Mensageria" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>PHP</label>
                        <input type="checkbox" value = "PHP" v-model="candidate.stack" name="stack[]"/>
                        </br>
                        <label>Laravel</label>
                        <input type="checkbox" value = "Laravel" v-model="candidate.stack" name="stack[]"/>
                        </br>
                    </div>
                    <button type="submit" class="btn btn-primary">Add candidate</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {id: '1' ,name: "C#"},
        {id: '2' ,name: "Javascript"},
        {id: '3' ,name: "Nodejs"},
        {id: '4' ,name: "Angular"},
        {id: '5' ,name: "React"},
        {id: '6' ,name: "Ionic"},
        {id: '7' ,name: "Mensageria"},
        {id: '8' ,name: "PHP"},
        {id: '9' ,name: "Laravel"},
      ],
      errors: [],
      candidate: {
        name: "",
        email: "",
        age: "",
        url: "",
        stack: [],
      },
    };
  },
  methods: {
    addCandidate: function(e) {
        this.errors = [];
        if (!this.candidate.name) {
        this.errors.push("Name required.");
      }
       if (!this.candidate.age) {
        this.errors.push("Age required.");
      }
       if (!this.candidate.url) {
        this.errors.push("Linked Url required.");
      }
       if (!this.candidate.stack.lenght > 0) {
        this.errors.push("Stack required.");
      }
      if (!this.candidate.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.candidate.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
      this.axios
        .post("http://localhost:8000/api/candidate/add", this.candidate)
        .then(
          (response) => this.$router.push({ name: "home" })
          // console.log(response.data)
        )
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
};
</script>