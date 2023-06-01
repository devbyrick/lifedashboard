<script lang="ts">

  export let id = `${Date.now()}`;

  function submitForm() {
    return false;
  }

  let weight = 0;

</script>

<dialog {id} class="modal">
    <form method="dialog" class="modal-box" on:submit="{submitForm}">
        <div class=" p-3">
            <div class="">
                <h3 class="font-bold text-2xl">Add Weight</h3>
            </div>
            <div class="mt-5">
                <div class="flex flex-col">
                    <label for="weight" class="text-sm font-bold">Weight</label>
                    <input type="tel" name="weight" id="weight" class="input" placeholder="Weight" value={weight} required>
                </div>
                {weight}
                <p class="py-4">Press ESC key or click the button below to close</p>
            </div>
            <div class="w-full flex justify-end">
                <div class="modal-action justify-end">
                    <button class="btn">Cancel</button>
                    <button class="btn btn-primary" type="submit">Add</button>
                </div>
            </div>

        </div>

    </form>
</dialog>