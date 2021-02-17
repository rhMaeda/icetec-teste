<template>
    <div>
        <h3 class="text-center">All Candidates</h3><br/>

        <select v-model="search">
            <option value="" selected>All</option>
            <option value="C#">C#</option>
            <option value="Javascript">Javascript</option>
            <option value="Nodejs">Nodejs</option>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Ionic">Ionic</option>
            <option value="Mensageria">Mensageria</option>
            <option value="PHP">PHP</option>
            <option value="Laravel">Laravel</option>
        </select>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Age</th>
                <th>Email</th>
                <th>Linkedin</th>
                <th>Stack</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="candidate in filteredContent" :key="candidate.id">
                <td>{{ candidate.id }}</td>
                <td>{{ candidate.name }}</td>
                <td>{{ candidate.age }}</td>
                <td>{{ candidate.email }}</td>
                <td>{{ candidate.url }}</td>
                <td>{{ candidate.stack }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: candidate.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteCandidate(candidate.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                candidates: [],
                search: '',
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/candidates')
                .then(response => {
                    this.candidates = response.data;
                });
        },
        computed:{
            filteredContent(){
                
                return this.candidates.filter(candidate => {
                    return candidate.stack.join().toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        methods: {
            deleteCandidate(id) {
                this.axios
                    .delete(`http://localhost:8000/api/candidate/delete/${id}`)
                    .then(response => {
                        let i = this.candidates.map(item => item.id).indexOf(id);
                        this.candidates.splice(i, 1)
                    });
            }
        }
    }
</script>