Functional Javascript Money Library
===================================

This is a javascript library for working with money.  It handles dollar-to-cent conversion, cent-to-dollar conversion, and addition of dollar formatted strings.  It does not handle fractional cents.  If a fractional cent is entered, the value is rounded to the nearest cent.

centToDollar(x) 
// Accepts an integer and returns a dollar formatted string 
// example: centToDollar(10); 
// returns: $0.10 

dollarToCent (x) 
// Accepts a dollar formatted string and returns an integer representing cents 
// example: dollarToCent('$11.52'); 
// returns: 1152 

addDollar (x1, x2, x3, x4... ) 
// Accept any number of dollar formatted strings and returns the total as a dollar formatted string 
// example: addDollar('1.25','1.25','.50','$3.00'); 
// returns: $6.00 

subtractDollar (x1, x2, x3, x4... ) 
// Accept any number of dollar formatted strings and returns the difference starting from the first element 
// example: subtractDollar('3','1','1'); 
// returns: $1.00 