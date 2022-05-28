<template>
    <div class="container-xl">
        <div class="row row-cards justify-content-center">
            <div class="col-12">
                <div class="row row-cards">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Trenutno na sajtu</h3>
                            </div>
                            <div class="list-group list-group-flush list-group-hoverable">
                                <div class="list-group-item" v-for="user in users">
                                    <div class="row align-items-center">
                                        <div class="col-auto"><span class="badge"></span></div>
                                        <div class="col-auto">
                                            <a href="#">
                                                <span class="avatar">
                                                    {{
                                                        user.name.split(' ').map((value) => {
                                                            return value.charAt(0).toUpperCase()
                                                        }).join('')
                                                    }}
                                                </span>
                                            </a>
                                        </div>
                                        <div class="col text-truncate">
                                            <a href="#" class="text-reset d-block" v-text="user.name"></a>
                                            <div class="d-block text-muted text-truncate mt-n1" v-text="user.agent"></div>
                                            <div class="d-block text-muted text-truncate mt-n1" v-text="`${user.email} | Od: ${user.since}`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row row-cards">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Aktivnost</h3>
                            </div>
                            <div class="list-group list-group-flush list-group-hoverable">
                                <div class="list-group-item" v-for="user in activities">
                                    <div class="row align-items-center">
                                        <div class="col-auto"><span class="badge"></span></div>
                                        <div class="col-auto">
                                            <a href="#">
                                                <span class="avatar">
                                                    {{
                                                        user.name.split(' ').map((value) => {
                                                            return value.charAt(0).toUpperCase()
                                                        }).join('')
                                                    }}
                                                </span>
                                            </a>
                                        </div>
                                        <div class="col text-truncate">
                                            <a href="#" class="text-reset d-block" v-text="user.name"></a>
                                            <div class="d-block text-muted text-truncate mt-n1" v-text="user.agent"></div>
                                            <div class="d-block text-muted text-truncate mt-n1" v-text="`${user.email} | Od: ${user.since} | ${user.activity}: ${new Date().toBackendFormat()}`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'OnlineList',
    props: ['me'],
    data () {
        return {
            users: [],
            activities: [],
        }
    },
    mounted () {

        Date.prototype.toBackendFormat = function() {

            let monthNames =["Jan","Feb","Mar","Apr",
                "May","Jun","Jul","Aug",
                "Sep", "Oct","Nov","Dec"];

            let day = this.getDate();

            let monthIndex = this.getMonth();
            let monthName = monthNames[monthIndex];

            return `${day} ${monthName}, ${this.getHours()}:${this.getMinutes()}`;
        }

        Echo.join('online')
            .here(users => {
                this.users = users
            })
            .joining(user => {
                this.users.push(user);
                user.activity = 'Dolazak';
                this.activities.push(user);
            })
            .leaving(user => {

                this.users.splice(this.users.indexOf(user), 1);
                user.activity = 'Odlazak';
                this.activities.push(user);
            })
    }
}
</script>
