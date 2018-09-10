<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!doctype html>
<html lang="en">
<head>
	<title>Landing Page - Start Bootstrap Theme</title>
	<link rel="shortcut icon" href="${context}/resources/img/favicon.ico" />
    <link href="${context}/resources/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="${context}/resources/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="${context}/resources/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" type="text/css">
    <link href="${context}/resources/css/landing-page.min.css" rel="stylesheet">
    
    <link href="${context}/other_resources/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="${context}/other_resources/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <link href="${context}/other_resources/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	
	<%-- <script src="${context}/resources/js/app.js"></script> --%>
</head>
	
<body>
<div id="wrapper">
	<div id="nav">
		<tiles:insertAttribute name="nav"/>
	</div>
	<div id="header">
		<tiles:insertAttribute name="header"/>
	</div>
	<div id="content">
		<tiles:insertAttribute name="content"/>
	</div>
	<div id="footer">
		<tiles:insertAttribute name="footer"/>
	</div>
</div>
	<!-- Bootstrap core JavaScript -->
    <script src="${context}/resources/vendor/jquery/jquery.min.js"></script>
    <script src="${context}/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script>
	/* app.init('${context}'); */
</script>
</body>
</html>
