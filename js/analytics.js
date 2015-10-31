var formData = {};
var analytics = (function(){
	$(document).ajaxComplete(function(event,xhr,options){
		console.log(xhr);
		console.log(event);
		var values = options.data;
		console.log(values);
		$(values).each(function(){
			formData[this.name] = $(this).val();
		});
	});
	$("input[type='button']").add("button[type='submit']").click(eventTrigger);
	var me = this;
	//me.initialise();
	function initialise(){
		$("input[type='button']").add("button[type='submit']").click(eventTrigger);
		console.log('initialise');
	}
	function eventTrigger(){
		var element = findParentFrom(this);
		console.log(this);
	}
	function findParentFrom(element){
		var formObj = {};
		if(element.form){
			formObj.formElement = element.form;
		}
		else{
			
		}
		console.log(formObj.formElement);
	}
	console.log('after function');
	return{
		initialise: function(){
			initialise();
		},
		eventTrigger: function(){
			eventTrigger();
		},
		findParentFrom: function(){
			findParentFrom();
		}
	};
})();