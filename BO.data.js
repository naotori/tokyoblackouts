Ext.ns('BO');

BO.Data = {
	zeroDay: new Date(2011,2,15),

	dataSource: [
		['時間帯情報','http://www.tepco.co.jp/cc/press/11031414-j.html','2011/03/14'],
		['栃木県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['茨城県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['群馬県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['千葉県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['神奈川県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['東京都','http://code.xenophy.com/?p=1323','2011/03/14'],
		['埼玉県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['山梨県','http://code.xenophy.com/?p=1323','2011/03/14'],
		['静岡県','http://code.xenophy.com/?p=1323','2011/03/14']
	],

	slots: [
    "18:20-22:00", 
    "15:20-19:00",  
    "12:20-16:00",
    "09:20-13:00",  
    "06:20-10:00"  
	],

	zeroDaySlots: [1,0,4,3,2],

	getDaySlot: function(group, date){
		var days = date.getDayOfYear() - this.zeroDay.getDayOfYear(),
				zeroDaySlot = this.zeroDaySlots[group], slotCount = this.slots.length,
				add = (days+zeroDaySlot) % slotCount;

		return this.slots[add];
	},

	getSlot: function(group){
		var d = new Date(Math.max(new Date(), this.zeroDay)), slots = [], day;

		for(var i=0; i<5; i++){
			day = d.add(Date.DAY,i);	
			slots.push({
				day: day,
				slot: this.getDaySlot(group,day)
			});
		}

		return slots;
	}
};
