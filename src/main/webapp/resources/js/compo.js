"use strict";
var ui={
	div : x=>{return $('<div/>').attr(x);},
	span : x=>{return $('<span/>').attr(x);},
	anchor : x=>{  // ui.anchor({id:'',txt:''});
		return $('<a/>').attr({href : '#',id:x.id}).html(x.txt);},
	ul : x=>{  // ui.ul({id:'',len:''});
		let y = $('<ul/>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({
				id : x.id+'-'+i
			}).appendTo(y);
		}
		return y;
	},
	input : x=>{ // id,val
		let y = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.txt
						+'</span>').appendTo(y);
		$("<input/>").attr({
			id : x.id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(y);
		return y;
	},
	label : x=>{
		return $('<label/>')
				.attr('for',x.id).text(x.txt)
	},
	btn : x=>{
/***************
<button type="button" 
	class="btn btn-primary">
	Primary
</button>
primary(blue)
secondary(gray)
success(green)
danger(red)
warning(yellow)
info(dark green)
dark(black)
light(white)
link(trans)
***************/
		return $('<button/>').attr('type','button')
				.addClass('btn btn-'+x.clazz)
				.html(x.txt);
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