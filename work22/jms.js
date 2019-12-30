(function () {
    var JMS = function (id,rowCount,colCount, minLandMineCount, maxLandMineCount) {
        if (!(this instanceof JMS))
        return new JMS(id, rowCount, colCount, minLandMineCount, maxLandMineCount);
        this.doc = document;
        this.table = this.doc.getElementById(id);//画格子的表格
        this.cells = this.table.getElementsByTagName("td");//小格子
        this.rowCount = rowCount || 10;//格子行数
        this.colCount = colCount || 10;//格子列数
        this.LandMineCount = 0; //地雷个数
        this.markLandMineCount = 0;//标记的地雷个数
        this.minLandMineCount = minLandMineCount || 10;//地雷最少个数
        this.maxLandMineCount = maxLandMineCount || 20;//地雷最多个数
        this.arrs = []; //格子对应的数组
        this.beginTime = null; //游戏开始时间
        this.endTime = null; //游戏结束时间
        this.currentSetpCount = 0;//当前走的步数
        this.endCallBack = null; //游戏结束时的回调函数
        this.LandMineCallBack = null; //标记为地雷时更新剩余地雷个数的回调函数
        this.doc.oncontextmenu = function () { //禁用右键菜单
            return false;
        };
        this.drawMap();
    };

    JMS.prototype = {
        //获取元素
        $: function (id) {
            return this.doc.getElementById(id);
        },
        //画地图
        drawMap: function () {
            var tds = [];
            if (window.ActiveXObject && parseInt(navigator.userAgent.match(/msie ([\d.]+)/i)[1]) < 8) {
                var css = '#JMS_main table td{background-color:#888;}',
                head = this.doc.getElementsByTagName("head")[0],
                style = this.doc.createElement("style");
                style.type = "text/css";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(this.doc.createTextNode(css));
                }
                head.appendChild(style);
            }
            for (var i = 0; i < this.rowCount; i++) {
                tds.push("<tr>");
                for (var j = 0; j < this.colCount; j++) {
                    tds.push("<td id='m_" + i + "_" + j + "'></td>");
                }
                tds.push("</td>");
            }
            this.setTableInerHTML(this.table, tds.join(""));
        },
        //初始化，一是设置数组默认值为0，二是确定地雷个数
        init: function () {
            for (var i = 0; i< this.rowCount; i++) {
                this.arrs[i] = [];
                for (var j = 0; j < this.colCount; j++) {
                    this.arrs[i][j] = 0;
                }
            }
            this.LandMineCount = this.selectFrom(this.minLandMineCount, this.maxLandMineCount);
            this.markLandMineCount = 0;
            this.beginTime = null;
            this.endTime = null;
            this.currentSetpCount = 0;
        },
        //把是地雷的数组项的值设置为9
        landMine: function () {
            var allCount = this.rowCount * this.colCount - 1,
            tempArr = {};
            for (var i = 0; i < this.LandMineCount; i++) {
                var randomNum = this.selectFrom(0, allCount),
                rowCol = this.getRowCol(randomNum);
                if (randomNum in tempArr) {
                    i--;
                    continue;
                }
                this.arrs[rowCol.row][rowCol.col] = 9;
                tempArr[randomNum] = randomNum;
            }
        },
        //计算其他格子中的数字
        calculateNoLandMineCount: function () {
            for (var i = 0; i < this.rowCount; i++) {
                for(var j = 0; j < this.colCount; j++) {
                    if (this.arrs[i][j] == 9)
                    continue;
                    if (i > 0 && j > 0) {
                       if (this.arrs[i - 1][j - 1] == 9)
                       this.arrs[i][j]++;
                    }
                    if (i >0) {
                        if (this.arr[i - 1][j] == 9)
                        this.arrs[i][j]++;
                    }
                    if (i > 0 && j < this.colCount - 1) {
                        if (this.arrs[i - 1][j + 1] == 9)
                        this.arrs[i][j]++;
                    }
                    if (j > 0) {
                        if (this.arrs[i][j - 1] == 9)
                        this.arrs[i][j]++;
                    }
                    if (j < this.colCount - 1) {
                        if (this.arrs[i][j + 1] == 9)
                        this.arrs[i][j]++;
                    }
                    if (i < this.rowCount - 1 && j >0) {
                        if (this.arrs[i + 1][j - 1] == 9)
                        this.arrs[i][j]++;
                    }
                    if (i < this.rowCount - 1) {
                        if (this.arrs[i + 1][j] == 9)
                        this.arrs[i][j]++;
                    }
                    if (i < this.rowCount - 1 && j < this.colCount - 1) {
                        if (this.arrs[i + 1][j + 1] == 9)
                        this.arrs[i][j]++;
                    }
                }
            }
        },
        //给每个格子绑定点击事件 （左键和右键）
        
    }
})