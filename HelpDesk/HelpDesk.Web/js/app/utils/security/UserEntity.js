$.class(appname + '.utils.security.UserEntity', {
    username: '',
    password: '',
    state: false,
    permissions: [],
    
    constructor: function (config) {
        $.apply(this, config || {});

        //console.log("I'm a new User: " + this.username);
        //console.log("with permissions: " + this.permissions);
    },

    hasPermission: function (permission) {
        return this.permissions.indexOf(permission) != -1;
    }
});