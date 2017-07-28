<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2017-07-04
  Time: 14:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<script src="../js/jquery/jquery1.42.min.js"></script>
<title>Title</title>
<script>
function test() {
		alert("abc");
	}
	$(document).ready(function(){
		$('.get1 tr').each(function(){
			console.log($(this).find('td').eq(0).text());
			alert($(this).find('td').eq(1).find('input').val());
			alert($(this).find('td').eq(2).find('select').val());
		});
	});

</script>
</head>
<body>
	<div>

		<a href="javascript:void(0)" onclick="test()">121</a>
	</div>
	<table width="100%" class="get1">
		<tr>
			<td >1</td>
			<td ><input type='text' value='v1'/></td>
			<td ><select><option value='s1'>s1</option><option value='s2'>s2</option></select></td>
		</tr>
		<tr>
			<td >2</td>
			<td ><input type='text' value='v2' /></td>
			<td ><select ><option value='ss1'>ss1</option><option value='ss2'>ss2</option></select></td>
		</tr>
	</table>
</body>
</html>
