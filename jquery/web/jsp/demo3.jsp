<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017-07-05
  Time: 13:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>Title</title>
<script src="../js/jquery/jquery-1.8.3.js"></script>
<script>
		if(${empty vpoi}) {
			var speed = parseInt(${vpoi.speed});
			$("#speed").attribute("speed", speed+5);
		}
</script>
</head>
<body>
	my demo3.jsp<br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
	<input type="checkbox"><br>
</body>
</html>
