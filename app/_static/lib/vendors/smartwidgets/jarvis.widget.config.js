/*
 * Turn on JarvisWidget functionality
 * Global JarvisWidget Settings
 * For a greater control of the widgets, please check app.js file
 * found within COMMON_ASSETS/UNMINIFIED_JS folder and see from line 1355
 * dependency: js/jarviswidget/jarvis.widget.min.js
 */
enableJarvisWidgets = true,
/*
 * Use localstorage to save widget settings
 * turn this off if you prefer to use the onSave hook to save
 * these settings to your datatabse instead
 */
localStorageJarvisWidgets = true,
/*
 * Turn off sortable feature for JarvisWidgets 
 */
sortableJarvisWidgets = true,
/*
 * Warning: Enabling mobile widgets could potentially crash your webApp 
 * if you have too many widgets running at once 
 * (must have enableJarvisWidgets = true)
 */
enableMobileWidgets = false,

$.fn.jarvisWidgets && enableJarvisWidgets && $("#widget-grid").jarvisWidgets({
    "grid": "article",
    "widgets": ".jarviswidget",
    "localStorage": localStorageJarvisWidgets,
    "deleteSettingsKey": "#deletesettingskey-options",
    "settingsKeyLabel": "Reset settings?",
    "deletePositionKey": "#deletepositionkey-options",
    "positionKeyLabel": "Reset position?",
    "sortable": sortableJarvisWidgets,
    "buttonsHidden": !1,//0:工具栏自动隐藏，鼠标经过显示;1:工具栏始终显示
    "toggleButton": !0,
    "toggleClass": "fa fa-minus | fa fa-plus",
    "toggleSpeed": 200,
    "onToggle": function() {},
    "deleteButton": !0,
    "deleteMsg": "Warning: This action cannot be undone!",
    "deleteClass": "fa fa-times",
    "deleteSpeed": 200,
    "onDelete": function() {},
    "editButton": !0,
    "editPlaceholder": ".jarviswidget-editbox",
    "editClass": "fa fa-cog | fa fa-save",
    "editSpeed": 200,
    "onEdit": function() {},
    "colorButton": !0,
    "fullscreenButton": !0,
    "fullscreenClass": "fa fa-expand | fa fa-compress",
    "fullscreenDiff": 3,
    "onFullscreen": function() {},
    "customButton": !0,//0:启用;1：禁用
    "customClass": "fa fa-plus",
    "customStart": function() {
        alert("Hello you, this is a custom button...")
    },
    "customEnd": function() {
        alert("Hello you, this is a custom button...")
    },
    "buttonOrder": "%refresh% %custom% %edit% %toggle% %fullscreen% %delete%",//工具栏按钮顺序
    "opacity": 1,
    "dragHandle": "> header",
    "placeholderClass": "jarviswidget-placeholder",
    "indicator": !0,
    "indicatorTime": 600,
    "ajax": !0,
    "timestampPlaceholder": ".jarviswidget-timestamp",
    "timestampFormat": "Last update: %m%/%d%/%y% %h%:%i%:%s%",
    "refreshButton": !0,
    "refreshButtonClass": "fa fa-refresh",
    "labelError": "Sorry but there was a error:",
    "labelUpdated": "Last Update:",
    "labelRefresh": "Refresh",
    "labelDelete": "Delete widget:",
    "afterLoad": function() {},
    "rtl": !1,
    "onChange": function() {},
    "onSave": function() {},
    "ajaxnav": $.navAsAjax
});