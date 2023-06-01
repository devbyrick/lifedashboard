<script lang="ts">

    import AddWeightModal from "./components/AddWeightModal.svelte";

</script>

<div class="">

    <button class="btn" onclick="add_weight_modal.showModal()">Add Weight</button>

    <AddWeightModal id="add_weight_modal" />
</div>