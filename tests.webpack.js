/**
 * Created by deepanshu on 4/21/17.
 */
var context = require.context('./test', true, /-test\.js$/);
//make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
/*
steps  to start and run testCases:
1)sudo karma start :- it enable port on which we can run iur test case
2) sudo karma run -- --grep=testCaseName -- to run individual test case
*/