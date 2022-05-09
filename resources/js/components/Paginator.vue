<template>
<!--    <ul class="uk-pagination uk-flex-center" v-if="isPagination">
        <li v-for="(link, index) in links" :class="{ 'uk-active': link.active, 'uk-disabled': ! link.url }" v-if="(index === links.length - 1) || (index === 0) || ! isSimple">
            <span v-if="( ! link.url || link.active)">
                <span uk-pagination-previous v-if="index === 0"></span>
                <span uk-pagination-next v-else-if="index === links.length - 1"></span>
                <span v-else v-text="link.label"></span>
            </span>
            <a v-else href="#" @click.prevent="changePage(link.url)" :aria-label="index === 0 ? 'Prev' : (index === links.length - 1 ? 'Next' : link.label)">
                <span uk-pagination-previous v-if="index === 0"></span>
                <span uk-pagination-next v-else-if="index === links.length - 1"></span>
                <span v-else v-text="link.label"></span>
            </a>
        </li>
    </ul>-->
    <div class="card-footer d-flex align-items-center">
        <p class="m-0 text-muted">Prikazano <span v-text="dataSet.from"></span> do <span v-text="dataSet.to"></span> od <span v-text="dataSet.total"></span> stavki</p>
        <ul class="pagination m-0 ms-auto" v-if="isPagination">
            <li v-for="(link, index) in links"class="page-item" :class="{ 'active': link.active, 'disabled': ! link.url }" v-if="(index === links.length - 1) || (index === 0) || ! isSimple">
                <a href="#" @click.prevent="changePage(link.url)" tabindex="-1" :aria-disabled="link.url ? 'false' : 'true' " class="page-link">
                    <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="15 6 9 12 15 18"></polyline>
                    </svg>
                    <svg v-else-if="index === links.length - 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                    <span v-else v-text="link.label"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['dataSet', 'form', 'is_simple'],
    computed: {
        links(){
            return this.dataSet.links;
        },
        isPagination() {
            return this.dataSet.per_page < this.dataSet.total;
        },
        isSimple() {
            return this.is_simple;
        }
    },
    methods: {

        changePage(url) {

            url = new URL(url);
            this.form.page = (new URLSearchParams(url.search)).get('page');
            this.$emit('page_changed');
        }
    }
}
</script>
