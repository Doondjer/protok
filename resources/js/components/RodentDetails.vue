<template>
    <div class="modal modal-blur fade show bg-white-overlay" id="modal-details" tabindex="-1" style="display: block;" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" v-text="`${rodent.name} ${rodent.rodent_type.type ? rodent.rodent_type.type : ''}`"></h5>
                    <button type="button" @click="$emit('close_details')" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <img :src="rodent.rodent_type.image" class="card-img-top">
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label strong">Tehničke Karakteristike</label>
                    </div>
                    <div class="row g-3">
                        <div class="col-6 row text-truncate align-items-center d-flex justify-content-between" v-if="rodent.rodent_type.type">
                            <label class="text-reset d-block col-auto">Tip Bagera:</label>
                            <div class="d-block text-muted text-truncate col-auto" v-text="rodent.rodent_type.type"></div>
                        </div>
                        <div class="col-6 row text-truncate align-items-center d-flex justify-content-between mt-2" v-for="rodent_attribute in rodent.rodent_type.attributes">
                            <label class="text-reset d-block col-auto" v-text="rodent_attribute.name"></label>
                            <div class="d-block text-muted text-truncate col-auto" v-text="`${rodent_attribute.value} ${rodent_attribute.unit}`"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RodentDetails.vue",
    props: ['rodent']
}
</script>

<style scoped>

</style>
