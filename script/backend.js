// JavaScript Document
 $(function(){
	$("#btnSubmitTask").click(function()
	{
		//may be important
		/**var num_list = $("ul#list_task li").length;**/
		var num_list = $("ul#list_task").children().length;
		$("<li id='listitem_" + num_list + "' class='clearfix'><div class='listitem_taskNum'>" + num_list + "</div><div class='listitem_taskName'>" + $("#txtTask").val() + "</div><div class='listitem_taskActions'><ul id='actionsList'><li class='edit'><a id='edit_" + num_list + "' href='#' onClick='editThis(this.id)'></a></li><li class='delete'><a id='delete_" + num_list + "' href='#' onClick='deleteThis(this.id);'></a></li></ul></div></li>").appendTo("#list_task");
	});
	$("#btnResetTask").click(function() {
        $("#txtTask").val('');
    });
			
}); 

function deleteThis(theid)
{
	 var reg = /\d/;
	 var delListNum = reg.exec(theid);
	 $("#listitem_" +delListNum).remove();
	 console.log("Task " + delListNum + " deleted!");
}

function editThis(theid)
{
	var reg = /\d/;
	var delListNum = reg.exec(theid);
	var curText = $("#listitem_" +delListNum +" > :nth-child(2)").html();
	$("#listitem_" +delListNum +" > :nth-child(2)").html("<input type='text' id='editedText' onkeydown='if(event.keyCode==13) {submitEdit(this.id);}' height=90% value='" +curText+ "' />");
	$("#editedText").addClass("ui-corner-all");
	console.log("I am currently at listitem_" + delListNum +" and the text says: " +curText);
	$("#listitem_" +delListNum).find("li.edit").replaceWith("<li class='submit'><a href='#' id='newEdit_"+delListNum+ "' onClick='submitEdit(this.id)'></a></li>");
}

function submitEdit(theid)
{
	var reg = /\d/;
	var delListNum = reg.exec(theid);
	var curText = $("#listitem_" +delListNum +" > :nth-child(2)").find("input").val();
	console.log(curText);
	$("#listitem_" +delListNum +" > :nth-child(2)").replaceWith("<div class='listitem_taskName'>" + curText + "</div>");
	$("#listitem_" +delListNum).find("li.submit").replaceWith("<li class='edit'><a href='#' id='edit_"+delListNum+ "' onClick='editThis(this.id)'></a></li>");
}