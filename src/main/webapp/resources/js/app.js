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
		$('#header').remove();
		$('#content').empty();
		$.getJSON(ctx+'/boards/1',d=>{
			$.getScript($.script()+'/compo.js',()=>{
				let x = {
						type : 'default', 
						id : 'table', 
						head : '게시판',
						body : '오픈 게시판 ... 누구든지 사용가능',
						list : ['No','제목','내용','글쓴이','작성일','조회수'],
						clazz : 'table table-bordered'
				};
				(ui.table(x))
				.appendTo($('#content'));
			    $.each(d.list,(i,j)=>{
			    	$('<tr/>').append(
			    	$('<td/>').attr('width','5%').html(j.bno),
			    	$('<td/>').attr('width','10%').html(j.title),
			    	$('<td/>').attr('width','50%').html(j.content),
			    	$('<td/>').attr('width','10%').html(j.writer),
			    	$('<td/>').attr('width','10%').html(j.regdate),
			    	$('<td/>').attr('width','5%').html(j.viewcnt)
			    	).appendTo($('tbody'));
			    });
			    ui.page({}).appendTo($('#content'));
			    let ul = $('.pagination');
			    let existPrev = d.page.existPrev;
				let existNext = d.page.existNext;
				let prev = '', next = '';
				if(!existPrev){
					prev = 'disabled';
				}
				if(!existNext){
					next = 'disabled';
				}
				let preli = $('<li id="prev" class="page-item '+prev+'"><span class="page-link">◀</span>');
				let nextli = $('<li id="next"  class="page-item '+next+'""><span class="page-link">▶</span>');
				preli.appendTo(ul);
				for(let i=d.page.beginPage;i<=d.page.endPage;i++){
					$('<span/>')
							.addClass('page-link')
							.html(i)
							.click(e=>{
								alert('나는 '+i+'를 눌렀다');
								
							})
							.appendTo($('<li  class="page-item"/>'))
							.appendTo(ul);
				}
	
				nextli.appendTo(ul);
			    $('.page-link').attr('style',"cursor:pointer");
			});
		});
	};
	return {init:init};
})();
app.permission = (()=>{
	var login =()=>{
		$('#header').remove();
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/loginBox.js',()=>{
				$('#content').html(loginBoxUI());
				ui.anchor({id:'login_form_btn',txt:'로그인'})
				.css({'width':'300px'})
				.addClass('btn btn-primary')
				.appendTo($("#content-box"))
				.click(e=>{
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
		});
		
	};
	var join =()=>{
		$('#header').remove();
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/join.js',()=>{
				$('#content').html(joinUI());
				/*$("[name='subject']")
					.change(function () {
					alert($(this).val());
				});*/
				
				ui.anchor({id:'join_form_btn',txt:'회원가입'})
				.addClass('btn btn-primary')
				.appendTo("#content-box")
				.click(e=>{
					e.preventDefault();
					alert('click ------');
					var arr=[];
					var sub =$("[name='subject']");
					let i;
					let a = '';
					for (i of sub) {
					  if (i.checked) {
					    alert('선택된 과목::'+i.value);
					    arr.push(i.value);
					    a += i.value+',';
					  }
					}
					$.ajax({
						url : $.ctx()+'/',
						method : 'POST',
						contentType : 'application/json',
						data : JSON.stringify(
							{userid:$('#userid').val(),
								password:$('#password').val(),
								name:$('#name').val(),
								ssn:$('#ssn').val(),
								email:$('#email').val(),
								phone:$('#phone').val(),
								teamid:$('[name=teamid]:checked').val(),
								roll:$('#roll').val(),
								subject:JSON.stringify(arr)
							}
						),
						success : d=>{
							
						},
						error : (m1,m2,m3)=>{
							
						}
					});
				});
				
			});
		});
	};
	return {login : login, join : join};
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
	        	$('#add_btn').click(e=>{
	        		app.permission.join();	
	        	});
	        })
	        .fail(x=>{
	        	console.log('로드 실패');
	        });
	}
};












