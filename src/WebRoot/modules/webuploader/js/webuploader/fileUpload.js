function change() {

	$('.brand-list').find('.input-radio-1').change(function () {
		if ($(this).is(':checked')) {
			$(this).parent().parent().parent().find('.input-checkbox').attr('disabled', true);
			$(this).parent().parent().parent().find('.input-checkbox').attr('checked', false);
			$(this).parent().parent().next().find('input').val(null);
		  $(this).parent().parent().next().find('.editImg').hide()
			$(this).parent().parent().height(111);
			$(this).parent().next().find('.uploader-list').hide();
			$(this).parent().parent().siblings('.input-col-box').height(36);
			$(this).parent().next().find('.need-required').attr('required', true);
			$(this).parent().parent().next().find('.need-required').attr('required', false);
		} else {
			$(this).parent().parent().parent().find('.input-checkbox').attr('disabled', false);
		}
	});
	$('.brand-list').find('.input-radio-2').change(function () {
		if ($(this).is(':checked')) {
			$(this).parent().parent().parent().find('.input-checkbox').attr('disabled', false);
			$(this).parent().parent().prev().find('input').val(null);
			$(this).parent().parent().prev().find('.editImg').hide()
			$(this).parent().parent().height(111);
			$(this).parent().next().find('.uploader-list').hide();
			$(this).parent().parent().prev().height(36);
			$(this).parent().next().find('.need-required').attr('required', true);
			$(this).parent().parent().prev().find('.need-required').attr('required', false);
		} else {
			$(this).parent().parent().parent().find('.input-checkbox').attr('disabled', true);
		}
	});
	$('.brand-list').find('.input-checkbox').change(function () {
		if ($(this).is(':checked')) {
			$(this).parent().next().children().children('input').val(null);
			$(this).parent().next().children().find('.editImg').hide()
			$(this).parent().parent().height(111);
			$(this).parent().next().find('.uploader-list').hide();
			$(this).parent().next().find('.need-required').attr('required', true);
			$(this).parent().parent().parent().parent().prev().find('input').val(null)
		} else {
			$(this).parent().parent().height(36);
			$(this).parent().next().children().children('input').val(null);
			$(this).parent().next().find('.need-required').attr('required', false);
		}
	});
}


//上传
function fileUpload(num1, num2) {
	var imgSrc = {};    //img返回
	var $ = jQuery,
			$list = $('#' + num1 + 'fileList' + num2),
			// Web Uploader实例
			uploader;
	// 初始化Web Uploader
	uploader = WebUploader.create({
		// 自动上传。
		auto: true,
		// swf文件路径
		swf: '../js/webuploader/Uploader.swf',
		// 文件接收服务端。
		server: 'http://static.weiruict.com/uploadFile',
		// 选择文件的按钮。可选。
		pick: '#' + num1 + 'filePicker' + num2,
		formData: {
			uploadUserId: '12',
			token: 'token'
		},
		chunkSize: 2000 * 1024 * 1024,
		duplicate: true,
		// 只允许选择文件，可选。
		accept: {
			title: 'intoTypes',
			extensions: 'jpg,gif,png',
			mimeTypes: '.jpg,.gif,.png'
		}
	});

	// 当有文件添加进来的时候
	uploader.on('fileQueued', function (file) {
		var $li = $(
						'<div id="' + file.id + '" class="file-item thumbnail">' +
						'<img>' +
						'<div class="info">' + file.name + '</div>' +
						'</div>'
				),
				$img = $li.find('img');

		$list.append($li);
		$li.prev().remove();
		$li.parent().parent().parent().parent().css('height', '200px');
		// 创建缩略图
		uploader.makeThumb(file, function (error, src) {
			if (error) {
				$img.replaceWith('<span>不能预览</span>');
				return;
			}

			$img.attr('src', src);
		});
	});

	// 文件上传过程中创建进度条实时显示。
	uploader.on('uploadProgress', function (file, percentage) {
		var $li = $('#' + file.id),
				$percent = $li.find('.progress span');

		// 避免重复创建
		if (!$percent.length) {
			$percent = $('<p class="progress"><span></span></p>')
					.appendTo($li)
					.find('span');
		}

		$percent.css('width', percentage * 100 + '%');
	});

	// 文件上传成功，给item添加成功class, 用样式标记上传成功。
	uploader.on('uploadSuccess', function (file, response) {
		var $li = $('#' + file.id),
				$error = $li.find('div.error');
		// 避免重复创建
		if (!$error.length) {
			$error = $('<div class="error" style="background-color: #00a21b"></div>').appendTo($li);
		}

		imgSrc.picture = 'http://system.weiruict.com' + response.originImg;
		imgSrc.thumb = 'http://system.weiruict.com' + response.thumbnail;
		$error.html('上传成功');
		$error.parent().parent().next().next().val(imgSrc.picture);
		$error.parent().parent().next().next().next().val(imgSrc.thumb);
		$error.parent().parent().next().next().next().hide();
		$error.parent().parent().prev().hide();
		$error.parent().parent().show();
		$('.editImg').css("color","red")

	});

	// 文件上传失败，现实上传出错。
	uploader.on('uploadError', function (file) {
		var $li = $('#' + file.id),
				$error = $li.find('div.error');
		// 避免重复创建
		if (!$error.length) {
			$error = $('<div class="error"></div>').appendTo($li);
		}
		$error.text('上传失败');
	});

	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on('uploadComplete', function (file) {
		$('#' + file.id).find('.progress').remove();
	});
}