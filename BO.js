Ext.ns('BO');

BO.App = Ext.extend(Ext.TabPanel,{
  fullscreen: true,
  tabBar: {
    dock: 'bottom',
    ui: 'light',
    layout: {
      pack: 'center'
    }
  },

  initComponent: function(){
		Ext.regModel('InfoSource',{
			fields: [
				{name: 'pref'},
				{name: 'url'},
				{name: 'update', type: 'date'}
			]
		});

		var store = new Ext.data.ArrayStore({
			model: 'InfoSource',
			data: BO.Data.dataSource 
		});

    this.items = [{
      xtype: 'bomap',
      title: '地図',
      iconCls: 'maps'
    },{
      xtype: 'boinfo',
      title: '詳細',
      iconCls: 'info'
    },{
      xtype: 'bosource',
      title: '情報源',
      iconCls: 'more',
			store: store 
		}];

    BO.App.superclass.initComponent.call(this);

    this.info = this.down('boinfo');
    this.map = this.down('bomap');

    this.map.on({
      groupfound: this.onGroupFound,
      infowindowtap: this.onInfoWindowTap,
      scope: this
    });

    this.info.on({
      back: function(){
        this.setActiveItem(0, {
          type: 'slide',
          direction: 'right'
        });  
      },
      scope: this
    });
  },

  onGroupFound: function(g,a){
    this.info.update({
      group: g,
      address: a,
      detail: BO.Data.getSlot(g-1)
    });
  },

  onInfoWindowTap: function(){
    this.setActiveItem(1);
  }
});
