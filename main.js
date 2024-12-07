                    /*           بسم الله الرحمن الرحيم                 */


// mustafa khalid abdelmonem 
// discord user_name 550258
// 01004643861
let npegpt=" 01004643861 01256814720 +0201003162986 01133498621  0121233478398 01528642891 01005533559866 01656466 01788888888 5555555 66679 00000000 50df1111 #fdfdd145";
let mails =" mo@gmail.com xxxxx@gmail.com aagmail.com mos52@yahoo.com yaa@free.fr #1kopsl@gmail.com  aubm sasa@.....com ";
let regex1=/(\+0201|01)?\d{9}[0125]/g;
let regex2=/\w+@\w+.\w+/ig;
console.log(npegpt.match(regex1));
console.log(regex1.test(npegpt));
console.log(/(\+0201|01)?\d{9}[0125]/.test("01256814720"));// another solution depend on one case 
console.log(/(\+0201|01)?\d{9}[0125]/.test("01788888888"));// another solution depend on one case 
console.log(mails.match(regex2));
console.log(regex2.test(mails));
console.log(/\w+@\w+.\w+/i.test("mos52@yahoo.com"));// another solution depend on one case 
console.log(/\w+@\w+.\w+/i.test("aagmail.com"));// another solution depend on one case 
console.log(/([a-zA-Z]|[0-9])@[a-z].[a-z]/.test("1aa@gmail.com"));// another solution depend on one case  
