const DEBUG = true;
const BASEDIR_DEV = "https://jsonplaceholder.typicode.com";
const BASEDIR_PRO = "https://jsonplaceholder.typicode.com";
const BASEDIR = DEBUG ? BASEDIR_DEV : BASEDIR_PRO;


var config = {
	debug: DEBUG,
	basedir: BASEDIR,
}

export var config;
