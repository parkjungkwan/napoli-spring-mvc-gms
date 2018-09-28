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
	},
	table : x=>{
/*
<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
    <p>...</p>
  </div>
  <!-- Table -->
  <table class="table">
    ...
  </table>
</div>
type, id, head,desc, list

		 * */
		let d = $('<div class="panel panel-'+x.type+'"/>');
		let ph = $('<div class="panel-heading"/>');
		let pb = $('<div class="panel-body"/>');
		$('<p/>').html(x.body).appendTo(pb);
		let t = $('<table id="'+x.id+'"/>').addClass(x.clazz);
		let thead = $('<thead/>');
	    let tr = $('<tr/>');
	    $.each(x.list,(i,j)=>{
	    	$('<th/>')
	    	.html(j)
	    	.appendTo(tr);
	    });
	    tr.appendTo(thead);
	    thead.appendTo(t);
	    $('<tbody/>').appendTo(t);
	    ph.appendTo(d);
	    pb.appendTo(d);
	    t.appendTo(d);
		return d;
	},
	page : x=>{
		return $('<ul class="pagination"/>')
			.appendTo($('<nav/>')
			.attr('aria-label','...'));
	}
	/*
	<nav aria-label="...">
	  <ul class="pagination">
	    <li class="page-item disabled">
	      <span class="page-link">Previous</span>
	    </li>
	    <li class="page-item"><span class="page-link" href="#">1</span></li>
	    <li class="page-item active">
	      <span class="page-link">
	        2
	        <span class="sr-only">(current)</span>
	      </span>
	    </li>
	    <li class="page-item"><span class="page-link" href="#">3</span></li>
	    <li class="page-item">
	      <span class="page-link" href="#">Next</span>
	    </li>
	  </ul>
	</nav>
	*/	
}
















