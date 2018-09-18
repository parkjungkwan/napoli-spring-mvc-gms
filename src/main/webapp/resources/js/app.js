"use strict"; 
var app = app || {};
/*app = (x=>{
	var init =x=>{
		console.log('Step 1'+x);
		algo.router.init(x);
		app.onCreate();
	}; 
	var onCreate=()=>{
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
	};
	var setContentView=()=>{
		console.log('Step 4 : '+$.ctx());
	};
	return {
		init : init
	};
})();*/
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})();
app.main=(()=>{
	var w,header,footer,content,nav,ctx,script,style,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w = $('#wrapper');
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		/*$.getScript(header,()=>{
			w.html(headerUI());
		});*/
		///
		$.when(
	            $.getScript($.script()+'/header.js'),
	            $.getScript($.script()+'/content.js'),
	            $.getScript($.script()+'/nav.js'),
	            $.getScript($.script()+'/footer.js'),
	            $.Deferred(y=>{
	                $(y.resolve);
	            })
	        ).done(z=>{
	        	w.html(
	        			navUI()
	        			+headerUI()
	        			+contentUI(ctx)
	        			+footerUI()
	        			);
	        	$('#login_btn').click(e=>{
	        		app.permission.login();	
	        	});
	        	$('#board').click(e=>{
	        		app.board.init();
	        	});
	        })
	        .fail(x=>{
	        	console.log('로드 실패');
	        });
		///
       // 자스 Promise 비동기 로직 다루기
      /*  $.when(
            $.getScript($.script()+'/header.js'),
            $.getScript($.script()+'/nav.js'),
            $.getScript($.script()+'/content.js'),
            $.getScript($.script()+'/footer.js'),
            $.Deferred(x=>{
            	console.log('step3'+header()); 
            })
        ).done(x=>{
        	console.log('step4'); 
        });*/
		
	};
	return {init : init};
})();
app.board = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('Board');
		$('#header').remove();
		$('#content').empty();
		
	};
	return {init:init};
})();
app.permission = (()=>{
	var login =()=>{
		alert('login');
		$('#header').remove();
		$('#content').empty();
		
	};
	return {login : login};
})();
app.router = {
	init : x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
        		.done(x=>{
        			console.log('실행');
        			app.main.init();
        		})
        		.fail(x=>{console.log('실패')});
				
			}	
		);
		}
	};