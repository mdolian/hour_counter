$(function() {
  jQuery(document).ready(function($) {
		$('#start_date').datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true	
		});
	
		$('#start_time').timeEntry({show24Hours: true});
	
		$('#end_date').datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true
		});
		
		$('#end_time').timeEntry({show24Hours: true});
				
  });	
});		