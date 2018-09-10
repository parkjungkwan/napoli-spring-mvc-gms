/*"use strict"; 엄격한문법적용-틀리면 에러처리하라!
var app = app || {};
app = {
	init : x=>{
		console.log('Step 1');
		app.session.context(x);
		app.onCreate();
	}, 
	onCreate : ()=>{
		console.log('Step 3');
		app.setContentView();
		$('#login_btn').click(()=>{
			location.href=app.x()+'/move/auth/member/login';
		});
		$('#add_btn').click(()=>{
			location.href=app.x()+'/move/auth/member/add';
		});
		$('#logout_btn').click(()=>{
			location.href=app.x()+'/member/logout';
		});
		
		$('#login_form_btn').click(()=>{
			$('#login_form').attr({
				action : app.x()+"/member/login",	
				method : "post"
			}).submit();
		});
		$('#join_form_btn').click(()=>{
			var form = document.getElementById('join_form');
			form.action = app.x()+"/member/add";
			form.method = "post";
			form.submit();
			$('#join_form').attr({
				action: app.x()+"/member/add",
				method: "post"
			}).submit();
		});
		$('#retrieve_btn').click(()=>{
			location.href=app.x()+'/member/retrieve/'+user.get('userid');
		});
		$('#logout-btn').click(()=>{
			location.href=app.x();
		});
		$('#move_update_form').click(()=>{
			location.href=app.x()+'/move/login/member/modify';
		});
		$('#update_member_btn').click(()=>{
			$('#update_member').attr({
				action : app.x()+"/member/modify/"+user.get('userid'),
				method: "post"
			}).submit();
		});
		$('#move_delete_form').click(()=>{
			location.href=app.x()+'/move/login/member/remove';
		});
		$('#delete_form_btn').click(()=>{
			$('#delete_form').attr({
				action : app.x()+"/member/remove/"+user.get('userid'),
				method: "post"
			}).submit();
		});
	},
	setContentView : ()=>{
		console.log('Step 4 : '+app.j());
	}
};
app.session={
	context : x=>{
		console.log('Step 2 : '+ x);
		sessionStorage.setItem('context',x);
		sessionStorage.setItem('js',x+'/resources/js');
		sessionStorage.setItem('css',x+'/resources/css');
		sessionStorage.setItem('img',x+'/resources/img');
	},
	path : x=>{
		return sessionStorage.getItem(x);
	},
};
app.x=()=>{
	return app.session.path('context');
};
app.j=()=>{
	return app.session.path('js');
};
app.c=()=>{
	return app.session.path('css');
};
app.i=()=>{
	return app.session.path('img');
};
var user = user || {};
user.session = x=>{
	$.each(x, function(k,v){
		alert('key:'+k+', value:'+v)
		sessionStorage.setItem(k,v);
	});
}
user.get = x=>{
	return sessionStorage.getItem(x);
}*/