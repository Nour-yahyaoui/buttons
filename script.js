// script of buttons! //


document.body.style.margin="0";
document.body.style.overflowX="hidden";

function container() {
    const cont = document.createElement('div');
    cont.className = 'container';
    cont.id="cont";
    cont.style.background="#f4f4f4";
    cont.style.border="none";
    cont.style.maxWidth="1000px";
    cont.style.margin="auto";
    cont.style.width="100%";
    cont.style.height="auto";
    cont.style.paddingBottom="100px"
    document.body.appendChild(cont);
};

function class1() {
    const classer = document.createElement('div');
    classer.className = 'classer';
    classer.id = 'classer';
    button1 = document.createElement('button');
    button1.textContent="button";
    button2 = document.createElement('button');
    button2.textContent="button";
    button3 = document.createElement('button');
    button3.textContent="button";
    button4 = document.createElement('button');
    button4.textContent="button";
    button5 = document.createElement('button');
    button5.textContent="button";
    button6 = document.createElement('button');
    button6.textContent="button";
    
    classer.appendChild(button1);
    classer.appendChild(button2);
    classer.appendChild(button3);
    classer.appendChild(button4);
    classer.appendChild(button5);
    classer.appendChild(button6);
    

    button1.style.background="#111"
     button2.style.background="#339"
      button3.style.background="#dc3545"
      button4.style.background="#339933"
     button5.style.background="#222327"
    button6.style.background="#ff77ff"
   

    button3.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width:180px;
    height:50px;
    border: solid 1px;
    border-radius:6px;
    font-weight: 700;
    color: #eee;
    background-color: #dc3545;
}
        `;
        console.log(text)
        navigator.clipboard.writeText(text).then(() => {
            console.log("success");
        }).catch((e) => {
            console.error('Error copying CSS code to clipboard:', e);
        });
    })
    button2.addEventListener('click', () => {
        const text = `
        /* html <button> button </button> */
        
button {
    width:180px;
    height:50px;
    border: solid 1px;
    border-radius:6px;
    font-weight: 700;
    color: #eee;
    background-color: #339;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button1.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width:180px;
    height:50px;
    border: solid 1px;
    border-radius:6px;
    font-weight: 700;
    color: #eee;
    background-color: #111;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button4.addEventListener('click', () => {
        const text = `
        /* html <button> button </button> */
button {
    width:180px;
    height:50px;
    border: solid 1px;
    border-radius:6px;
    font-weight: 700;
    color: #eee;
    background-color: #339933;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button5.addEventListener('click', () => {
        const text = `
        /* html <button> button </button> */
        
button {
    width:180px;
    height:50px;
    border: solid 1px;
    border-radius:6px;
    font-weight: 700;
    color: #eee;
    background-color: #222327;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button6.addEventListener('click', () => {
        const text = `
        /* html <button> button </button> */
button {
    width:180px;
    height:50px;
    border: solid 1px;
    border-radius:6px;
    font-weight: 700;
    color: #eee;
    background-color: #ff77ff;
}
        `;
        navigator.clipboard.writeText(text)
    })
    document.getElementById('cont').appendChild(classer)
}

function classerStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .classer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            width: 60%;
            margin:auto;
            padding-top: 80px;
            gap: 100px;
            justify-content: space-evenly;
            align-items: center;
        }
        
        .classer button {
            width:180px;
            height:50px;
            border: solid 1px;
            border-radius:6px;
            font-weight: 700;
            color: #eee;

        }

        .classer button:hover, .classer button:focus {
            opacity: .9;
        }
    `;

    const head = document.head;

    head.appendChild(style)
}

classerStyles()

function nav() {
    let nav = document.createElement('nav');
    let bar =  document.createElement('ul');
    let style = document.createElement('style');
    var link1 = document.createElement('a')
    var link2 = document.createElement('a')
    var link3 = document.createElement('a')

    link1.textContent="Create"
    link2.textContent="Ready"
    link3.textContent="Colors"

    link1.id = 'link1'
    link2.id = 'link2'
    link3.id = 'link3'

    style.textContent = `
        nav {
            max-width:980px;
            margin:0 auto ;
            background: #123456;
            padding:10px;
        }
        ul {
            color:white;
            display: flex;
            justify-content:space-evenly; 
            max-width:400px;
            margin-bottom:-100px;
            transform: translate(-20px, 0px);
        }
        
        ul a {
            list-style: none;
            font-weight:750;
            font-size:18px;
            cursor:pointer;
            color: rbg(200, 200, 200);
            text-decoration: underline;
            transition: all .4s;
        }
        ul a:hover {
            color: tan;
        }
        
        `;
    bar.appendChild(link1)
    bar.appendChild(link2)
    bar.appendChild(link3)
    nav.appendChild(bar);
    document.head.appendChild(style)
    document.body.appendChild(nav);
}

nav()



function main() {
    const header = document.createElement('h1');
    header.textContent="welcome on the ready class";
    header.style.color="white";
    header.style.margin="0";
    const headStyle = document.createElement('style');
    let p = document.createElement('p');
    p.textContent="click on the button to copy code!";
    headStyle.textContent=`
    h1 {
        font-family: monospace;
    }
    p {
        color:rgb(200, 200, 200);
        font-size: 17px;
        font-family: arial;
        margin-top: 40px;
        font-weight: 750;
        text-transform: uppercase;
    }
    `;
    document.head.appendChild(headStyle);
    hero = document.createElement('div');
    hero.className = 'hero';
    hero.style.background="#123456";
    hero.style.padding="100px 0px";
    hero.style.textAlign="center";
    hero.style.width="100%";
    hero.style.height="auto";
    
    hero.appendChild(header)
    p.id = 'paraa'
    header.id = 'headd'
    hero.appendChild(p)

    document.getElementById('cont').appendChild(hero);

}

function classer2Styles() {
    let style = document.createElement('style')
    style.textContent = `
        .classer2 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            border-top: solid 1px gray;
            margin-top: 100px !important;
            width: 60%;
            margin:auto;
            padding-top: 80px;
            gap: 100px;
            justify-content: space-evenly;
            align-items: center;
        }
            .classer2 button {
                width: 100px;
                background-color: #111;
                height: 100px;
                border:solid 1px transparent !important ;
                border-radius: 50%;
                color: white;
                cursor: pointer;
                font-size: 40px;
            }
    `;
    document.head.appendChild(style);;
}

classer2Styles()

function class2() {
    const classer2 = document.createElement('div');
    classer2.className = 'classer2';
    classer2.id = 'classer2';
    button1 = document.createElement('button');
    button1.textContent='+';
    button2 = document.createElement('button');
    button2.textContent='+';
    button3 = document.createElement('button');
    button3.textContent='+';
    button4 = document.createElement('button');
    button4.textContent='+';
    button5 = document.createElement('button');
    button5.textContent='+';
    button6 = document.createElement('button');
    button6.textContent='+';
    
    classer2.appendChild(button1);
    classer2.appendChild(button2);
    classer2.appendChild(button3);
    classer2.appendChild(button4);
    classer2.appendChild(button5);
    classer2.appendChild(button6);
    

    button1.style.background="blue"
     button2.style.background="#dc3545"
      button3.style.background=""
      button4.style.background="#339"
     button5.style.background="green"
    button6.style.background="blueviolet"

    button3.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: #111;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        console.log(text)
        navigator.clipboard.writeText(text).then(() => {
            console.log("success");
        }).catch((e) => {
            console.error('Error copying CSS code to clipboard:', e);
        });
    })
    button2.addEventListener('click', () => {
        const text = `
        /* html <button> button </button> */

button {
    width: 100px;
    background-color: #dc3545;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button1.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: blue;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button4.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: #339;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button5.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: green;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button6.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: blueviolet;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    document.getElementById('cont').appendChild(classer2)
}

function classer3Styles() {
    let style = document.createElement('style')
    style.textContent = `
        .classer3 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            border-top: solid 1px gray;
            margin-top: 100px !important;
            width: 60%;
            margin:auto;
            padding-top: 80px;
            gap: 100px;
            justify-content: space-evenly;
            align-items: center;
        }
            .classer3 button {
                width: 180px;
                background-color: #111;
                height: 60px;
                border:solid 1px transparent !important ;
                border-radius: 30px;
                color: white;
                cursor: pointer;
                font-size: 17px;
            }
    `;
    document.head.appendChild(style);;
}
classer3Styles()

function class3() {
    const classer3 = document.createElement('div');
    classer3.className = 'classer3';
    classer3.id = 'classer3';
    button1 = document.createElement('button');
    button1.textContent='button';
    button2 = document.createElement('button');
    button2.textContent='button';
    button3 = document.createElement('button');
    button3.textContent='button';
    button4 = document.createElement('button');
    button4.textContent='button';
    button5 = document.createElement('button');
    button5.textContent='button';
    button6 = document.createElement('button');
    button6.textContent='button';
    
    classer3.appendChild(button1);
    classer3.appendChild(button2);
    classer3.appendChild(button3);
    classer3.appendChild(button4);
    classer3.appendChild(button5);
    classer3.appendChild(button6);
    
    
    button1.style.background="tomato"
     button2.style.background="#11111a"
      button3.style.background="#a1f"
      button4.style.background="#339"
     button5.style.background="#dc3545"
    button6.style.background="#59ce8f"
    button3.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 180px;
    height: 60px;
    border:solid 1px transparent !important ;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: #a1f;
}
        `;
        console.log(text)
        navigator.clipboard.writeText(text).then(() => {
            console.log("success");
        }).catch((e) => {
            console.error('Error copying CSS code to clipboard:', e);
        });
    })
    button2.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 180px;
    height: 60px;
    border:solid 1px transparent !important ;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: #111;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button1.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 180px;
    height: 60px;
    border:solid 1px transparent !important ;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: tomato;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button4.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 180px;
    height: 60px;
    border:solid 1px transparent !important ;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: #339;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button5.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 180px;
    height: 60px;
    border:solid 1px transparent !important ;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: #dc3545;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button6.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 180px;
    height: 60px;
    border:solid 1px transparent !important ;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: #59ce8f;
}
        `;
        navigator.clipboard.writeText(text)
    })

    document.getElementById('cont').appendChild(classer3)
}

function classer4Styles() {
    let style = document.createElement('style')
    style.textContent = `
        .classer4 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            border-top: solid 1px gray;
            margin-top: 100px !important;
            width: 60%;
            margin:auto;
            padding-top: 80px;
            gap: 100px;
            justify-content: space-evenly;
            align-items: center;
        }
            .classer4 button {
                width: 100px;
                background-color: #111;
                height: 100px;
                border:solid 1px transparent !important ;
                border-radius: 20px;
                color: white;
                cursor: pointer;
                font-size: 40px;
            }
    `;
    document.head.appendChild(style);;
}
classer4Styles()

function class4() {
    const classer4 = document.createElement('div');
    classer4.className = 'classer4';
    classer4.id = 'classer4';
    button1 = document.createElement('button');
    button1.textContent='+';
    button2 = document.createElement('button');
    button2.textContent='+';
    button3 = document.createElement('button');
    button3.textContent='+';
    button4 = document.createElement('button');
    button4.textContent='+';
    button5 = document.createElement('button');
    button5.textContent='+';
    button6 = document.createElement('button');
    button6.textContent='+';
    
    classer4.appendChild(button1);
    classer4.appendChild(button2);
    classer4.appendChild(button3);
    classer4.appendChild(button4);
    classer4.appendChild(button5);
    classer4.appendChild(button6);
    

    button1.style.background="blue"
     button2.style.background="#dc3545"
      button3.style.background=""
      button4.style.background="#339"
     button5.style.background="green"
    button6.style.background="blueviolet"

    button3.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: #111;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        console.log(text)
        navigator.clipboard.writeText(text).then(() => {
            console.log("success");
        }).catch((e) => {
            console.error('Error copying CSS code to clipboard:', e);
        });
    })
    button2.addEventListener('click', () => {
        const text = `
        /* html <button> button </button> */

button {
    width: 100px;
    background-color: #dc3545;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button1.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: blue;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button4.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: #339;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button5.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: green;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    button6.addEventListener('click', () => {
        const text = `
         /* html <button> button </button> */
button {
    width: 100px;
    background-color: blueviolet;
    height: 100px;
    border:solid 1px transparent !important ;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 40px;
}
        `;
        navigator.clipboard.writeText(text)
    })
    document.getElementById('cont').appendChild(classer4)
}

function footerStyles() {
    const style = document.createElement('style')
    style.textContent = `
    footer {
        width: 100%;
        height: 40vh;
        background: #123456;
        border:none;
        margin-top: 00px;
        transform: translate(0px, 200px);
    }
        span {
            margin-top: -30px;
        }
    `;
    document.head.appendChild(style)
}

footerStyles()

function footer() {
    const footer = document.createElement('footer');
    const header = document.createElement('h3');
    const ul = document.createElement('ul')

    document.getElementById('cont').appendChild(footer)
}



function content() {

    let l1 = document.getElementById('link1');
    let l2 = document.getElementById('link2');
    let l3 = document.getElementById('link3');

    l1.addEventListener('click', () => {
        document.getElementById('paraa').style.animation = "none"
        document.getElementById('headd').style.animation = "none"
        document.getElementById('inp').style.animation = "none"
        l1.style.animation = "none"
        l2.style.animation = 'none'
        l3.style.animation = "none"
        setTimeout(() => {
            document.getElementById('classer').style.animation = "1s In"
            document.getElementById('classer2').style.animation = "1s In"
            document.getElementById('classer3').style.animation = "1s In"
            l1.style.animation = ".5s In"
            l2.style.animation = '.5s In'
            l3.style.animation = ".5s In"
            document.getElementById('paraa').style.animation = "1s In"
            document.getElementById('result').style.display = 'block'
            document.getElementById('headd').style.animation = "1s In"
            document.getElementById('classer').style.display = 'none'
            document.getElementById('inp').style.display = 'flex'
            document.getElementById('classer2').style.display = 'none'
            document.getElementById('classer3').style.display = 'none'
            document.getElementById('inp').style.animation = "1s In"
            document.getElementById('classer4').style.display = 'none'
            document.getElementById('paraa').textContent = "make your button yourself, be creative!"
            document.getElementById('headd').textContent=' welcome on the creation class'
        }, 30)
    })
    l2.addEventListener('click', () => {
        l1.style.animation = "none"
        document.getElementById('inp').style.animation = "none"
        l2.style.animation = 'none'
        l3.style.animation = "none"
        document.getElementById('paraa').style.animation = "none"
        document.getElementById('result').style.display = 'none'
        document.getElementById('headd').style.animation = "none"
        setTimeout(() => {
        document.getElementById('classer').style.animation = "1s In"
        l1.style.animation = ".5s In"
            l2.style.animation = '.5s In'
            l3.style.animation = ".5s In"
        document.getElementById('paraa').style.animation = "1s In"
        document.getElementById('inp').style.animation = "1s In"
        document.getElementById('headd').style.animation = "1s In"
        document.getElementById('classer').style.display = 'flex'
        document.getElementById('classer2').style.display = 'flex'
        document.getElementById('inp').style.display = 'none'
        document.getElementById('classer3').style.display = 'flex'
        document.getElementById('classer4').style.display = 'flex'
        document.getElementById('paraa').textContent = "click on the button to copy code"
        document.getElementById('headd').textContent=' welcome on the ready class'
    })
}, 30)
    l3.addEventListener('click', () => {
        document.getElementById('classer').style.display = 'none'
        document.getElementById('classer2').style.display = 'none'
        document.getElementById('classer3').style.display = 'none'
        l1.style.animation = "none"
        document.getElementById('inp').style.animation = "none"
        l2.style.animation = 'none'
        document.getElementById('inp').style.display = 'none'
        l3.style.animation = "none"
        document.getElementById('paraa').style.animation = "none"
        document.getElementById('result').style.display = 'none'
        document.getElementById('headd').style.animation = "none"
        
        document.getElementById('classer4').style.display = 'none'
        document.getElementById('paraa').textContent = "this is the colors section"
        document.getElementById('headd').textContent=' welcome on the colors class'

    })
    container();
    main()
}

function classes() {
    
    class1()
    class2()
    class3()
    class4()
    input = () =>  {

        const inp = document.createElement('div');
    
        inp.className = 'inpCont'
        inp.id = 'inp'
    
        const width = document.createElement('input')
        width.type = 'number'
        width.id = 'width'
        width.name = 'width'
        width.placeholder = 'Enter button width...'
        inp.appendChild(width)
        const height = document.createElement('input')
        height.type = 'number'
        height.id = 'height'
        height.name = 'height'
        height.placeholder = 'Enter button height...'
        inp.appendChild(height)
    
        const color = document.createElement('input')
        color.type = 'text'
        color.id = 'color'
        color.name = 'color'
        color.placeholder = 'Enter button color...'
        inp.appendChild(color)
    
        const backgroundColor = document.createElement('input')
        backgroundColor.type = 'text'
        backgroundColor.id = 'backgroundColor'
        backgroundColor.name = 'backgroundColor'
        backgroundColor.placeholder = 'Enter button backgroundColor...'
        inp.appendChild(backgroundColor)
    
        const borderWidth = document.createElement('input')
        borderWidth.type = 'number'
        borderWidth.id = 'borderWidth'
        borderWidth.name = 'borderWidth'
        borderWidth.placeholder = 'Enter button borderWidth...'
        inp.appendChild(borderWidth)
    
        const borderStyle = document.createElement('input')
        borderStyle.type = 'text'
        borderStyle.id = 'borderStyle'
        borderStyle.name = 'borderStyle'
        borderStyle.placeholder = 'Enter button borderStyle...'
        inp.appendChild(borderStyle)
    
        const borderColor = document.createElement('input')
        borderColor.type = 'text'
        borderColor.id = 'borderColor'
        borderColor.name = 'borderColor'
        borderColor.placeholder = 'Enter button borderColor...'
        inp.appendChild(borderColor)
    
        const borderRadius = document.createElement('input')
        borderRadius.type = 'number'
        borderRadius.id = 'borderRadius'
        borderRadius.name = 'borderRadius'
        borderRadius.placeholder = 'Enter button borderRadius...'
        inp.appendChild(borderRadius)
    
        const fontFamily = document.createElement('input')
        fontFamily.type = 'text'
        fontFamily.id = 'fontFamily'
        fontFamily.name = 'fontFamily'
        fontFamily.placeholder = 'Enter button fontFamily...'
        inp.appendChild(fontFamily)
    
        const fontSize = document.createElement('input')
        fontSize.type = 'number'
        fontSize.id = 'fontSize'
        fontSize.name = 'fontSize'
        fontSize.placeholder = 'Enter button fontSize...'
        inp.appendChild(fontSize)
    
        const fontWeight = document.createElement('input')
        fontWeight.type = 'text'
        fontWeight.id = 'fontWeight'
        fontWeight.name = 'fontWeight'
        fontWeight.placeholder = 'Enter button fontWeight...'
        inp.appendChild(fontWeight)
    
        const fontStyle = document.createElement('input')
        fontStyle.type = 'text'
        fontStyle.id = 'fontStyle'
        fontStyle.name = 'fontStyle'
        fontStyle.placeholder = 'Enter button fontStyle...'
        inp.appendChild(fontStyle)
    
        document.getElementById('cont').appendChild(inp)
    }
    result = () => {
        const button = document.createElement('button')
        button.textContent = ' result button' 
        button.style.position = 'relative'
        button.style.top = '-1320px'
        button.style.maxWidth = '400px'
        button.style.maxHeight = '80px'
        button.id = 'result'
        button.style.left = '50%'
        button.style.transform = 'translate(-50%, 250px)'

        document.body.appendChild(button)
        button.addEventListener('click', () => {
            document.getElementById('details').style.display = 'block'
        })
    }
    input()
    result()
    details = () => {
        let details = document.createElement('div')
    let styles = document.createElement('style')
    details.id = 'details'
    details.className = 'details'
    details.style.position = 'fixed'
    details.style.width = '90%'
    details.style.marginLeft= '50%'
    details.style.transform = 'translate(-50%)'
    details.style.background='rgb(0, 0, 0, .8)'
    details.style.minHeight = '85vh'
    details.style.height = 'auto'
    details.style.borderRadius = '40px'
    details.style.backdropFilter =' blur(10px)'
    details.style.top = '20px'
    details.style.maxWidth = ' 700px'
    details.style.display = 'none'
    document.body.appendChild(details)

    const x = document.createElement('p')
    x.textContent = 'X'
    x.style.width = '30px'
    x.style.color = 'white'
    x.style.fontWeight = '900'
    x.style.textAlign ='center'
    x.style.height = '30px'
    x.style.cursor = 'pointer'
    x.style.fontSize = '25px'
    x.style.marginLeft = '5px'
    x.style.marginTop = '25px'

    x.addEventListener('click', () => {
        details.style.display = 'none'
    })

    const code = document.createElement('div')
    code.id = 'code'
    code.clasName = 'code'
    code.style.border = 'solid 1px black'
    code.style.background = 'rgb(0, 0, 0, .8)'
    code.style.width = '80%'
    code.style.marginLeft = '50%'
    code.style.transform = 'translate(-50%, 0px)'

    code.style.height = 'auto'
    details.appendChild(code)
    code.appendChild(x)

    const success = document.createElement('div') 
    const copy = document.createElement('button')
    copy.textContent = 'copy code'
    copy.addEventListener('click', ()=> {
        success.style.transform = 'translate(-50%, 0%)'
        success.style.opacity = '1'
        setTimeout(() => {
            success.style.transform = 'translate(-50%, -150%)'
            success.style.opacity = '0'
        }, 2000)
    })
    
    copy.style.width = '120px'
    copy.style.height = '40px'
    copy.style.color = 'rgb(255, 255, 255)'
    copy.style.fontWeight = '900'
    copy.style.marginLeft = '50%'
    copy.style.transform = 'translate(-50%, -30px)'
    copy.style.marginTop = '10px'
    copy.style.background = 'black'
    copy.style.border = 'solid 1px white'
    copy.style.borderRadius = '3px'
    const h1 = document.createElement('h1')
    h1.textContent = 'copied!'
    code.style.borderRadius = '30px'
    code.style.padding = '10px'
    h1.style.color = 'white'
    success.appendChild(h1)
    success.style.position = 'fixed'
    success.style.top = '10px'
    success.style.width = ' 120px'
    success.style.textAlign = 'center'
    success.style.borderRadius = '20px'
    success.style.height = ' 60px'
    success.opacity = '0'
    h1.style.fontSize = '20px'
    success.style.background = 'transparent'
    success.style.border = 'solid 1px gray'
    success.style.left = '50%'
    success.style.transform = 'translate(-50%, -150%)'
    success.style.transition =' all .2s'
    details.appendChild(success)
    const tag = document.createElement('h1')
    tag.textContent = 'button {'
    tag.style.color = 'white'
    const endTag = document.createElement('h1')

    const w = document.createElement('p')
    w.style.textTransform = 'none'
    w.style.transform = 'translate(30px, -0px)'
    w.id = 'w'

    const h = document.createElement('p')
    h.style.textTransform = 'none'
    h.style.transform = 'translate(30px, -0px)'
    h.id = 'h'

    const c = document.createElement('p')
    c.style.textTransform = 'none'
    c.style.transform = 'translate(30px, -0px)'
    c.id = 'c'

    const bg = document.createElement('p')
    bg.style.textTransform = 'none'
    bg.style.transform = 'translate(30px, -0px)'
    bg.id = 'bg'

    const b = document.createElement('p')
    b.style.textTransform = 'none'
    b.style.transform = 'translate(30px, -0px)'
    b.id = 'b'

    const bw = document.createElement('p')
    bw.style.textTransform = 'none'
    bw.style.transform = 'translate(30px, -0px)'
    bw.id = 'bw'

    const bc = document.createElement('p')
    bc.style.textTransform = 'none'
    bc.style.transform = 'translate(30px, -0px)'
    bc.id = 'bc'

    const br = document.createElement('p')
    br.style.textTransform = 'none'
    br.style.transform = 'translate(30px, -0px)'
    br.id = 'brr'

    const ff = document.createElement('p')
    ff.style.textTransform = 'none'
    ff.style.transform = 'translate(30px, -0px)'
    ff.id = 'ff'

    const fs = document.createElement('p')
    fs.style.textTransform = 'none'
    fs.style.transform = 'translate(30px, -0px)'
    fs.id = 'fs'

    const fst = document.createElement('p')
    fst.style.textTransform = 'none'
    fst.style.transform = 'translate(30px, -0px)'
    fst.id = 'fst'

    const fw = document.createElement('p')
    fw.style.textTransform = 'none'
    fw.style.transform = 'translate(30px, -0px)'
    fw.id = 'fw'

    endTag.style.color = 'white'
    endTag.textContent = '}'
    endTag.id = 'end'
    code.appendChild(tag)
    code.appendChild(w)
    code.appendChild(h)
    code.appendChild(c)
    code.appendChild(bg)
    code.appendChild(b)
    code.appendChild(bw)
    code.appendChild(bc)
    code.appendChild(br)
    code.appendChild(ff)
    code.appendChild(fs)
    code.appendChild(fst)
    code.appendChild(endTag)
    code.appendChild(copy)
    }
    details()
}

content()
classes()
footer()

function listeners() {

    
    const result = document.getElementById('result')

    
    
    const width = document.getElementById('width')
    width.style.marginTop = '100px'
    width.addEventListener('input', () => {
        result.style.width = width.value + 'px'
        document.getElementById('w').textContent = 'width: ' + width.value + 'px;'
        
        copy.style.transform = 'translate(-50%, -500px)'


    })

    const height = document.getElementById('height')
    height.addEventListener('input', () => {
        result.style.height = height.value + 'px'
        document.getElementById('h').textContent = 'height: ' + height.value + 'px;'
        

    })

    const color = document.getElementById('color')
    color.addEventListener('input', () => {
        result.style.color = color.value 
        document.getElementById('c').textContent = 'color: ' + color.value + ';'
        


    })

    const backgroundColor = document.getElementById('backgroundColor')
    backgroundColor.addEventListener('input', () => {
        result.style.backgroundColor = backgroundColor.value 
        document.getElementById('bg').textContent = 'background: ' + backgroundColor.value + ';'
        


    })

    const borderStyle = document.getElementById('borderStyle')
    const borderColor = document.getElementById('borderColor')
    const borderWidth = document.getElementById('borderWidth')
    borderWidth.style.display = 'none'
    borderColor.style.display = 'none'
    borderStyle.addEventListener('input', () => {
        if ((borderStyle.value === 'solid') || (borderStyle.value === 'Solid')) {
            borderWidth.style.display = 'block'
            borderColor.style.display = 'block'
            document.getElementById('result').style.top = '-1460px'
        } else {
            borderWidth.style.display = 'none'
            document.getElementById('result').style.top = '-1320px'

            borderColor.style.display = 'none'
        }

        result.style.borderStyle = borderStyle.value
        

        document.getElementById('b').textContent = 'border-style: ' + borderStyle.value + ';'
    })

    borderColor.addEventListener('input', () => {
        result.style.borderColor = borderColor.value 
        document.getElementById('bc').textContent = 'border-color: ' + borderColor.value + ';'
        


    })
    borderWidth.addEventListener('input', () => {
        result.style.borderWidth = borderWidth.value + 'px'
        document.getElementById('bw').textContent = 'border-width: ' + borderWidth.value + 'px;'
        


    })

    const fontFamily = document.getElementById('fontFamily')
    fontFamily.addEventListener('input', () => {
        result.style.fontFamily = fontFamily.value 
        document.getElementById('ff').textContent = 'font-family: ' + fontFamily.value + ';'
        


    })

    const fontSize = document.getElementById('fontSize')
    fontSize.addEventListener('input', () => {
        result.style.fontSize = fontSize.value + 'px'
        document.getElementById('fs').textContent = 'font-size: ' + fontSize.value + 'px;'
        


    })

    const fontWeight = document.getElementById('fontWeight')
    fontWeight.addEventListener('input', () => {
        result.style.fontWeight = fontWeight.value 
        document.getElementById('fw').textContent = 'font-weight: ' + fontWeight.value + ';'
        


    })

    const fontStyle = document.getElementById('fontStyle')
    fontStyle.addEventListener('input', () => {
        result.style.fontStyle = fontStyle.value 
        document.getElementById('fst').textContent = 'font-style: ' + fontStyle.value + ';'
        


    })

    const borderRadius = document.getElementById('borderRadius')
    borderRadius.addEventListener('input', () => {
        result.style.borderRadius = borderRadius.value + 'px'
        document.getElementById('brr').textContent = 'border-radius: ' + borderRadius.value + ';'
        


    })
    
}
listeners()


