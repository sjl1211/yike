/*
* @Author: Administrator
* @Date:   2018-07-10 15:56:56
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-10 17:05:03
*/
//创建APP应用模块
var yike=angular.module("yike",[]);
// console.log('2222');
/*
	run方法在模块创建好之后会直接执行
 */
yike.run(["$rootScope",function($rootScope){
	// alert(123);
	// 给头部的a标签绑定单击事件,点击可以实现侧边导航的显示和隐藏
	// 给collapse定义值,通过这个值绝对collapse是否有效
	$rootScope.collapsed = false;
	$rootScope.toggle=function(){
		// alert("toggle");
		$rootScope.collapsed=!$rootScope.collapsed;
		//显示或隐藏导航栏标题的内容
		//获取导航栏中所有的dd 
		var dds = document.querySelectorAll("dd");
		// console.log(dds);
		// 遍历每一个dd,给每一个dd修改样式实现隐藏 显示的效果
		// 显示时,translate值为0,此时collapse值为true.
		if($rootScope.collapsed){
			//此时显示
			for(var i=0; i<dds.length; i++) {
				dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(0)';
			}
		}else{
			for(var i=dds.length - 1; i>=0; i--) {
			dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
			dds[i].style.transitionProperty = 'all';
			dds[i].style.transitionDelay = '';
			dds[i].style.transitionTimingFunction = 'ease-out';
			dds[i].style.transform = 'translate(-100%)';
			}
		}
		
	}
}]);