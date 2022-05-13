import * as API from "./API";

export default {
    async getPanelData(){
        await API.apiClient.get("sanctum/csrf-cookie");
        return API.apiClient.get(`/panel`);
    },
    async getStationData(station, days = 7) {
        await API.apiClient.get("sanctum/csrf-cookie");
        return API.apiClient.get(`/chart/station/${station}`, {params: {days: days}});
    },
    async getStationTableData(payload) {
        await API.apiClient.get("sanctum/csrf-cookie");
        return API.apiClient.get(`/table/station`, { params: payload });
    },
    exportExcel(station) {
        return `/admin/export/${station}`;
    }
}
