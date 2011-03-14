Ext.setup({
  fullscreen: true,
	icon: 'icon.png',
  onReady: function(){
    new BO.App();
    Ext.Msg.alert("使い方","ピンをドラッグドロップ（指で押さえて移動）することでその場所の住所と停電グループが分かります（最終更新3/14 22:02");
  }
});
