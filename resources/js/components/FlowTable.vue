<template>
    <div class="container-xl">
        <div class="row row-cards">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" v-text="`${rodent.name} - Tabela Protoka`"></h3>
                    </div>
                    <div class="card-body border-bottom py-3 container">
                        <div class="d-flex">
                            <div class="text-muted">
                                Prikaži
                                <div class="mx-2 d-inline-block">
                                    <input type="text" class="form-control" v-model="form.per_page" name="per_page" size="3" aria-label="Items per page" @keyup.enter="fetch" @blur="fetch">
                                </div>
                                recorda
                            </div>
                            <div class="ms-auto text-muted">

                                <a class="btn btn-outline-danger" download="tabler-icon-device-analytics.svg" href="#"
                                   @click.prevent="exportTable">
                                    <svg class="icon icon-tabler icon-tabler-file-export" fill="none" height="24"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                         width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                        <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
                                    </svg>
                                    Eksport SVG
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap datatable">
                            <thead>
                            <tr>
                                <th class="w-1"></th>
                                <th>ID</th>
                                <th>Naziv Bagera</th>
                                <th>Protok 15-min [m3/h]</th>
                                <th>Smena</th>
                                <th class="w-1">Datum / Vreme</th>
                            </tr>
                            </thead>
                            <tbody v-if="flows.length">
                            <tr v-for="(flow, index) in flows" :key="index">
                                <td>
                                    <input aria-label="Odaberi Zapis" class="form-check-input m-0 align-middle" type="checkbox">
                                </td>
                                <td v-text="flow.id"></td>
                                <td class="td-truncate">
                                    <div class="text-truncate" v-text="rodent.name"></div>
                                </td>
                                <td v-text="flow.flow"></td>
                                <td v-text="flow.shift"></td>
                                <td v-text="flow.date_time"></td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="5">

                                    <div class="empty">
                                        <div class="empty-icon"><!-- Download SVG icon from http://tabler-icons.io/i/mood-sad -->
                                            <svg class="icon" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                                                 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                <circle cx="12" cy="12" r="9"></circle>
                                                <line x1="9" x2="9.01" y1="10" y2="10"></line>
                                                <line x1="15" x2="15.01" y1="10" y2="10"></line>
                                                <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
                                            </svg>
                                        </div>
                                        <p class="empty-title">Nište nije pronađeno!</p>
                                        <p class="empty-subtitle text-muted">
                                            Pokušaj sa drugim bagerom ili kontaktiraj administratore.
                                        </p>
                                    </div>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <paginator :dataSet="dataSet"
                               :form="form"
                               class="uk-margin-small uk-margin-small-top"
                               @page_changed="fetch"
                    >
                    </paginator>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import apiService from "../services/ApiService";
import Swal from "sweetalert2";

const paginator = () => import('./Paginator');

export default {
    name: 'FlowTable',
    props: {
        rodent: {}
    },
    data() {
        return {
            dataSet: false,
            flows: [],
            form: {
                rodent: this.rodent.id,
                per_page: 10,
                page:1
            }
        }
    },
    components: {
        paginator,
    },
    created() {
        this.fetch();
    },
    methods: {
        fetch() {
            apiService.getStationTableData(this.form)
                .then(this.refresh)
                .catch(e => {
                    Swal.fire(e.response.statusText, e.message, 'error');
                });
        },
        refresh({data}) {
            this.dataSet = data.data;
            console.log(this.dataSet.per_page);
            this.form.per_page = this.dataSet.per_page;
            this.flows = data.data.data;
        },
        exportTable() {
            window.open(apiService.exportExcel(this.rodent.id));
        },
    }
}
</script>
