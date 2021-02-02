<template>
    <div class="sing-up">
        <h1>Crie uma nova conta</h1>
        Nome: <input type="text" placeholder="Nome completo">
        <br>
        Email: <input type="text" placeholder="exemplo@gmail.com">
        <br>
        Data de nascimento: <input type="text" placeholder="dd/mm/aaaa">
        <br>
        Senha: <input type="password" placeholder="Senha">
        <br>
        
        <button>Registrar</button>
        <span>
            ou retorne ao 
            <router-link to="/login"> login.</router-link>
        </span>
    </div>
</template>