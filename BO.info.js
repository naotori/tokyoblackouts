Ext.ns('BO');

BO.Info = Ext.extend(Ext.Panel, {
  tpl: ['<div class="boinfo">',
          '<span class="add">住所：{address}</span><br>',
          '<span id="timezone">時間帯：</span>',
          '<ul>',
          '<tpl for="detail">',
            '<li class="h2s">グループ：{group}{subgroup}</li>',
            '<ul class="rabox">',
            '<tpl for="slots">',
              '<li>{day:date("m/d")}:{slot}</li>',
            '</tpl>',
            '</ul>',
          '</tpl>',
          '</ul>',
          '<a target="_blank" href="http://www.tepco.co.jp/cc/press/index11-j.html">詳細は東京電力のサイトをご確認ください</a>',  
        '</div>'].join(''),

  scroll: 'vertical',

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
      },{
        xtype: 'spacer'
      },{
        xtype: 'button',
        ui: 'confirm',
        text: '保存',
        handler: this.onSave,
        scope: this
      }]
    }];

    this.addEvents('back','save');
    BO.Info.superclass.initComponent.call(this);

  },

  onBack: function(){
    this.fireEvent('back', this);
  },

  onSave: function(){
    this.fireEvent('save', this);
  }
});

Ext.reg('boinfo',BO.Info);
