
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/myhome/myhome","pages/watch/watch","pages/goindex/goindex","pages/searchhome/searchhome","pages/playlist/playlist","pages/video/video","pages/wordpage/wordpage","pages/login/login","pages/similarPage/similarPage","pages/concern/concern","pages/loveuserhome/loveuserhome"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"keduoli","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom","scrolllndicator":"node"},"tabBar":{"color":"#7d7d7d","selectedColor":"#fff","backgroundColor":"#151515","list":[{"pagePath":"pages/index/index","text":"发现","iconPath":"/static/icon/音乐演奏.png","selectedIconPath":"/static/icon/音乐演奏1.png"},{"pagePath":"pages/watch/watch","text":"博客","iconPath":"/static/icon/播客.png","selectedIconPath":"/static/icon/播客1.png"},{"pagePath":"pages/myhome/myhome","text":"我的","iconPath":"/static/icon/my.png","selectedIconPath":"/static/icon/my1.png"},{"pagePath":"pages/concern/concern","text":"关注","iconPath":"/static/icon/ol.png","selectedIconPath":"/static/icon/ol1.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"网易云音乐","compilerVersion":"3.1.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"网易云音乐"}},{"path":"/pages/myhome/myhome","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/watch/watch","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/goindex/goindex","meta":{},"window":{"navigationBarTitleText":"wyy","enablePullDownRefresh":false}},{"path":"/pages/searchhome/searchhome","meta":{},"window":{"navigationBarTitleText":"搜索","enablePullDownRefresh":false}},{"path":"/pages/playlist/playlist","meta":{},"window":{"navigationBarTitleText":"歌单","enablePullDownRefresh":false}},{"path":"/pages/video/video","meta":{},"window":{"navigationBarTitleText":"mv","enablePullDownRefresh":false}},{"path":"/pages/wordpage/wordpage","meta":{},"window":{"navigationBarTitleText":"评论","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登入","enablePullDownRefresh":false}},{"path":"/pages/similarPage/similarPage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/concern/concern","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"关注","enablePullDownRefresh":false}},{"path":"/pages/loveuserhome/loveuserhome","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});