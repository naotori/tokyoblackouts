Ext.ns('BO');

BO.Info = Ext.extend(Ext.Panel, {
	tpl: '<div class="boinfo"><span>住所：{address}</span><br><span>グループ：{group}</span><br><span>時間帯：</span><br><p>{detail}</p></div>',

	initComponent: function(){
		this.dockedItems = [{
			dock: 'top',
			xtype: 'toolbar',
			title: '詳細',
			items: [{
				xtype: 'button',
				ui: 'back',
				text: '地図',
				handler: this.onBack,
				scope: this
			}]
		}];

		this.addEvents('back');
		BO.Info.superclass.initComponent.call(this);

	},

	onBack: function(){
		this.fireEvent('back', this);
	}
});

Ext.reg('boinfo',BO.Info);
