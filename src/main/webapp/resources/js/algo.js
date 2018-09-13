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
algo.main = {
    onCreate:()=>{
    	algo.main.setContentView();
    },
    setContentView : ()=>{
        $('#wrapper').html('<h1>알고리즘</h1><h3>수 열</h3><div id="ctn">'
    		+'<table id="tbl" style="width:800px;height:300px;'
    		+'border-collapse: collapse;border: 1px solid black;margin:0 auto">'
    		+ '<tr style="border: 1px solid black;">'
    		+  '<td id="t__l" style="width: 50%;border: 1px solid black;"></td>'
    		+  '<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
    		+ '</tr>'
    		+'</table>'
    		+'</div>');
        let $t__l = $('#t__l');
        let $t__r = $('#t__r');
        $("<ul />")
        .attr({id : 'side__menu'})
        .addClass('list-group').appendTo($t__l);
       $('<li/>')
       .attr({id : 'arith'})
       .addClass('list-group-item')
       .appendTo($('#side__menu'));
       $('<a/>')
       .attr({href : '#'})
       .html('등차수열의 합')
       .appendTo($('#arith'))
       .click(e=>{
    	$t__r.empty();
      /* 	let ques = 
    		'<div id="ques"><h4>시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.<h4>'
    		+'    <label for="시작값">시작값</label><input id="sta" type="text" value="">'
    		+'    <label for="마지막값">마지막값</label><input id="end" type="text" value="">'
    		+'    <label for="공차">공차</label><input id="diff" type="text" value="">'
    		+'    <button id="bt">결과보기</button>'
    		+'    <h6 id="rs"></h6></div>'
    	;*/
       	$('<div/>')
       	.attr({id:'ques'}).appendTo($t__r);
       	$('<h4/>')
       	.html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
       	$('<label/>').html('시작값').appendTo($('#ques'));
       	$('<input/>')
       	.attr({id:'sta',type:'text'}).appendTo($('#ques'));
       	$('<label/>').html('마지막값').appendTo($('#ques'));
       	$('<input/>')
       	.attr({id:'end',type:'text'}).appendTo($('#ques'));
       	$('<label/>').html('공차').appendTo($('#ques'));
       	$('<input/>')
       	.attr({id:'diff',type:'text'}).appendTo($('#ques'));
       	$('<br/>').appendTo($('#ques'));
       	$('<button/>')
       	.addClass('btn btn-primary')
       	.attr({type:'button'})
       	.html('결과보기')
       	.appendTo($('#ques'))
       	.click(e=>{
       		console.log(rs);
    		$('<h6/>')
    		.empty().text(
    			($.fn.zeroChecker(
    	        [$('#sta').val(),
    	        $('#end').val(),
    	        $('#diff').val()]))?
    	        		'빈칸을 채우세요'
    	        		:'완성하세요'
    		);
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
    }
};
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
algo.appl = {};

algo.router = {
	onCreate : x=>{
		$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x));
				$.getScript($.ctx()+'/resources/js/util.js')
        		.done(x=>{console.log('실행');})
        		.fail(x=>{console.log('실패')});
				algo.main.onCreate();
			}	
		);
	}
};






