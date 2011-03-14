Ext.ns('BO');

BO.Source = Ext.extend(Ext.Panel, {
  itemTpl: '<div class="bodetail"><span class="pref">{pref}</span><br><span class="url">{url}</span><br><span class="update">最終更新日：{update:date("Y/m/d")}</span></div>',

  initComponent: function(){
    this.dockedItems = [{
      dock: 'top',
      xtype: 'toolbar',
      title: '情報源'
    }];

		this.items = [{
			xtype: 'list',
			itemTpl: this.itemTpl,
			store: this.store
		}];

    BO.Source.superclass.initComponent.call(this);

		this.list = this.down('list');
		this.list.on({
			itemtap: this.onItemTap,
			scope: this
		});
  },

	onItemTap: function(t,idx,itm,e){
		var store = this.store, rec = store.getAt(idx);
		window.location = rec.get('url');
	}
});

Ext.reg('bosource',BO.Source);
