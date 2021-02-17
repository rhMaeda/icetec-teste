<template>

    <div class="container">
        <div class="text-center" style="margin: 20px 0px 20px 0px;">
            <a href="http://127.0.0.1:8000/" target="_blank"><img src="https://i.imgur.com/OGe7QoE.png"></a><br>
            <span class="text-secondary">Teste icetec utilizando vuejs no front com laravel no back</span>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Inicio</router-link>
                    <router-link to="/add" class="nav-item nav-link">Add Canditdate</router-link>
                </div>
            </div>
        </nav>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>