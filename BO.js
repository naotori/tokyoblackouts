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

	details: [
		"06:20-10:00および16:50-20:30",	
		"09:20-13:00および18:20-22:00",	
		"12:20-16:00",	
		"13:50-17:30",	
		"15:20-19:00"
	],

	initComponent: function(){
		this.items = [{
			xtype: 'bomap',
			title: '地図',
			iconCls: 'maps'
		},{
			xtype: 'boinfo',
			title: '詳細',
			iconCls: 'info'
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
			detail: this.details[g-1] 
		});
	},

	onInfoWindowTap: function(){
		this.setActiveItem(1);
	}
});
