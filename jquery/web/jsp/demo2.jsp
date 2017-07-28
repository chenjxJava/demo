<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017-07-05
  Time: 13:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<script src="../js/jquery/jquery-1.8.3.js"></script>
<script type="text/javascript">
	$(function(){
		var len1=$("#form1 input").length;
		var len2=$("#form1 :input").length;
		console.log("len1的长度是："+len1+",len2的长度是:"+len2);
		$.each(("#form1 input"),function () {
			console.log($(this));
		})
	});
</script>
</head>
<body>
	<form id="form1" action="#" method="post">
		<label for="userName">用户名：</label>
		<input type="text" id="userName"/><br>
		<label for="pwd">密码：</label>
		<input type="password" id="pwd"/><br>
		<select><option>wo kao</option><option>ni  kao</option><option>quancun kao</option></select><br>
		<textarea cols="15" rows="8"></textarea><br>
	</form>
</body>
</html>
