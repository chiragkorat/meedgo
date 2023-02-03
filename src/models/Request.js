import axios from 'axios';

export default class Requests {
    signUpRequest(data) {
        return axios({
            method: 'POST',
            url: `http://3.108.227.121:8000/user/register/`,
            data
        })
    }
    sendOTP(phone) {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/user/time_based/${phone}`,
        })
    }
    verifyOTP(phone, otp) {
        return axios({
            method: 'POST',
            url: `http://3.108.227.121:8000/user/time_based/verify/${phone}/${otp}`,
        })
    }
    pharmacistList() {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/pharmacist/pharmacist_list/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
            // headers: { Authorization: `TOKEN f22ee619a4b1c904ff1720b5c70d978ca95cf023` }
        })
    }
    pharmacistApprove(data) {
        return axios({
            method: 'PUT',
            url: `http://3.108.227.121:8000/pharmacist/pharmacist_list/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            data
        })
    }
    customerList() {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/user/user_Issue_admin/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }
    chartWeekOrder() {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/adminApp/week_order_data/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }
    chartMonthlySale() {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/adminApp/monthly_sale_value/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }
    chartMonthlyCommission() {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/adminApp/monthly_commission/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }
    makeOrder() {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/user/make_order/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` }
        })
    }
    changeStatus(data) {
        return axios({
            method: 'PUT',
            url: `http://3.108.227.121:8000/user/user_Issue_admin/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            data
        })
    }

    getDashboardTrack(data) {
        return axios({
            method: 'GET',
            url: `http://3.108.227.121:8000/adminApp/transaction_count/`,
            headers: { Authorization: `TOKEN ${localStorage.getItem('Token')}` },
            data
        })
    }

}