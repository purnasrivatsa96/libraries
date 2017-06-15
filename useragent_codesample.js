var useragent = require('useragent');
useragent(true);
var agent = useragent.parse(req.headers['user-agent']);
 
// example for parsing both the useragent header and a optional js useragent 
var agent2 = useragent.parse(req.headers['user-agent'], req.query.jsuseragent);

var agent = useragent.lookup(req.headers['user-agent']);






//useragent.is returns a object with potential matched browser names

useragent.is(req.headers['user-agent']).firefox // true 
useragent.is(req.headers['user-agent']).safari // false 
var ua = useragent.is(req.headers['user-agent'])
 
// the object 
{
  version: '3'
  webkit: false
  opera: false
  ie: false
  chrome: false
  safari: false
  mobile_safari: false
  firefox: true
  mozilla: true
  android: false
}


/*Agent.toAgent();
Returns the family and version number concatinated in a nice human readable string.*/
var agent = useragent.parse(req.headers['user-agent']);
agent.toAgent(); // 'Chrome 15.0.874' 



/*Device.toVersion();
Generates a stringified version of device's version;*/
var agent = useragent.parse(req.headers['user-agent']);
agent.device.toVersion(); // '' , no version found but could also be '0.0.0' 
