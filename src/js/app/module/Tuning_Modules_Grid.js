/*
 *  | RUS | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 
 *    «Komunikator» – Web-интерфейс для настройки и управления программной IP-АТС «YATE»
 *    Copyright (C) 2012-2017, ООО «Телефонные системы»
 
 *    ЭТОТ ФАЙЛ является частью проекта «Komunikator»
 
 *    Сайт проекта «Komunikator»: http://komunikator.ru/
 *    Служба технической поддержки проекта «Komunikator»: E-mail: support@komunikator.ru
 
 *    В проекте «Komunikator» используются:
 *      исходные коды проекта «YATE», http://yate.null.ro/pmwiki/
 *      исходные коды проекта «FREESENTRAL», http://www.freesentral.com/
 *      библиотеки проекта «Sencha Ext JS», http://www.sencha.com/products/extjs
 
 *    Web-приложение «Komunikator» является свободным и открытым программным обеспечением. Тем самым
 *  давая пользователю право на распространение и (или) модификацию данного Web-приложения (а также
 *  и иные права) согласно условиям GNU General Public License, опубликованной
 *  Free Software Foundation, версии 3.
 
 *    В случае отсутствия файла «License» (идущего вместе с исходными кодами программного обеспечения)
 *  описывающего условия GNU General Public License версии 3, можно посетить официальный сайт
 *  http://www.gnu.org/licenses/ , где опубликованы условия GNU General Public License
 *  различных версий (в том числе и версии 3).
 
 *  | ENG | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 
 *    "Komunikator" is a web interface for IP-PBX "YATE" configuration and management
 *    Copyright (C) 2012-2017, "Telephonnyie sistemy" Ltd.
 
 *    THIS FILE is an integral part of the project "Komunikator"
 
 *    "Komunikator" project site: http://komunikator.ru/
 *    "Komunikator" technical support e-mail: support@komunikator.ru
 
 *    The project "Komunikator" are used:
 *      the source code of "YATE" project, http://yate.null.ro/pmwiki/
 *      the source code of "FREESENTRAL" project, http://www.freesentral.com/
 *      "Sencha Ext JS" project libraries, http://www.sencha.com/products/extjs
 
 *    "Komunikator" web application is a free/libre and open-source software. Therefore it grants user rights
 *  for distribution and (or) modification (including other rights) of this programming solution according
 *  to GNU General Public License terms and conditions published by Free Software Foundation in version 3.
 
 *    In case the file "License" that describes GNU General Public License terms and conditions,
 *  version 3, is missing (initially goes with software source code), you can visit the official site
 *  http://www.gnu.org/licenses/ and find terms specified in appropriate GNU General Public License
 *  version (version 3 as well).
 
 *  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 */

Ext.define('app.module.Tuning_Modules_Grid', {
    extend: 'app.Grid',
    no_adddelbuttons: true,
    store_cfg: {
        autorefresh: false,
        fields: ['id', 'module_name', 'description', 'version', 'condition'],
        storeId: 'modules'
    },
    columns: [
        {// 'id'
            hidden: true
        },
        {// 'module_name'
            width: 150,                 
            sortable: false
        },
        {// 'description'
            width: 500,
            sortable: false            
        },
        {// 'version'
            width: 70
        },
        {//'condition'
            renderer: app.checked_render,
            editor: {
                xtype: 'checkbox',
                style: {
                    textAlign: 'center'
                },
                queryMode: 'local'
            }
        }
    ],
    columns_renderer:
            function(value, metaData, record, rowIndex, colIndex, store) {
                if (colIndex == 1 || colIndex == 2)
                {
                    return app.msg[value];
                }
                return value;
            },
    initComponent: function() {
        this.callParent(arguments);
        this.store.on('load',
                function(store, records, success) {
                    store.each(function(record)
                    {
                        Ext.getCmp('main_tabpanel').remove('modules', true);
                        var items = [];
                        store.each(function(record)
                        {
                            var module_name = null;
                            var condition = null;
                            record.fields.each(function(field)
                            {
                                var fieldValue = record.get(field.name);
                                if (field.name == 'module_name')
                                    module_name = fieldValue;
                                if (field.name == 'condition')
                                    condition = fieldValue;
                            });
                            //console.log(module_name + ':' + condition);
                            if (condition == '1')
                                items.push(Ext.create('app.module.' + module_name, {title: app.msg[module_name]}));
                        });
                        if (items.length !== 0)
                            Ext.getCmp('main_tabpanel').add(Ext.create('app.Card_Panel', {
                                id: 'modules',
                                title: app.msg.modules,
                                items: items
                            }));
                    });
                }, this);
    }
});