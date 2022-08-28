import fetchIntercept from 'fetch-intercept';
import router from '@/router'

const unregister = fetchIntercept.register({
    request: function (url, config) {
        const token = localStorage.getItem('Token');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
        return [`${url}`, { headers, ...config }];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        if (response.status === 401) {
            alert('You are session has expired. redirecting to the login page.')
            router.push({ path: `/login` })
        }
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});

export default unregister;