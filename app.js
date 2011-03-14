Ext.setup({
	fullscreen: true,
	onReady: function(){
		new BO.App();
		Ext.Msg.alert("","ピンをドラッグドロップすることでその場所の住所と停電グループが分かります。現在は神奈川県のみカバーしています。");
	}
});
