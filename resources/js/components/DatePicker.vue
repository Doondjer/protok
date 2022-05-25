<template>
    <div class="row">
        <div class="col">
            <DatePicker
                v-model="form.date_start"
                mode="datetime"
                :model-config="modelConfig"
                class="input-group"
                :max-date='new Date()'
                :timezone="'UTC'"
                :class="{ 'is-invalid': errors.has('date_start') }"
            >
                <template v-slot="{ inputValue, inputEvents }">
                <span class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="link-secondary" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                        <line x1="16" y1="3" x2="16" y2="7"></line>
                        <line x1="8" y1="3" x2="8" y2="7"></line>
                        <line x1="4" y1="11" x2="20" y2="11"></line>
                        <line x1="11" y1="15" x2="12" y2="15"></line>
                        <line x1="12" y1="15" x2="12" y2="18"></line>
                    </svg>
                </span>
                    <input
                        id="date_start"
                        class="form-control"
                        placeholder="DD-MM-GGGG"
                        :value="inputValue"
                        v-on="inputEvents"
                        :class="{ 'is-invalid': errors.has('date_start') }"
                    />
                </template>
            </DatePicker>
            <div class="invalid-feedback" v-text="errors.get('date_start')" v-if="errors.has('date_start')"></div>
        </div>
        <div class="col">
            <DatePicker
                v-model="form.date_end"
                mode="datetime"
                :model-config="modelConfig"
                class="input-group"
                :max-date='new Date()'
                :timezone="'UTC'"
                :class="{ 'is-invalid': errors.has('date_end') }"
            >
                <template v-slot="{ inputValue, inputEvents }">
                    <span class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="link-secondary" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                            <line x1="16" y1="3" x2="16" y2="7"></line>
                            <line x1="8" y1="3" x2="8" y2="7"></line>
                            <line x1="4" y1="11" x2="20" y2="11"></line>
                            <line x1="11" y1="15" x2="12" y2="15"></line>
                            <line x1="12" y1="15" x2="12" y2="18"></line>
                        </svg>
                    </span>
                    <input
                        id="date_end"
                        class="form-control"
                        placeholder="DD-MM-GGGG"
                        :value="inputValue"
                        v-on="inputEvents"
                        :class="{ 'is-invalid': errors.has('date_end') }"
                    />
                </template>
            </DatePicker>
            <div class="invalid-feedback" v-text="errors.get('date_end')" v-if="errors.has('date_end')"></div>
        </div>
        <div class="col">
            <button @click.prevent="exportXls" :disable=" ! form.date_start || ! form.date_end" class="btn btn-success">Eksportuj</button>
        </div>

    </div>
</template>

<script>

import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import Errors from './../core/Errors';
import apiService from "../services/ApiService";
import {dispatchError} from "../utils/helpers";

export default {
    name: "DatePicker.vue",
    props: ['station'],
    data() {
      return {
          form: {
              rodent_id: this.station.id,
              date_start: '',
              date_end: new Date(),
          },
          modelConfig: {
              type: 'string',// Uses 'iso' if missing
          },
          errors: new Errors(),
      }
    },
    components: {
        DatePicker,
        apiService,
    },
    methods: {
        exportXls() {
            apiService.exportExcel(this.form)
                .then(response => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', `protok_${this.station.name}.xlsx`);
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
                .catch(this.onError);
        },
        onError(error) {
                let errors = String.fromCharCode.apply(
                null,
                new Uint8Array(error.response.data));
                this.errors.record(JSON.parse(errors));
            },
    }
}
</script>

<style scoped>

</style>
