const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'


client.once('ready', () => {
    console.log('Aldo is here.');


});

client.on('message', message =>{

    function retardify()
    {
        str = message.content

        x = 0
        for(x = 0; x < str.length; x++)
        {
            testStr = str.charAt(x)
            testStr2 = testStr.toUpperCase()
            testStr3 = testStr.toLowerCase()
            
            let number = Math.floor(Math.random() * 2) 
            if(number < 1)
            {
                str = str.replace(testStr, testStr2 )
            }
            else if(number > 1)
            {
                str = str.replace(testStr, testStr3)
            }
            
        }
        message.channel.send(str)
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
    if(message.content.toLowerCase() === 'pog')
        message.channel.send('champ')
    if(message.content.toLowerCase() === 'are you horny?')
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756733951715836014/image0.png')
    if(message.content.toLowerCase() === 'yo whos sus?')
        message.channel.send('idk man <@434877530915471372> kinda sus ngl bro')
    if(message.content.toLowerCase() === 'wakeupsuejin')
    {
        x = 0;
        y = 20;
        while(x < y)
        {
            message.channel.send('<@805688974659420180>')
            x = x + 1;
        }
    }
    if(message.content.toLowerCase() === 'spam')
    {
        if(message.author.id == '282698201289588736')
        {
            message.content.toLowerCase() === 'spam'
            x = 0;
            y = 5;
            while(x < y)
            {
                message.channel.send('<@639204215113252914>')
                x = x + 1;
            }
        }
        else
        {
            message.channel.send('NICE TRY LMAO')
        }
    }
    if(message.content.toLowerCase() === 'murder')
    {
        if(message.author.id == '282698201289588736')
        {
            message.channel.bulkDelete(10);
        }
        else
        {
            message.channel.send('nice try dumbass lmao')
        }
    }
    if(message.content.toLowerCase() === 'rps')
    {
        message.channel.send('rock paper or scissors bitch')
        userStr = message.content
        brah = userStr.toLowerCase

        let number = Math.floor(Math.random() * 3)
        if(brah === rock)
        {
            message.channel.send('i pick paper get fked')
        }
        if(brah === paper)
        {
            message.channel.send('i pick scissors get fked')
        }
        if(brah === scissors)
        {
            message.channel.send('i pick rock get fked')
        }
    }
    if(message.content.toLowerCase() === 'disconnect')
    {
        if(message.author.id === '282698201289588736')
        {
            member.setVoiceChannel("kevin-doesn't-like-you")
        }
    }
    if(message.author.id == '372532589791281166')
    {   
        let number = Math.floor(Math.random() * 5) 
        if(number < 1)
        {
            retardify();
        }
    }
    if(message.author.id == '384896691196919808')
        message.channel.send('stfu jeryl')

    if(message.author.id == '604010864366059550')
    {
        let number = Math.floor(Math.random() * 10) 
        if(number == 1)
        message.channel.send('stfu gayson')
    }
    if(message.author.id == '689591603765182532'){
        let number = Math.floor(Math.random() * 6) 
        if(number == 1)
            message.channel.send('*farts*');
        if(number == 2)
            message.channel.send('*burps*');
    }
    /*if(message.author.id == '282698201289588736')
    {
        if(message.content.toLowerCase === 'nospeakkristy')
        {
            pog = true;
            while(pog = true)
            {
                if(message.author.id == '693656387607068673')
                {
                    message.delete();
                    message.channel.send('lol nt dumb bitch');
                    if(message.content.toLowerCase === 'speakbitch')
                    {
                        pog = false;
                    }
                }
            }
        }   
    }
    */
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'list'){
        message.channel.send('```Dab Memes\n!debby\n!sarah\n!nein\n!john\n!kevin\n!alex\n!sanskevin\n!sansalex\n!avatar\n!amongus\n!suli\n!jordan\n!jake\n!cheese\n!cockandmen\n!waterunicorn\n!chikadance\n!angel\n!noracism\n!joash\n!spooky\n!snake\n!shrek\n//////////////////////\nKevin Torture\nspam\nmurder\n!mute **in progress**```');
    }
    else if(command === 'debby'){
        message.channel.send('is now a very big simp');
    } else if (command == 'sarah'){
        message.channel.send('dead to me');
    } else if (command == 'nein'){
        message.channel.send('DU BIST HASSLICH, SCHWUL BLYAT');
    } else if (command == 'john'){
        message.channel.send('is slight gay but only on saturdays');
    } else if (command == 'kevin'){
        message.channel.send('https://cdn.discordapp.com/attachments/808343798118875136/816021208000364554/4zycat.jpg');
    } else if (command == 'alex'){
        message.channel.send('let jurak beat him in cello in 6th grade xd LOOOOL');
    } else if (command == 'takeL'){
        message.channel.send('L');
    } else if (command == 'sansalex'){
        message.channel.send('https://cdn.discordapp.com/attachments/356221283983294465/744080903462060062/alex_sans_but_transparent.png');
    } else if (command == 'avatar'){
        message.channel.send('Long ago, the four nations lived together in harmony. Then, everything changed when the Smelly Fart Nation attacked. Only the Quirker, master of all four farts, could stop them, but when the world needed her most, she vanished. A hundred years passed and my brother and I discovered the new Quirker, a Quirky Burper named Mirfanda.And although her fartbending skills are great, she has a lot to learn before shes ready to fart on anyone. But I believe Mirfanda can spread the farts.');
    } else if (command == 'amongus'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756731709000777808/image0.png');
    } else if (command == 'suli'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756733093385207818/image0.jpg');
    }
     else if (command == 'jordan'){
        message.channel.send('https://pastebin.com/J1zbw7vS');
    } else if (command == 'jake'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756734995585957968/33263920-8739979-image-a-26_1600274731664.png');
    } else if (command == 'cheese'){
        let cheese = Math.floor(Math.random() * 5) 
        if(cheese == 1)
            message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756736088269389924/Swiss-Cheese.png');
        if(cheese == 2)
            message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756737794239627274/90.png');
        if(cheese == 3)
            message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756737968773005322/cheddar-cheese-crop-3fdf5ad3229e4748bbc0b8acdc442dcd.png');
        if(cheese == 4)
            message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756738059185291334/9k.png');
    } else if (command == 'cockandmen'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756736597692776448/image0.jpg');
    } else if (command == 'waterunicorn'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756739288124620860/2Q.png');
    } else if (command == 'chikadance'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756588217855246356/2020-09-18_14-49-51.mp4');
    } else if (command == 'angel'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756741159514275880/Im_wit_da_gang_wit_da_mob_what_was_u_thinking.mp4');
    } else if (command == 'noracism'){
        message.channel.send('https://cdn.discordapp.com/attachments/688142646207578208/756741302317482074/u_didnt_tell_me_u_was_wavy.mp4');
    } else if (command == 'joash'){
        message.channel.send('https://www.youtube.com/watch?v=PsBPPkt0Rbg');
    } else if (command == 'spooky'){
        message.channel.send('https://cdn.discordapp.com/attachments/657041225328623626/795682838350528522/Joshs_shadow.png');
    } else if (command == 'murder'){
        message.channel.send('They got your ass not once \nhttps://youtu.be/JnAExSOjEbA\n but TWICE\nhttps://streamable.com/fwj2u0\n AND IN 4K')
    } else if (command == 'cap'){
        let random = Math.floor(Math.random() * 2)
        if (random == 1)
        {
            message.channel.send('NOT CAP')
        }
        if (random == 0)
        {
            message.channel.send('CAP')
        }
    } else if (command == 'shrek'){
        message.channel.send('⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀ ⣀⣀⣤⣤⣤⣀⡀\n⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀\n⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆\n⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆\n⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆\n⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠸⣼⡿\n⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉\n⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇\n⠀⠀ ⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠇\n⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇\n⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃');
    } else if (command == 'monkeymonday'){
        message.channel.send('https://cdn.discordapp.com/attachments/767916817795514390/816022078628823060/video0.mp4')
    }



});

client.login(process.env.token);