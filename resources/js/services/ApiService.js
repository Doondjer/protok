import * as API from "./API";
import * as BASE from './BASE';

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
    async exportExcel(payload) {
        await API.apiClient.get("sanctum/csrf-cookie");
        return API.apiClient.post(`/export`, payload, {responseType: 'arraybuffer'});
    },
    async submitAttribute(slug, payload) {
        await API.apiClient.get("/sanctum/csrf-cookie");
        return API.apiClient.post(`/rodent-type/${slug}/attribute`, payload);
    },
    async deleteAttribute(slug, id) {
        await API.apiClient.get("/sanctum/csrf-cookie");
        return API.apiClient.delete(`/rodent-type/${slug}/attribute/${id}`);
    },
    async webSocketEvent(url, payload) {
        await API.apiClient.get("/sanctum/csrf-cookie");
        return BASE.apiClient.post(url,  payload);
    },
    webSocketUrl(url) {
        return BASE.apiClient.get(url);
    },
}
