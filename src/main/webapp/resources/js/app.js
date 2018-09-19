"use strict"; 
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Step 1'+x);
		app.router.init(x);
	};
	return {init : init};
})();
app.main=(()=>{
	var header,footer,content,nav,ctx,script,style,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
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
		app.router.home();
	};
	return {init : init};
})();
app.board = (()=>{
	var w,header,footer,content,nav,ctx,script,style,img;
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
		$('#header').remove();
		$.getScript($.script()+'/loginBox.js',()=>{
			$('#content').html(loginBoxUI());
			$('#login_form_btn').click(e=>{
				e.preventDefault();
				$.ajax({
					url : $.ctx()+'/mbr/login',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify(
							{userid : $('#userid').val(),
							password : $('#password').val()
					}),
					success : d=>{
						alert('ID 판단 :: '+d.ID);
						alert('PW 판단 :: '+d.PW);
						alert('MBR 판단 :: '+d.MBR.userid);
						if(d.ID==="WRONG"){
							
						}else if(d.PW==="WRONG"){
							
						}else{
							app.router.home();
						}
						
					},
					error : (m1,m2,m3)=>{
						alert(m3);
					}
				});
			});
			
		});
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
	},
	home : ()=>{
		$.when(
	            $.getScript($.script()+'/header.js'),
	            $.getScript($.script()+'/content.js'),
	            $.getScript($.script()+'/nav.js'),
	            $.getScript($.script()+'/footer.js'),
	            $.Deferred(y=>{
	                $(y.resolve);
	            })
	        ).done(z=>{
	        	$('#wrapper').html(
	        			navUI()
	        			+headerUI()
	        			+contentUI()
	        			+footerUI()
	        			);
	        	$('#login_btn').click(e=>{
	        		e.preventDefault();
	        		app.permission.login();	
	        	});
	        	$('#board').click(e=>{
	        		app.board.init();
	        	});
	        })
	        .fail(x=>{
	        	console.log('로드 실패');
	        });
	}
};












