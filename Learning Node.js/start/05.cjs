process.stdout.write("Hello \n \n")

const question = [
    "What is your name",
    "What are you rather doing",
    "What is your preffered programming language"
]

const answer = [

]

function ask(i) {
process.stdout.write(`\n\n\n ${question[i]}`);
process.stdout.write(` > `);
} 

ask(answer.length)

process.stdin.on("data", function (data){
    process.stdout.write(data.toString().trim());

});

ask(answer.length);