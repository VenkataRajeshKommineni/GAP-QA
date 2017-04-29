exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/step_definitions/place_order_spec.js'],
  
  capabilities:{
	  browserName: 'chrome'
  }
  
};
