"use strict"; 
var algo = algo || {};
algo = {
    init :x=>{
    	algo.onCreate(x);
    	algo.setContentView();
    },
    onCreate:x=>{
    	algo.router.onCreate(x);
    	//algo.util.onCreate(x);
    },
    setContentView:()=>{
        $('#wrapper').empty();
    }
};
algo.main = (()=>{
	var $wrappper,ctx,img,script,style,
		compo,json,$t__l,$t__r
	;
	var onCreate = ()=>{
		ctx = $.ctx();
		img = $.img();
		script = $.script();
		style = $.style();
		compo = script+'/compo.js';
    	setContentView();
    };
    var setContentView = ()=>{
    	$('#wrapper').html('<h1>알고리즘</h1><span id="seq">수 열</span>'
    			+'<span id="appl">응 용</span><div id="ctn">'
        		+'<table id="tbl" style="width:800px;height:300px;'
        		+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
        		+ '<tr style="border: 1px solid black;">'
        		+  '<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
        		+  '<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
        		+ '</tr>'
        		+'</table>'
        		+'</div>');
            $t__l = $('#t__l');
            $t__r = $('#t__r');
        /*   	$('#appl').click(x=>{
           		alert('appl click');
				$t__l.empty();
				// '화폐문제'
				$.getScript(compo,()=>{
					ui.anchor({txt:'화폐문제'})
					.$t__l
					;
					
				});
			});*/
            $("<ul />")
            .attr({id : 'side__menu'})
            .addClass('list-group').appendTo($t__l);
           $('<li/>')
           .attr({id : 'arith'})
           .addClass('list-group-item')
           .appendTo($('#side__menu'));
           $('<a/>')
           .attr({href : '#'})
           .html('등차수열의 합').appendTo($('#arith'))
           .click(e=>{
        	$t__r.empty();
           	$('<div/>').attr({id:'ques'}).appendTo($t__r);
           	$('<h4/>').html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
           	let arr = [{id:'sta', label:'시작값'},
           		{id:'end', label:'마지막값'},
           		{id:'diff', label:'공차'}];
        	$.each(arr,(i,j)=>{
           		$('<label/>').html(j.label).appendTo($('#'+'ques'));
               	$('<input/>').attr({id: j.id,type:'text'}).appendTo($('#ques'));
               	$('<br/>').appendTo($('#ques'));
           	});
           	$('<button/>')
           	.addClass('btn btn-primary')
           	.attr({type:'button'})
           	.html('결과보기')
           	.appendTo($('#ques'))
           	.click(e=>{
           		$('#h6').remove();
           		let res = "숫자를 입력하세요";
    			let a = $.fn.zeroChecker(
    						[$('#sta').val(),
    						$('#end').val(),
    						$('#diff').val()]
    					);
    			if(!a){
    				let sta = $('#sta').val()*1;
    				let end = $('#end').val()*1;
    				let diff = $('#diff').val()*1;
    				console.log(sta+','+end+','+diff);
    				let i = sta;
    				let sum = 0;
    				while(i<=end){
    					sum=sum+i;
    					i=i+diff;
    				}
    				res = sum;
    			}
    			$('<h6/>').attr({id:"h6"}).appendTo('#ques').text(res);
           	});
        });
       	$('#appl').click(x=>{
       		alert('appl click');
			$t__l.empty();
			$.getScript(compo,()=>{
				ui.ul({len : 3,id: 'menu'}).appendTo($t__l);
				ui.anchor({txt:'화폐문제'})
				.appendTo($('#menu-0'))
				.on('click',function(){
					$('<h6>화폐문제</h6>')
					.appendTo($t__r);
					ui.input({
						id : 'money',
						txt : '입금액'
					})
					.appendTo($t__r);
					ui.btn({clazz:'primary',txt:'전 송'})
					.appendTo($t__r)
					.click(e=>{
						alert('화폐금액::'+$('#money').val());
						$.ajax({
							url : ctx + '/algo/money/',
							method : 'POST',
							contentType : 'application/json',
							data : JSON.stringify({money : $('#money').val()}),
							success : d=>{
								alert('AJAX 성공이다 !!'+d.test);
							},
							error : (m1,m2,m3)=>{
								alert('에러발생 1:'+m1);
								alert('에러발생 2:'+m2);
								alert('에러발생 3:'+m3);
							}
						});
					})
					;
				})
				;
			});
			
		});
        /*    $('#t__l').html('<a id="arith__seq"><h3>등차수열</h3></a>');
            $('#t__l').append('<a id="swit__seq"><h3>스위치수열</h3></a>');
            $('#t__l').append('<a id="fibo__seq"><h3>피보나치수열</h3></a>');
            $('#t__l').append('<a id="fact__seq"><h3>팩토리얼수열</h3></a>');
            $('#t__l').empty()
            $('#t__l').html('<a id="arith__seq"><h3>등차수열</h3></a>');
            $('#t__l').append('<a id="swit__seq"><h3>스위치수열</h3></a>');
            $('#t__l').append('<a id="fibo__seq"><h3>피보나치수열</h3></a>');
            $('#t__l').append('<a id="fact__seq"><h3>팩토리얼수열</h3></a>');
            $('#swit__seq').click(e=>{
            	alert('스위치수열 선택');
            });
            $('#fibo__seq').click(e=>{
            	alert('피보나치수열 선택');
            });
            $('#fact__seq').click(e=>{
            	alert('팩토리얼수열 선택');
            });
            */
    }; // setContentView.end
    return {
    	onCreate : onCreate,
    	setContentView : setContentView
    };
    
})();
/*algo.main = {
	 	
    onCreate:()=>{
    	algo.main.setContentView();
    },
    setContentView : ()=>{
        
    }
};*/
algo.series = {
	arith : x =>{
		
	},
	fibonacci : x =>{},
	swit : x => {},
	factorial : x => {}
};
algo.array = {
	bubble : x => {},
	insert : x => {},
	select : x => {},
	ranking : x => {}
};
algo.matrix = {
	fiveBy5 : x =>{},
	sandGlass : x =>{},
	snail : x =>{},
	diamond : x => {},
	zigzag : x =>{}	
};
algo.math = {
		
};
algo.appl = {
		
};

algo.router = {
	onCreate : x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
        		.done(x=>{
        			console.log('실행');
        		})
        		.fail(x=>{console.log('실패')});
				algo.main.onCreate();
			}	
		);
	}
};






