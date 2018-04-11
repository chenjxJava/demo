/**
 * Created by admin on 2017-07-21.
 */
/* 文件上传 */
var $list = $("#thelist");
var l = new Array();
var uploader = WebUploader.create({


	// 选完文件后，是否自动上传。
	auto : true,


	// 文件接收服务端。
	server : 'upload/upload/up',


	// 选择文件的按钮。可选。
	// 内部根据当前运行是创建，可能是input元素，也可能是flash.
	pick : '#picker',


	// 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
	resize : false,
	// 指定上传的模块
	formData : {
		"model" : "counsel"
	}
});


// 当有文件被添加进队列的时候
uploader.on('fileQueued', function(file) {
	$list.append('<div id="' + file.id + '" class="item">'
		+ '<h4 class="info">' + file.name + '</h4>'
		+ '<p class="state">等待上传...</p>' + '</div>');
});

//response是可以接收从后台传回的数据
uploader.on('uploadSuccess', function(file, response) {
	$('#' + file.id).find('p.state').text('已上传');
	/*
	 l.push(response.data.fileId)
	 // 定义数组存储上传成功之后的fielId
	 $('#fNum').val(l);
	 */
});


uploader.on('uploadError', function(file) {
	$('#' + file.id).find('p.state').text('上传出错');
});


uploader.on('uploadComplete', function(file) {
	$('#' + file.id).find('.progress').fadeOut();
});