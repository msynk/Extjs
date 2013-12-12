$.class(appname + '.utils.connection.Ajax', {
  
  constructor: function () {
    
  },
  
  initialize: function () {
    var waitText = App.strings.global.wait;
    $.Ajax.on('beforerequest', function () { $.getBody().mask(waitText, 'loading'); }, $.getBody());
    $.Ajax.on('requestcomplete', $.getBody().unmask, $.getBody());
    $.Ajax.on('requestexception', $.getBody().unmask, $.getBody());

    $.Ajax.timeout = App.constants.GLOBAL_TIMEOUT;

  },

  request: function (options, messages, showSuccessMsg) {
    if (!options.url) return;
    var msgConfig = this.getMsgBoxConfig(messages);
    var requestConfig = this.getRequestConfig(options);

    $.Ajax.request({
      url: requestConfig.url,
      params: requestConfig.params,
      method: requestConfig.method,
      callback: requestConfig.callback,
      success: function (response, opts) {
        if (requestConfig.success) {
          if (!requestConfig.success(response, opts))
            return;
        }
        if (showSuccessMsg) {
          $.MessageBox.show(msgConfig.success);
        }
      },
      failure: function (response, opts) {
        if (requestConfig.failure) {
          if (!requestConfig.failure(response, opts))
            return;
        }
        $.MessageBox.show(msgConfig.failure);
      },
      scope: requestConfig.scope,
      timeout: requestConfig.timeout,
    });
  },

  call: function (url, params, callback, options) {
    var config = {};
    $.apply(config, options);
    config.url = url;
    config.params = params;
    config.success = function (response, opts) {
      if (callback) {
        config.callbackArguments = config.callbackArguments || [];
        config.callbackArguments.push($.decode(response.responseText));
        callback.call(config.scope, config.callbackArguments);
      }
      return false;
    };
    this.request(config);
  },


  getRequestConfig: function (options) {
    var config = {
      scope: undefined,
      timeout: undefined,
      form: undefined,
      isUpload: undefined,
      headers: undefined,
      xmlData: undefined,
      jsonData: undefined,
      binaryData: undefined,
      disableCaching: undefined,
      withCredentials: undefined,
      binary: undefined
    };
    $.apply(config, options);
    return config;
  },
  getMsgBoxConfig: function (messages) {
    var config = {};

    config.success = {};
    config.success.title = App.strings.global.successTitle;
    config.success.msg = App.strings.global.successMsg;
    config.success.buttons = $.MessageBox.OK;
    config.success.icon = $.MessageBox.INFO;

    config.failure = {};
    config.failure.title = App.strings.global.failureTitle;
    config.failure.msg = App.strings.global.failureMsg;
    config.failure.buttons = $.MessageBox.OK;
    config.failure.icon = $.MessageBox.ERROR;

    $.apply(config, messages);
    return config;
  }
});