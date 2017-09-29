var NotificationPanel = function($parent, position, timeout, maxCount) {
    var me = this;
    var $element;
    var $ul;
                  
    var EFFECT_DURATION = 500;
    var EFFECT_TYPE = "fade";
                  
    var timeoutId = null;
  
    var notifications = [];
    var types = {
        "info": {
            name: "info",
            //icon: "com/sadig/components/notificationPanel/info.png",
            class: "fa fa-info fa-fw fa-3x"
        },
        "warning": {
            name: "warning",
            //icon: "com/sadig/components/notificationPanel/warning.png",
            class: "fa fa-warning fa-fw fa-3x"
        },
        "error": {
            name: "error",
            //icon: "com/sadig/components/notificationPanel/error.png",
            class: "fa fa-bug fa-fw fa-3x"
        },
        "save": {
            name: "save",
            //icon: "com/sadig/components/notificationPanel/save.png",
            class: "fa fa-save fa-fw fa-3x"
        },
        "save_error": {
            name: "save_error",
            //icon: "com/sadig/components/notificationPanel/save_error.png",
            class: "fa fa-tag fa-fw fa-3x"
        }
    };
                  
    /**
     * Permite cadastrar tipos de mensagens
     */
    this.registerType = function(type) {
        types[type.name] = type;
    };
                  
    /**
     * Adiciona uma mensagem no painel.
    */
    this.notify = function(message, type) {
        if (type === undefined) {
            type = "info";
        }
        
        var $last = $ul.children("li:last");
        $last.show(EFFECT_TYPE, {}, EFFECT_DURATION);
        
        //clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            $element.hide(EFFECT_TYPE, {}, EFFECT_DURATION, function() {
                notifications = [];
                $ul.children().remove();
            });
        }, timeout);
          
        
        var notification = types[type];
        notification.message = message;
        notifications.push(notification);
        
        if ($element.css("display") === "none") {
            $element.show(EFFECT_TYPE, {}, EFFECT_DURATION);
        }
                            
        $ul.append("<li><i class='" + notification.class + "'></i><span>" + notification.message + "</span></li>");
        $last = $ul.children("li:last");
        
        $last.show(EFFECT_TYPE, {}, EFFECT_DURATION);

        function removeLast(lastItem) {
            return function() {
                notifications.shift();
                lastItem.hide(EFFECT_TYPE, {}, EFFECT_DURATION, function() {
                    lastItem.remove();
                });
            };
        }
                                 
        setTimeout(removeLast($last), timeout);
    };
                  
    /**
     * Fecha e destrói o painel.
    */
    this.destroy = function() {
        me.close(false);
        
        $element.remove();
        $element = null;
    };
                  
    // Cria a parte visual do componente
    var element = document.createElement("div");
    element.id = $parent[0].id + "-notification";
    
    $element = $(element);
    $element.addClass("notification");
    $element.addClass("ui-corner-bottom");
    $element.css('display', 'none');
    
    
    $element.css("left", position.left);
    $element.css("right", position.right);
    $element.css("top", position.top);
    $element.css("bottom", position.bottom);
    $element.width("auto").height("auto");
    
    $ul = $(document.createElement("ul"));
    
    $ul.addClass("list");
    
    $element.append($ul);
    $parent.append($element);
  };
  
NotificationPanel.newInstance = function($parent, position, timeout, maxCount) {
    if (!position) {
        position = {};
    }

    position.left = (position.left === undefined ? "auto" : position.left + "px");
    position.right = (position.right !== undefined ? position.right + "px" : "auto");
    position.top = (position.top !== undefined ? position.top + "px" : "auto");
    position.bottom = (position.bottom === undefined ? "auto" : position.bottom + "px");
                  
    if (!timeout) {
        timeout = 3000;
    }
    
    if (!maxCount) {
        maxCount = 3;
    }
                  
    return new NotificationPanel($parent, position, timeout, maxCount);
  };
  