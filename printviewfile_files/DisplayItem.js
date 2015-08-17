var DisplayItem = Class.create({
  initialize: function(spec) {
	  
	  this.uniqueID = spec.uniqueID;
	  this.abstractTrigger = $("abstractTrigger_"+this.uniqueID);
	  
	  if (this.abstractTrigger) {
		  this.abstractTrigger.observe('click', this.toggleAbstract.bindAsEventListener(this));
	  }
	  

  },
  
  toggleAbstract: function(){
	 
  	var section = $("abstractDiv_"+this.uniqueID);
  	
  		if(section){
	    	if(section.getStyle('display') == 'block'){
	    		section.hide();
	    		this.abstractTrigger.removeClassName("indicator_collapse").addClassName("indicator_expand");
	    		$("abstractHeader").addClassName("collapsed");
	    	} else {
	    		section.show();
	    		this.abstractTrigger.removeClassName("indicator_expand").addClassName("indicator_collapse");
	    		$("abstractHeader").removeClassName("collapsed");
	    	}
  		}
  	}

});

var displayItem;
Tapestry.Initializer.DisplayItem = function(spec) { 
	displayItem = new DisplayItem(spec); 
};
