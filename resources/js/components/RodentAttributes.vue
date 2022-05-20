<template>
    <div :class="{'is-invalid': errors && errors.length}">
        <div class="input-group mb-3">
            <input type="text" :disabled=" ! rodent_type" class="form-control" name="name" placeholder="Naziv..." v-model="form.name">
            <input type="text" :disabled=" ! rodent_type" class="form-control" name="value" placeholder="Veličina..." v-model="form.value">
            <input type="text" :disabled=" ! rodent_type" class="form-control" name="unit" placeholder="Merna jedinica..." v-model="form.unit">
            <button :disabled=" ! rodent_type"  @click.prevent="submitAttribute" title="Dodaj Tehnički Podatak" class="btn btn-green" type="button" aria-label="Button">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
        </div>
        <p class="text-danger" v-if=" ! rodent_type">Morate prvo kreirati bager da bi ste dodavali tehničke detalje.</p>

        <div class="mb-3" v-for="(rodent_attribute,i) in rodentAttributes" :key="i">
            <div class="input-group">
                <input type="text" class="form-control disabled" disabled="disabled" :value="rodent_attribute.name">
                <input type="text" class="form-control disabled" disabled="disabled" :value="rodent_attribute.value">
                <input type="text" class="form-control disabled" disabled="disabled" :value="rodent_attribute.unit">
                <span class="input-group-text">
                    <a href="#" @click.prevent="removeAttribute(i)" title="Obriši Tehnički Podatak" class="text-danger" data-bs-toggle="tooltip" data-bs-original-title="Obriši Tehnički Podatak">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </a>
                </span>
            </div>
            <div class="invalid-feedback"></div>
        </div>
    </div>

</template>

<script>
import apiService from "../services/ApiService";
import { dispatchError } from "../utils/helpers";
import Swal from "sweetalert2";
    export default {
        props: {
            rodent_attributes: {
                type: Array,
                required: false,
            },
            rodent_type: {
                type: String,
                required: false
            }
        },
        data() {
          return {
              form: {
                  name: null,
                  value: null,
                  unit: null,
              },
              rodentAttributes: null,
          }
        },
        computed: {
        },
        methods: {
            removeAttribute(index) {
                apiService.deleteAttribute(this.rodent_type, this.rodentAttributes[index].id)
                    .then(({data}) => {
                        if (data.data !== true){
                            Swal.fire(data.message, '','error');

                        } else {
                            this.$delete(this.rodentAttributes, index);
                            Swal.fire(data.message, '','success');
                        }

                    })
                    .catch(e => Swal.fire(e.response.statusText, e.message, 'error'));
            },
            submitAttribute() {
                apiService.submitAttribute(this.rodent_type, this.form)
                    .then(this.onSuccess)
                    .catch(this.onError);
            },
            onError(error) {
                dispatchError(error);
            },
            onSuccess({data}) {
                this.rodentAttributes.push(data.data);
                Swal.fire(data.message, '','success');
                this.form.name = null;
                this.form.value = null;
                this.form.unit = null;
            }
        },
        created() {
            this.rodentAttributes = this.rodent_attributes;
        }
    }
</script>
