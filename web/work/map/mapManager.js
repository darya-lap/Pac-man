var mapManager = {
	mapData: null,
	tLayer: null,
	xCount: 0,
	yCount: 0,
	tSize:{x: 20, y: 20},
	mapSize:{x: 20, y: 20},
	tilesets: [],
	imgLoadCount: 0,
	imgLoaded: false,
	jsonLoaded: false,

	loadMap: function(path){
		var request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if (request.readyState === 4 && request.status === 200){
				mapManager.parseMap(request.responseText);
			}
		};
		request.open("GET",path,true);
		//true - отправить асинхронный запрос на path с использованием ф-ции GET
		request.send();
	},

	parseMap: function(tilesJSON){
		this.mapData = JSON.parse(tilesJSON);
		this.xCount = this.mapData.width;
		this.yCount = this.mapData.height;
		this.tSize.x = this.mapData.tilewidth;
		this.tSize.y = this.mapData.tileheight;
		this.mapSize.x = this.xCount * this.tSize.x;
		this.mapSize.y = this.yCount * this.tSize.y;

		for (var i = 0; i < this.mapData.tilesets.length;i++){
			var img = new Image();
			img.onload = function(){
				mapManager.imgLoadCount++;
				if (mapManager.imgLoadCount === mapManager.mapData.tilesets.length){
					mapManager.imgLoaded = true;
				}
			};
			img.src = this.mapData.tilesets[i].image;
			var t = this.mapData.tilesets[i];
			var ts = {
				firstgid: t.firstgid,//начало нумерации data
				image: img, //объект рисунка
				name: t.name, //имя элемента рисунка
				xCount: Math.floor(t.imagewidth/mapManager.tSize.x),
				yCount: Math.floor(t.imageheight/mapManager.tSize.y),
			};
			this.tilesets.push(ts);
		}
		this.jsonLoaded = true;
	},

	draw: function(ctx){
		if (!mapManager.imgLoaded || !mapManager.jsonLoaded){
			setTimeout(function(){
				mapManager.draw(ctx);
			}, 100);
		}
		else{
			if (this.tLayer === null)
				for (var id = 0; id < this.mapData.layers.length; id++){
					var layer = this.mapData.layers[id];
					if (layer.type === "tilelayer"){
						this.tLayer = layer;
						break;
					}
				}

			for (var i = 0; i < this.tLayer.data.length; i++){
				if (this.tLayer.data[i] !== 0){
					var tile = this.getTile(this.tLayer.data[i]);
					var pX = (i % this.xCount) * this.tSize.x;
					var pY = Math.floor(i / this.xCount) * this.tSize.y;
					ctx.drawImage(tile.img, tile.px, tile.py, this.tSize.x, this.tSize.y, pX, pY, this.tSize.x, this.tSize.y);
				}
			}
		}
	},

	getTile: function (tileIndex){
		var tile = {
			img: null,
			px: 0,
			py: 0
		};
		var tileset = this.getTileset(tileIndex);
		tile.img = tileset.image;
		var id = tileIndex - tileset.firstgid;
		var x = id % tileset.xCount;
		var y = Math.floor(id / tileset.xCount);
		tile.px = x * mapManager.tSize.x;
		tile.py = y * mapManager.tSize.y;
		return tile;
	},

	getTileset: function(tileIndex){
		for (var i = mapManager.tilesets.length - 1; i >= 0; i--){
			if (mapManager.tilesets[i].firstgid <= tileIndex){
				return mapManager.tilesets[i];
			}
		}
		return null;
	},

	parseEntities(){
		if (!mapManager.imgLoaded || !mapManager.jsonLoaded){
			setTimeout(function (){
				mapManager.parseEntities();
			} , 100);
		}
		else{
			for (var j = 0; j < this.mapData.layers.length; j++)
				if (this.mapData.layers[j].type === 'objectgroup'){
				var entities = this.mapData.layers[j];
					for (var i = 0; i < entities.objects.length; i++){
						var e = entities.objects[i];
						try {
							var obj = Object.create(gameManager.factory[e.type]);
							obj.name = e.name;
							obj.pos_x = e.x;
							obj.pos_y = e.y;
							obj.size_x = e.width;
							obj.size_y = e.height;
							gameManager.entities.push(obj);
							if (obj.name === "player")
								gameManager.initPlayer(obj);
						}
						catch(ex){
							console.log("Error while creating:[" + e.gid + "]" + e.type + "," + ex);
						}
					}
				}
		}
	},

	getTilesetIdx(x, y){
		var wX = x;
		var wY = y;
		var idx = Math.floor(wY / this.tSize.y) * this.xCount + Math.floor (wX / this.tSize.x);
		return this.tLayer.data[idx];
	}

};