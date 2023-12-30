const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000").bold('[ Error ] »') + data);
     break;
		default:			        
      var job = ["#FFA500","#FFFF00","#00FF00","#0000FF", "#4B0082","#A020F0"];
    var random = 
job[Math.floor(Math.random() * job.length)]
                        console.log(chalk.bold.hex(random).bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {   
		case "success":
			console.log(chalk.bold.hex("#00FF00").bold('[Excikel] ❯ ') + data);
			break;
		case "warn":
			console.log(chalk.bold.hex("#FF0000").bold('[Excikel] ❯ ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000").bold('[Excikel] ❯ ') + data);
			break;
		default:
      var job = ["#FFA500","#FFFF00","#00FF00","#0000FF", "#4B0082","#A020F0"];
    var random = 
job[Math.floor(Math.random() * job.length)]
			console.log(chalk.bold.hex(random).bold(`[Excikel] ❯ `) + data);
			break;
	}
                  }