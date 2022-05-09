<template>
    <div :class="{'is-invalid': errors && errors.length}">
        <div class="mb-3" v-for="(value,i) in input_values">
            <div class="input-group input-group-flat" :class="{'is-invalid': errors && errors['array'].hasOwnProperty(name + '.' + i)}">
                <input type="text" class="form-control" :class="{'is-invalid': errors && errors['array'].hasOwnProperty(name + '.' + i)}" :name="`${name}[]`" :value="old_values && old_values[i] ? old_values[i] : value">
                <span class="input-group-text">
                <a href="#" @click.prevent="removeInput(i)" title="Obriši Polje" class="text-danger" data-bs-toggle="tooltip" data-bs-original-title="Obriši Polje"><!-- Download SVG icon from http://tabler-icons.io/i/x -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </a>
            </span>
            </div>
            <div class="invalid-feedback" v-if="errors && errors['array'].hasOwnProperty(name + '.' + i)" v-text="errors['array'][name + '.' + i][0]"></div>
        </div>

        <a href="#" @click.prevent="addInput" class="btn btn-icon" aria-label="Button">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </a>
    </div>

</template>

<script>
    export default {
        props: {
            old_values: {
                type: Array,
                required: false,
            },
            values: {
                type: Array,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            errors: {
                type: Object,
                required: false,
            }
        },
        data() {
          return {
              input_values: this.values
          }
        },
        computed: {
            main_error(){

                console.log(this.errors['array'].hasOwnProperty(name));
                console.log(this.errors);
                return this.errors;
            }
        },
        methods: {
            addInput(){
                this.input_values.push('');
            },
            removeInput(i) {
                this.input_values.splice(i, 1);
            }
        }
    }
</script>
