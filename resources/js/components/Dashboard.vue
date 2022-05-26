<template>
  <div class="mt-3">
      <div class="container-xl">
          <div class="row row-cards">
              <div class="col-md-4">
                  <pie-card
                      v-if="loaded"
                      :total="totalRam"
                      :used="usedRam"
                      :free="freeRam"
                      :display_total="true"
                      :title="'Zauzetost RAM Memorije'"
                  ></pie-card>
              </div>
              <div class="col-md-4">
                  <pie-card
                      v-if="loaded"
                      :total="totalLoad"
                      :used="load"
                      :free="freeLoad"
                      :display_total="false"
                      :title="'CPU Opterećenje'"
                  ></pie-card>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";
import pieCard from "./Card";

export default {
    name: "Dashboard.vue",
    components: {
        pieCard,
    },
    data() {
        return {
            memory: null,
            totalRam: null,
            usedRam: null,
            freeRam: null,
            load: null,
            totalLoad: 100,
            freeLoad: null,
            loaded: false,
        }
    },
    mounted() {
        this.fetch();
        this.intervalFetchData();
    },
    methods: {
        intervalFetchData: function () {
            setInterval(() => {
                this.fetch();
            }, 10 * 1000);
        },
        fetch(){
            ApiService.getServerUsageData()
                .then(this.onSuccess)
                .catch(e => {
                    console.dir(e);
                    alert('Greska, proveri logove u konzoli!');
                });
        },
        onSuccess({data}){
            this.totalRam = parseInt(data.totalram);
            this.usedRam = parseInt(data.usedmemInGB);
            this.freeRam = this.totalRam - this.usedRam;
            this.load = data.load;
            this.freeLoad = this.totalLoad - this.load;
            this.loaded = true;
        }
    }
}
</script>

<style scoped>

</style>
