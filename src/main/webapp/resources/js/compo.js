"use strict";
var ui={
	div : x=>{return $('<div/>').attr(x);},
	span : x=>{return $('<span/>').attr(x);},
	anchor : x=>{  // ui.anchor({txt:'TEST'});
		return $('<a/>').attr({href : '#'}).html(x.txt);},
	ul : x=>{ 
		let ul = $('<ul/>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({
				id : x.id+'-'+i
			}).appendTo(ul);
		}
		return ul;
	},
	input : x=>{ // id,val
		let p = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.div__val
						+'</span>').appendTo(res);
		/*ui.span({
			id: "basic-addon1",
			value: x.div__val
		}).appendTo($('#input-group-prepend'));*/
		$("<input/>").attr({
			id : x.input__id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(res);
		return res;
		
		
		

	},
	label : x=>{
		return $('<label/>')
				.attr('for',x.id).text(x.txt)
	},
	/*
	<div class="input-group mb-3">
	  <div class="input-group-prepend">
	    <span class="input-group-text" id="basic-addon1">@</span>
	  </div>
	  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
	</div>
	
	*/
	input2 : x =>{
		let p = ui.div({}).addClass("input-group mb-3");
		ui.div({id:'test'}).addClass("input-group-prepend").appendTo(p);
		$('#test').html('  <span class="input-group-text" id="basic-addon1">@</span> ');
		$("<input/>").attr({
			id : x.input__id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(res);
		return p;
	},
	inputGroupPrepend : x =>{
		return 	'<div class="input-group mb-3">'
		  +'<div class="input-group-prepend">'
		  +'  <span class="input-group-text" id="basic-addon1">@</span> '
		  +'</div>'
		  +'<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
		+'</div>'
	}
}
/*
 * 
let ul = $('<ul/>');
		 // x 는 json 의 array
		$( "div" ).each(function( index, element ) {
		    // element == this
		    $( element ).css( "backgroundColor", "yellow" );
		    if ( $( this ).is( "#stop" ) ) {
		      $( "span" ).text( "Stopped at div index #" + index );
		      return false;
		    }
       $('<ul/>').each(function(3,$('<li/>')){
				$(this).appendTo(ul);
			}
   		);
		ul
		.attr({id : x.id})
        .addClass('list-group');
		return ul;
 * 
 */