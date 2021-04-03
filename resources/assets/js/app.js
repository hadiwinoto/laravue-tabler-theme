
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');


require('./bootstrap');
require('hideshowpassword');
import Vue from "vue";
import VueElementLoading from "vue-element-loading";
import VueResource from 'vue-resource';

Vue.use(VueResource)
Vue.component("VueElementLoading", VueElementLoading);
// var Dropzone = require('dropzone');
var password = require('password-strength-meter');

// import AWN from "awesome-notifications"
// const option_alert = {
//     position: 'bottom-right',
//     labels: {
//         success: 'Ok',
//         alert: 'Oops...'
//     },
//     duration: 700
// };
// Vue.use(AWN, option_alert);





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('users-count', require('./components/UsersCount.vue').default);
Vue.component('users-home', require('./components/pages/user/home.vue').default);
Vue.component('tiket-index', require('./components/tiket/Tiket.vue').default);


const app = new Vue({
    el: '#app'
});

$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    },

    /**
     * Remove element classes with wildcard matching. Optionally add classes:
     *   $( '#foo' ).alterClass( 'foo-* bar-*', 'foobar' )
     *
     */
    alterClass: function(removals, additions) {
        var self = this;

        if(removals.indexOf('*') === -1) {
            // Use native jQuery methods if there is no wildcard matching
            self.removeClass(removals);
            return !additions ? self : self.addClass(additions);
        }

        var patt = new RegExp( '\\s' +
                removals.
                    replace( /\*/g, '[A-Za-z0-9-_]+' ).
                    split( ' ' ).
                    join( '\\s|\\s' ) +
                '\\s', 'g' );

        self.each(function(i, it) {
            var cn = ' ' + it.className + ' ';
            while(patt.test(cn)) {
                cn = cn.replace( patt, ' ' );
            }
            it.className = $.trim(cn);
        });

        return !additions ? self : self.addClass(additions);
    }
});
