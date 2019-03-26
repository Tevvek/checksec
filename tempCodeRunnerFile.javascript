function messageInstant() {
    console.log('this is instantly!');
}
function messageAfter2Seconds() {
    setTimeout(() => {
        console.log('it\'s been two seconds already!');
    }, 2000);
}
async function main() {
    messageAfter2Seconds();
    await messageInstant();
    console.log('the code is finished!');
}

main();