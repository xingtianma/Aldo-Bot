const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'

client.once('ready', () => {
    console.log('Aldo is here.');
});

client.on('message', message =>{

    function retardify()
    {
        str = str.replace('a', 'A');
        str = str.replace('c', 'C');
        str = str.replace('e', 'E');
        str = str.replace('d', 'D');
        str = str.replace('f', 'F');
        str = str.replace('h', 'H');
        str = str.replace('g', 'G');
        str = str.replace('i', 'I');
        str = str.replace('l', 'L');
        str = str.replace('o', 'O');
        str = str.replace('p', 'P');
        str = str.replace('q', 'Q');
        str = str.replace('r', 'R');
        str = str.replace('t', 'T');
    }
    
    if(message.content.toLowerCase() === 'kevin')
        message.channel.send('stop pinging me please thanks <@282698201289588736>')    
    if(message.content.toLowerCase() === 'debby please shut up')
        message.channel.send('yea be quiet honestly <@372532589791281166>')
    if(message.content.toLowerCase() === 'small guy')
        message.channel.send('who? <@239449306086506496> or <@255051461182881794>')
    if(message.content.toLowerCase() === 'who farted')
        message.channel.send('*sighs* was it you again <@689591603765182532>?')
    if(message.content.toLowerCase() === 'who')
        message.channel.send('asked')
        
    if(message.author.id == '282698201289588736'){
        let number = Math.floor(Math.random() * 3) 
        if(number == 1)
            message.channel.send('*farts*');
        if(number == 2)
            message.channel.send('*burps*');
    }
    /*
    if(message.author.id == '239449306086506496'){
        
        if(message.content )
        var string = message.content
        message.channel.send(string.toUpperCase())

        message.channel.send('yo why u screaming alex?')
    } 
    */  
    if(message.author.id == '372532589791281166'){  
        var str = message.content

        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()
        retardify()

        message.channel.send(str)
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'debby'){
        message.channel.send('is el mucho stupido!!');
    } else if (command == 'sarah'){
        message.channel.send('farts a lot hehe, so quirky!!');
    } else if (command == 'nein'){
        message.channel.send('DU BIST HASSLICH, SCHWUL BLYAT');
    } else if (command == 'john'){
        message.channel.send('is slight gay but only on saturdays');
    } else if (command == 'kevin'){
        message.channel.send('is a fucking simp LMAOOO');
    } else if (command == 'alex'){
        message.channel.send('let jurak beat him in cello in 6th grade xd LOOOOL');
    } else if (command == 'joke'){
        message.channel.send('Woman');
    } else if (command == 'bigger joke'){
        message.channel.send('SARAH LMAOOO');
    } else if (command == 'largest joke'){
        message.channel.send('DEBBYS ATTEMPT AT BEING FUNNY LMAOOFNIODAKJDJAKDBA');
    } else if (command == 'avatar'){
        message.channel.send('Long ago, the four nations lived together in harmony. Then, everything changed when the Smelly Fart Nation attacked. Only the Quirker, master of all four farts, could stop them, but when the world needed her most, she vanished. A hundred years passed and my brother and I discovered the new Quirker, a Quirky Burper named Mirfanda.And although her fartbending skills are great, she has a lot to learn before shes ready to fart on anyone. But I believe Mirfanda can spread the farts.');
    } else if (command == 'beauty'){
        message.channel.send('https://cdn.discordapp.com/attachments/720686861852475422/743366389951103017/sarah.png');
    }
        



});

client.login(process.env.token);