//index.js
//获取应用实例
const app = getApp()


Page({
    data: {
        matterArray: ['', '自习', '运动', '拼车'],
        obectMatterArray: [{
                id: 0,
                name: '自习'
            },
            {
                id: 1,
                name: '运动'
            },
            {
                id: 2,
                name: '拼车'
            }
        ],
        matterIndex: 0,

        dateArray: [
            ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            ['']
            // ,'1-2节课', '3-4节课', '5-6节课', '7-8节课', '9-10节课', '11-12节课'
            // '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
        ],
        obejctTimeArray: [
            [{
                    id: 0,
                    name: ''
                },
                {
                    id: 1,
                    name: '星期一'
                },
                {
                    id: 2,
                    name: '星期二'
                },
                {
                    id: 3,
                    name: '星期三'
                },
                {
                    id: 4,
                    name: '星期四'
                },
                {
                    id: 5,
                    name: '星期五'
                },
                {
                    id: 6,
                    name: '星期六'
                },
                {
                    id: 7,
                    name: '星期日'
                },
            ],
            [{
                id: 0,
                name: ''
            }, {
                id: 1,
                name: '课时选择'
            }, {
                id: 2,
                name: '具体时间选择'
            }],
            [{
                id: 1,
                name: 'wu'
            }]

        ],
        dateIndex: [0, 0],

        startTimeArray: ['', '6:00', '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        startTimeIndex: 0,
        endTimeArray: ['', '6:00', '7:00', '8:00', "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        endTimeIndex: 0,

        addrArray: [
            ['', '教学楼', '运动场', '校外'],
            ['']
        ],
        obectAddrArray: [{
                id: 0,
                name: '自习'
            },
            {
                id: 1,
                name: '运动'
            },
            {
                id: 2,
                name: '拼车'
            }
        ],
        addrIndex: [0, 0],

        showList: false,
        showMain: true,
        showAdd: false,
        showtab: true,
        list: [],
        mylist: [{
                matter: '约运动',
                listType: '滑冰',
                listId: 0,
                listAddr: '老校门', //地点
                listName: 'Airy491', //姓名
                listMajor: '计算机科学与技术', //学院
                listClass: '',
                listTime: '9-10节课',
                listImgUrl: '/img/head.JPG', //头像
                listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
                like: false, //是否点了   ‘喜欢’

            },
            {
                matter: '约拼车',
                listType: '',
                listId: 1,
                listName: 'Airy491', //姓名
                listImgUrl: '/img/head.JPG', //头像
                listMajor: '计算机科学与技术', //学院
                listTime: '9-10节课', //时间
                listAddr: '新图书馆', //地点
                listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
                like: false,
                //select
            },
            {
                matter: '约运动',
                listType: '篮球',
                listId: 2,
                listName: 'Airy491', //姓名
                listImgUrl: '/img/head.JPG', //头像
                listMajor: '计算机科学与技术', //学院
                listTime: '15:00', //时间
                listAddr: '老校门', //地点
                listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
                like: true,
                //select
            }, {
                matter: '约拼车',
                listType: '',
                listId: 3,
                listName: 'Airy491', //姓名
                listImgUrl: '/img/head.JPG', //头像
                listMajor: '计算机科学与技术', //学院
                listTime: '7:00', //时间
                listAddr: '老校门', //地点
                listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
                like: true,
                //select
            }, {
                matter: '约运动',
                listType: '排球',
                listId: 4,
                listName: 'Airy491', //姓名
                listImgUrl: '/img/head.JPG', //头像
                listMajor: '计算机科学与技术', //学院
                listTime: '7:00', //时间
                listAddr: '老校门', //地点
                listDiscrib: '高数/男的/帅的/成绩好的/gay蜜的/话多的/有趣的', //详细描述
                like: true,

                //select
            },

        ],
    },
    //事件处理函数
  onReachBottom: function() {
        if (this.data.showtab) {
            console.log('下拉刷新');
            let allList = this.data.listbegin;
            let newList = allList.splice(0, 4);
          let showList = this.data.list.concat(newList);
            this.setData({
                list: showList
            })
            wx.stopPullDownRefresh();
        } else if (this.data.showList) {
            console.log('请求刷新');

            wx.stopPullDownRefresh();
        } else {
            wx.stopPullDownRefresh();
        }
    },

    //绑定单选改变事件
    bindPickerChange: function(e) {
        // console.log(e);
        this.setData({
            matterIndex: e.detail.value
        })

        this.getSelectList();
    },
    bindPickerChangeStartTime: function(e) {
        // console.log(e);
        this.setData({
            startTimeIndex: e.detail.value
        })
        this.getSelectList();
    },
    bindPickerChangeEndTime: function(e) {
        // console.log(e);
        this.setData({
            endTimeIndex: e.detail.value
        })
        this.getSelectList();
    },
    //改变多选事件
    bindMultiPickerChangeDate: function(e) {
        // console.log(e);
        this.setData({
            dateIndex: e.detail.value
        })
        this.getSelectList();
    },

    bindMultiPickerChangeAddr: function(e) {
        // console.log(e);
        this.setData({
            addrIndex: e.detail.value
        })
        this.getSelectList();
    },
    //多选联动事件
    bindMultiPickerColumnChangeAddr: function(e) {
        // console.log(e);
        var data = {
            addrArray: this.data.addrArray,
            addrIndex: this.data.addrIndex
        }
        data.addrIndex[e.detail.column] = e.detail.value;
        switch (data.addrIndex[0]) {
            case 0:
                data.addrArray[1] = [''];
                break;
            case 1:
                data.addrArray[1] = ['', '老图书馆', '数字图书馆', '第二教学楼', '第四教学楼', '第五教学楼'];
                // data.addrIndex[1] = 0;
                break;
            case 2:
                data.addrArray[1] = ['', '风华操场', '太极操场', '风雨操场', '灯光篮球场', '桂花篮球场', '健身房'];
                // data.addrIndex[1] = 0;
                break;
            case 3:
                data.addrArray[1] = ['', '新校门', '老校门', '西校门', '北校门', '南校门'];
                // data.addrIndex[1] = 0;
                break;
        }
        this.setData(data);
        this.getSelectList();
    },
    bindMultiPickerColumnChangeDate: function(e) {
        // console.log(e.detail.column,e.detail.value);
        var m29 = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];
        var m30 = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
        var m31 = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

        var data = {
            dateArray: this.data.dateArray,
            dateIndex: this.data.dateIndex
        }

        data.dateIndex[e.detail.column] = e.detail.value;

        if (data.dateIndex[0] == 0) {
            data.dateArray[1] = [''];
        } else if (data.dateIndex[0] == 1 || data.dateIndex[0] == 3 || data.dateIndex[0] == 5 || data.dateIndex[0] == 7 || data.dateIndex[0] == 8 || data.dateIndex[0] == 10 || data.dateIndex[0] == 12) {
            data.dateArray[1] = m31;
        } else if (data.dateIndex[0] == 2) {
            data.dateArray[1] = m29;
        } else {
            data.dateArray[1] = m30;
        }

        this.setData(data);
        this.getSelectList();
    },
    getSelectList: function() {
        var matter = this.data.matterArray[this.data.matterIndex];
        var datem = this.data.dateArray[0][this.data.dateIndex[0]];
        var dated = this.data.dateArray[1][this.data.dateIndex[1]];
        var start = this.data.startTimeArray[this.data.startTimeIndex]
        var end = this.data.endTimeArray[this.data.endTimeIndex];
        var addr = this.data.addrArray[1][this.data.addrIndex[1]];

        // 2020-1-1 13:00:00
        var start_time = "2020-" + datem + "-" + datem + " " + start + ":00:00";
        var end_time = "2020-" + datem + "-" + datem + " " + end + ":00:00";

        //刷新页面请求所有列表
        wx.request({

        })
    },
    changeTab1: function(e) {
        if (this.data.showtab) {
            this.dataset({
                showMain: true,
                showList: false,
                showAdd: false
            })
        } else {
            this.setData({
                showMain: true,
                showList: false,
                showAdd: false,
                showtab: true
            })
        }

        //请求
        // wx.request({

        // })
    },
    changeTab2: function(e) {

        if (!this.data.showtab) {
            this.setData({
                showList: true,
                showMain: false,
                showAdd: false
            })
        } else {
            this.setData({
                showList: true,
                showMain: false,
                showAdd: false,
                showtab: false
            })
        }


        //请求
        // wx.request({

        // })
    },

    addchange: function(e) {
        this.setData({
            showtab: false,
            showList: false,
            showMain: false,
            showAdd: true
        })
    },
    setListData() {},
    //请求所有列表信息
    haveAllList: function() {
        const self = this;
        wx.request({
            url: 'https://www.youyougongqianxing.xyz:4430/selectAll/',
            method: 'GET',
            success(res) {
                res.data.forEach((item, index) => {
                    item.datem = item.listEndTime.slice(5, 11).slice(0, 2);
                    item.dated = item.listEndTime.slice(5, 11).slice(3, 5);
                    item.start_time = item.listStartTime.slice(10, 13);
                    item.end_time = item.listEndTime.slice(10, 13);
                });
                self.setData({
                    listbegin: res.data
                })
              let allList = self.data.listbegin;
              let newList = allList.splice(0, 4);
              let showList = newList.concat(self.data.list);
              self.setData({
                list: showList
              })
                
            }
        })
    },

    onLoad: function() {
      wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res){
              wx.login({
                success(res){
                  if (res.code) {
                    //发起网络请求
                    wx.request({
                      url: 'https://www.youyougongqianxing.xyz:4430/user/login/'+res.code,
                      method:'GET',
                      success(res){
                        wx.setStorage({
                          key: 'openid',
                          data: res.data.openid,
                        })
                      }
                    })
                  } else {
                    console.log('登录失败！' + res.errMsg)
                  }
                }
              })
            }
          })
        
        }
      }
    })
        
        this.haveAllList()
        wx.setStorage({
          key: "userInfo",
          data: {
            name: null,
            sid: null,
            sex: null,
            major: null,
            classid: null
          }
        })
        // if (app.globalData.userInfo) {
        //   this.setData({
        //     userInfo: app.globalData.userInfo,
        //     hasUserInfo: true
        //   })
        // } else if (this.data.canIUse) {
        //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //   // 所以此处加入 callback 以防止这种情况
        //   app.userInfoReadyCallback = res => {
        //     this.setData({
        //       userInfo: res.userInfo,
        //       hasUserInfo: true
        //     })
        //   }
        // } else {
        //   // 在没有 open-type=getUserInfo 版本的兼容处理
        //   wx.getUserInfo({
        //     success: res => {
        //       app.globalData.userInfo = res.userInfo
        //       this.setData({
        //         userInfo: res.userInfo,
        //         hasUserInfo: true
        //       })
        //     }
        //   })
        // }


    },
    onReady: function(e) {
        // console.log(this.data)
        // let height;
        // let res = wx.getSystemInfoSync();
        // let winHeight = res.windowHeight;
        // let query = wx.createSelectorQuery();
        // query.select('.tabs').boundingClientRect();
        // query.exec((res) => {
        //   height = res[0].height;
        //   this.setData({
        //     sortHeight: winHeight - height,
        //     scrollFixedTop: res[0].top
        //   })
        // })
    },


    select(e) {
        var num = e.detail;
        var allList = this.data.list;
        allList[num].like = !allList[num].like;
        var islike = !allList[num].like;
        this.setData({
            list: allList
        })

        //点赞同步
        // wx.request({
        //     url: 'https://xxx.xxxx.xxx/zan.php',
        //     method: 'POST',
        //     header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     data: {
        //         id: num,
        //         like: islike,
        //     },

        // })
    },




    onPageScroll: function(e) {
        if (e.scrollTop >= this.data.scrollFixedTop && !this.data.showFixed) {
            this.setData({
                showFixed: true
            })
        } else if (e.scrollTop < this.data.scrollFixedTop && this.data.showFixed) {
            this.setData({
                showFixed: false
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    getTabsInfo(e) {
        wx.pageScrollTo({
            scrollTop: e.target.offsetTop - 1,
            duration: 300
        })
        setTimeout(() => {
            if (e.target.dataset.index == 0) {
                this.setData({
                    showSort: !this.data.showSort
                })
            }
            if (e.target.dataset.index) {
                this.setData({
                    showFixed: true,
                    sortIndex: e.target.dataset.index
                })
            }
        }, 350)
    },
    getFixedTabsInfo(e) {
        if (e.target.dataset.index) {
            this.setData({
                sortIndex: e.target.dataset.index
            })
        }
        if (e.target.dataset.index == 0) {
            this.setData({
                showSort: !this.data.showSort
            })
        } else {
            this.setData({
                showSort: false
            })
        }
    },
    move() {},
    selectSort(e) {
        if (e.target.dataset.sortindex || e.target.dataset.sortindex == 0) {
            this.setData({
                sortListIndex: e.target.dataset.sortindex,
                showSort: false
            })
        } else {
            this.setData({
                showSort: false
            })
        }
    }
})