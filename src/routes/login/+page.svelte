<script lang="ts">

    import {goto} from "$app/navigation";
    import {Routes} from "../../lib/constants/routes";

    function handleCancel() {
        goto(Routes.Home);
    }

    function handleSubmit() {
        goto(Routes.Dashboard.Home);
    }

    function handleGoogleLogin() {
        console.log('google login');

    }

</script>

<div class="card w-96 p-3 bg-base-200 shadow-xl">
    <div class="card-title flex justify-center">
        <h2 class="text-2xl">Dashboard Login</h2>
    </div>
    <div class="card-content w-full py-5">
        <div class="w-full">
            <input type="email" placeholder="Email address" class="input w-full"/>
        </div>
        <div class="w-full pt-4">
            <input type="password" placeholder="Password" class="input w-full"/>
        </div>
    </div>
    <div class="mb-3 flex justify-center">
        <button class="btn btn-secondary" on:click={handleGoogleLogin}>Google</button>
    </div>
    <div class="card-actions justify-end">
        <button class="btn" on:click={handleCancel}>Cancel</button>
        <button class="btn btn-primary" on:click={handleSubmit}>Login</button>
    </div>
</div>