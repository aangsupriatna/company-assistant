import Vue from 'vue';

Vue.filter('truncate1', (str, val) => {
    return (str || '').substring(0, val) + '…';
});

Vue.filter('truncate2', (str, val) => {
    return str.split(' ').slice(0, val).join(" ");
});
