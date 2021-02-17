<template>
    <div>
        <h3 class="text-center">Edit candidate</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCandidate">
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
                        <input type="text" class="form-control" v-model="candidate.stack">
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
                    <button type="submit" class="btn btn-primary">Update candidate</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                candidate: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/candidate/edit/${this.$route.params.id}`)
                .then((response) => {
                    this.candidate = response.data;
                    // console.log(response.data);
                });
        },
        methods: {
            updateCandidate() {
                this.axios
                    .post(`http://localhost:8000/api/candidate/update/${this.$route.params.id}`, this.candidate)
                    .then((response) => {
                        this.$router.push({name: 'home'});
                    });
            }
        }
    }
</script>