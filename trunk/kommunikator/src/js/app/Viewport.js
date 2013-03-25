Ext.define('app.Viewport', {
    extend : 'Ext.container.Viewport',
    style:'padding:2px 10px;',
    layout: 'border',
    items: [{
        region: 'north',
        //autoHeight: true,
        border: false,
        margins: '0 0 5 0'
    }, {
        region: 'south',
        title:'<div style="text-align:center;"><p style="font-size:8pt;">'+app.msg.copyright+'</p></div>',
        border: false,
        margins: '10 10 10 0'
    }, {
        region: 'west',
        collapsible: true,
        title: app.msg.pbx_status,
        //autoHeight: true,
        //height: 100,
        width: 270,
        //collapsed:true,
        listeners: {
            afterrender: function(){
                this.fireEvent('expand',this);
            },
            expand: function(i){ 
                i.items.each(function(s){
                    if (s && s.store) {
                        app.set_autorefresh(s,true);
                    //console.log('owner expand for: '+s.store.storeId);
                    }
                })
            },
            collapse:function(i){ 
                i.items.each(function(s){
                    if (s && s.store) {
                        app.set_autorefresh(s,false);
                    //console.log('owner collapse for: '+s.store.storeId);
                    }		
                })
            }
        },
        //split: true,
        items: [
        Ext.create('app.module.Status_Grid',{
            title:app.msg.statistic
        })
        ]
	
    },{
        region: 'center',
        //resizable: true,
        //split: true,
        //layout: 'anchor',
        layout: 'fit',
        //autoHeight: true,
        xtype: 'tabpanel',
        //layout:'accordion',
        id: 'main_tabpanel',
        bodyStyle:'padding:15px;',
        //style:'padding:2px;',
        //        defaults:{
        //            layout: 'fit'
        //        },	
        //activeTab: 0, 
        listeners: {
            afterrender: function(){
                var f = this.setActiveTab(0);
                if (f && f.items) ;
                //grid.ownerCt.layout.setActiveItem(grid.ownerCt.items.indexOf(grid));
                //console.log(
                f.items.items[0].fireEvent('activate',f.items.items[0]);//f.setActiveItem(0);
            },
            tabchange : function(c,f,o){
                if (f && f.items){ 
                    f.getLayout().setActiveItem(0) //;
                    f.items.items[0].fireEvent('activate',f.items.items[0]);//f.setActiveItem(0);
                }
            }
	

        },
        items: [
        /*        Ext.create('app.module.Attendant_Panel'), */
        //Ext.create('app.module.Extensions_Panel'),   
        Ext.create('app.Card_Panel',{
            title: app.msg.directory,
            items: [
            Ext.create('app.module.Extensions_Grid',{
                title:app.msg.extensions
            }),
            Ext.create('app.module.Groups_Grid',{
                title:app.msg.groups
            }),
            Ext.create('app.module.AddressBook_Grid',{
                title:app.msg.address_book
            })
            ]

        }),
        Ext.create('app.Card_Panel',{
            title: app.msg.attendant,
            items: [
            Ext.create('app.module.Prompts_Panel',{
                //title:'<center>'+app.msg.prompts+'</center>'
                title:app.msg.prompts
            }),
            Ext.create('app.module.Keys_Grid',{
                title:app.msg.keys
            }),
            Ext.create('app.module.Time_Frames_Grid',{
                title:app.msg.timeframes
            })
            ]
        }), 
        Ext.create('app.Card_Panel',{
            title: app.msg.routing,
            items: [
            Ext.create('app.module.DID_Grid',{
                title:app.msg.routing_rules
            }),
            Ext.create('app.module.Dial_plans_Grid',{
                title:app.msg.dial_plans
            }),
            Ext.create('app.module.Conferences_Grid',{
                title:app.msg.conferences
            }),
            Ext.create('app.module.Gateways_Grid',{
                title:app.msg.gateways
            })
            ]
        }),
        Ext.create('app.Card_Panel',{
            title: app.msg.music_on_hold,
            items: [         
            Ext.create('app.module.Music_On_Hold_Grid',{
                title:app.msg.music_on_hold
            }),
            Ext.create('app.module.Playlist_Grid',{
                title:app.msg.playlist
            }) 
            ]

        }),
        Ext.create('app.Card_Panel',{
            title:app.msg.call_logs,
            items: [
            Ext.create('app.module.Active_calls_Grid',{
                title:app.msg.active_calls
            }),
            Ext.create('app.module.Call_logs_Grid',{
                title:app.msg.call_logs
            })
            ]
        }),     
        Ext.create('app.Card_Panel',{
            title:app.msg.settings,
            items: [ 
            Ext.create('app.module.Users_Grid',{
                title:app.msg.users
            }), 
            Ext.create('app.module.Network_Settings_Panel',{
                title:app.msg.network_settings
            }), 
            Ext.create('app.module.Mail_Settings_Panel',{
                title:app.msg.mail_settings
            }),
            /*
            Ext.create('app.module.Ntn_Settings_Grid',{
                title:app.msg.notification_settings
            }),  
            Ext.create('app.module.Update_Panel',{
                title:app.msg.update
            }),  */
            {
                title:app.msg.reboot_pbx, 
                handler: function(){
                    var fn = function(btn){
                        if (btn == 'yes') {
                            var box = Ext.MessageBox.wait(app.msg.wait_reboot,app.msg.performing_actions);
                            app.request(
                            {
                                action:'reboot'
                            },
                            function(result){
                                if (!result.message)
                                    box.hide();
                            //console.log(result)
                            });
                        }
                    };        
                    Ext.MessageBox.show({
                        title:app.msg.performing_actions,
                        msg:  app.msg.reboot_pbx_question,
                        buttons: Ext.MessageBox.YESNOCANCEL,
                        fn: fn,
                        animEl: 'mb4',
                        icon: Ext.MessageBox.QUESTION
                    });

                }
            },
            {
                title:app.msg.update, 
                handler: function(){
                    var fn = function(btn){
                        if (btn == 'yes') {
                            var box = Ext.MessageBox.wait(app.msg.wait_checkforupdates,app.msg.performing_actions);
                            app.request(
                            {
                                action:'checkforupdates'
                            },
                            function(result){
                                if (!result.message)
                                    box.hide();
                                if (result.update_exists) {
                                    var fn_update = function(btn){
                                        if (btn == 'yes') {
                                            var box = Ext.MessageBox.wait(app.msg.wait_update,app.msg.performing_actions);
                                            var polling_time = 5000;
                                            //Ext.MessageBox.maxHeight = 400;	
                                            var intervalID = setInterval(function() {
                                                app.request(
                                                {
                                                    action:'get_update_out'
                                                },
                                                function(result){
                                                    if (result.data)
                                                        box.updateText(app.msg.wait_update+'<br>'+result.data);
                                                }
                                                );

                                            }, polling_time);
                                            app.request(
                                            {
                                                action:'install_update'
                                            },
                                            function(result){
                                                clearInterval(intervalID);
                                                if (!result.message)
                                                    box.hide();
                                            }
                                            );
                                        }
                                    }
                                    Ext.MessageBox.show({
                                        title:app.msg.performing_actions,
                                        msg:  app.msg.update_install +' '+result.update_exists+'?',
                                        buttons: Ext.MessageBox.YESNOCANCEL,
                                        fn: fn_update,
                                        animEl: 'mb4',
                                        icon: Ext.MessageBox.QUESTION
                                    });
                                   
                                }
                            });
                        }
                    };        
                    Ext.MessageBox.show({
                        title:app.msg.performing_actions,
                        msg:  app.msg.checkforupdates,
                        buttons: Ext.MessageBox.YESNOCANCEL,
                        fn: fn,
                        animEl: 'mb4',
                        icon: Ext.MessageBox.QUESTION
                    });

                }
            }
            ]
        })   
        //{ 
        //    title: app.msg.attendant,layout: 'anchor', 
        //    items: [{height:100,border: false,html:'test message'},Ext.create('app.module.Prompts_Grid'/*,{height:300})]
        //}
	
        ]  
    }],  
    initComponent : function () {
        this.items[0].title =
        //'<div class="x-box-inner" style="padding-left: 20px;padding-right: 20px;height:60px;background-color:#D5EAF3;">'+
        '<div class="x-box-inner" style="padding-left: 20px;padding-right: 20px;height:60px;">'+
        '<img class="logo" src="js/app/images/logo_ts.png" height="60px" alt="TS" border="0" align="left">'+
        '<p align="right"><a href="#" onclick="app.logout();return false">'+ app.msg.logout +'</a></p>'+
        '<p align="right">'+app.msg.user+': '+ this.user_name +'</p>'+
        //        '<p align="right"><a target="_blank" href="http://ats.digt.local/bugtracker/">BUG TRACKER</a></p>'+
        '<p align="right"><a target="_blank" href="http://ats.digt.local/bugtracker/">BUG TRACKER</a></p>'+
        '</div>';

 
        this.callParent(arguments);
        Ext.TaskManager.start({
            run: function (){
                Ext.StoreMgr.each(function(item,index,length){
        
                    if (item.storeId == 'statistic'){
                        if (item.autorefresh) item.load();	
                    //console.log(item.storeId+":item.autorefresh-:"+item.autorefresh);
                    } ;
                    if (Ext.getCmp(item.storeId+'_grid'))	    
                        if (app.active_store == item.storeId && item.autorefresh && !this.dirtyMark) item.load();
                })
            }
            ,
            interval:app.refreshTime
        });
    }    
});