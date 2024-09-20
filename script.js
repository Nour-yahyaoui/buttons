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
    footer.id = 'footer'

    document.getElementById('cont').appendChild(footer)
}

function colors()  {
    const container = document.createElement('div')
    container.id = 'colors'
    container.style.display = 'none'
    container.style.flexDirection = 'row'
    container.style.flexWrap = 'wrap'
    container.style.background = 'white'
    container.style.maxWidth = '1000px'
    container.style.paddingTop = '50px'
    container.style.height = 'auto'
    container.style.gap = '40px'
    container.style.justifyContent = 'space-evenly'
    container.style.alignItems = 'center'
    const colorCont = document.createElement('div')

    colorCont.id = 'colorCont'
    colorCont.style.width ='90%'
    colorCont.style.height = 'auto'
    colorCont.style.borderRadius = '10px'
    colorCont.style.border = 'none'
    colorCont.style.background = 'white'
    colorCont.style.display = 'flex'
    colorCont.style.flexDirection = 'row'
    colorCont.style.flexWrap = 'wrap'
    colorCont.style.gap = '20px'
    colorCont.style.alignItems = 'center'

    const color1 = document.createElement('div')
    const cont = document.createElement('div')
    cont.style.display = 'grid'
    cont.style.gap = '10px'
    cont.style.margin = 'auto'
    cont.style.width = '300px'
    color1.style.width = '90%'
    color1.style.height = '200px'
    color1.style.background = '#123456'
    color1.style.borderRadius = '10px'
    color1.style.margin = '4px'
    const color1code = document.createElement('p')
    color1code.style.color = 'gray'
    color1code.style.fontSize = '16px'
    color1code.style.fontFamily = 'monospace'
    color1code.textContent = 'Color code: #123456'
    const hr = document.createElement('hr')
    hr.style.borderColor = 'black'

    cont.appendChild(color1)
    cont.appendChild(color1code)
    colorCont.appendChild(cont)

    const color2 = document.createElement('div')
    const cont2 = document.createElement('div')
    cont2.style.display = 'grid'
    cont2.style.gap = '10px'
    cont2.style.margin = 'auto'
    cont2.style.width = '300px'
    color2.style.width = '90%'
    color2.style.height = '200px'
    color2.style.background = '#a1f'
    color2.style.borderRadius = '10px'
    color2.style.margin = '4px'
    const color2code = document.createElement('p')
    color2code.style.color = 'gray'
    color2code.style.fontSize = '16px'
    color2code.style.fontFamily = 'monospace'
    color2code.textContent = 'Color code: #a1f'
    

    cont2.appendChild(color2)
    cont2.appendChild(color2code)
    colorCont.appendChild(cont2)
    
    
    const color3 = document.createElement('div')
    const cont3 = document.createElement('div')
    cont3.style.display = 'grid'
    cont3.style.gap = '10px'
    cont3.style.margin = 'auto'
    cont3.style.width = '300px'
    color3.style.width = '90%'
    color3.style.height = '200px'
    color3.style.background = '#dc3545'
    color3.style.borderRadius = '10px'
    color3.style.margin = '4px'
    const color3code = document.createElement('p')
    color3code.style.color = 'gray'
    color3code.style.fontSize = '16px'
    color3code.style.fontFamily = 'monospace'
    color3code.textContent = 'Color code: #dc3545'
    

    cont3.appendChild(color3)
    cont3.appendChild(color3code)
    colorCont.appendChild(cont3)
    
    const color4 = document.createElement('div')
    const cont4 = document.createElement('div')
    cont4.style.display = 'grid'
    cont4.style.gap = '10px'
    cont4.style.margin = 'auto'
    cont4.style.width = '300px'
    color4.style.width = '90%'
    color4.style.height = '200px'
    color4.style.background = '#11111a'
    color4.style.borderRadius = '10px'
    color4.style.margin = '4px'
    const color4code = document.createElement('p')
    color4code.style.color = 'gray'
    color4code.style.fontSize = '16px'
    color4code.style.fontFamily = 'monospace'
    color4code.textContent = 'Color code: #11111a'
    

    cont4.appendChild(color4)
    cont4.appendChild(color4code)
    colorCont.appendChild(cont4)
    
    const color5 = document.createElement('div')
    const cont5 = document.createElement('div')
    cont5.style.display = 'grid'
    cont5.style.gap = '10px'
    cont5.style.margin = 'auto'
    cont5.style.width = '300px'
    color5.style.width = '90%'
    color5.style.height = '200px'
    color5.style.background = '#339933'
    color5.style.borderRadius = '10px'
    color5.style.margin = '4px'
    const color5code = document.createElement('p')
    color5code.style.color = 'gray'
    color5code.style.fontSize = '16px'
    color5code.style.fontFamily = 'monospace'
    color5code.textContent = 'Color code: #339933'
    

    cont5.appendChild(color5)
    cont5.appendChild(color5code)
    colorCont.appendChild(cont5)
    
    const color6 = document.createElement('div')
    const cont6 = document.createElement('div')
    cont6.style.display = 'grid'
    cont6.style.gap = '10px'
    cont6.style.margin = 'auto'
    cont6.style.width = '300px'
    color6.style.width = '90%'
    color6.style.height = '200px'
    color6.style.background = '#222327'
    color6.style.borderRadius = '10px'
    color6.style.margin = '4px'
    const color6code = document.createElement('p')
    color6code.style.color = 'gray'
    color6code.style.fontSize = '16px'
    color6code.style.fontFamily = 'monospace'
    color6code.textContent = 'Color code: #222327'
    

    cont6.appendChild(color6)
    cont6.appendChild(color6code)
    colorCont.appendChild(cont6)
    
    const color7 = document.createElement('div')
    const cont7 = document.createElement('div')
    cont7.style.display = 'grid'
    cont7.style.gap = '10px'
    cont7.style.margin = 'auto'
    cont7.style.width = '300px'
    color7.style.width = '90%'
    color7.style.height = '200px'
    color7.style.background = '#59ce8f'
    color7.style.borderRadius = '10px'
    color7.style.margin = '4px'
    const color7code = document.createElement('p')
    color7code.style.color = 'gray'
    color7code.style.fontSize = '16px'
    color7code.style.fontFamily = 'monospace'
    color7code.textContent = 'Color code: #59ce8f'
    

    cont7.appendChild(color7)
    cont7.appendChild(color7code)
    colorCont.appendChild(cont7)
    
    const color8 = document.createElement('div')
    const cont8 = document.createElement('div')
    cont8.style.display = 'grid'
    cont8.style.gap = '10px'
    cont8.style.margin = 'auto'
    cont8.style.width = '300px'
    color8.style.width = '90%'
    color8.style.height = '200px'
    color8.style.background = 'tan'
    color8.style.borderRadius = '10px'
    color8.style.margin = '4px'
    const color8code = document.createElement('p')
    color8code.style.color = 'gray'
    color8code.style.fontSize = '16px'
    color8code.style.fontFamily = 'monospace'
    color8code.textContent = 'Color code: tan'
    

    cont8.appendChild(color8)
    cont8.appendChild(color8code)
    colorCont.appendChild(cont8)
    
    const color9 = document.createElement('div')
    const cont9 = document.createElement('div')
    cont9.style.display = 'grid'
    cont9.style.gap = '10px'
    cont9.style.margin = 'auto'
    cont9.style.width = '300px'
    color9.style.width = '90%'
    color9.style.height = '200px'
    color9.style.background = 'tomato'
    color9.style.borderRadius = '10px'
    color9.style.margin = '4px'
    const color9code = document.createElement('p')
    color9code.style.color = 'gray'
    color9code.style.fontSize = '16px'
    color9code.style.fontFamily = 'monospace'
    color9code.textContent = 'Color code: tomato'
    

    cont9.appendChild(color9)
    cont9.appendChild(color9code)
    colorCont.appendChild(cont9)
    
    const color12 = document.createElement('div')
    const cont12 = document.createElement('div')
    cont12.style.display = 'grid'
    cont12.style.gap = '10px'
    cont12.style.margin = 'auto'
    cont12.style.width = '300px'
    color12.style.width = '90%'
    color12.style.height = '200px'
    color12.style.background = '#032B44'
    color12.style.borderRadius = '10px'
    color12.style.margin = '4px'
    const color12code = document.createElement('p')
    color12code.style.color = 'gray'
    color12code.style.fontSize = '16px'
    color12code.style.fontFamily = 'monospace'
    color12code.textContent = 'Color code: #032B44'
    

    cont12.appendChild(color12)
    cont12.appendChild(color12code)
    colorCont.appendChild(cont12)
    
    const color13 = document.createElement('div')
    const cont13 = document.createElement('div')
    cont13.style.display = 'grid'
    cont13.style.gap = '10px'
    cont13.style.margin = 'auto'
    cont13.style.width = '300px'
    color13.style.width = '90%'
    color13.style.height = '200px'
    color13.style.background = '#32CD32'
    color13.style.borderRadius = '10px'
    color13.style.margin = '4px'
    const color13code = document.createElement('p')
    color13code.style.color = 'gray'
    color13code.style.fontSize = '16px'
    color13code.style.fontFamily = 'monospace'
    color13code.textContent = 'Color code: #32CD32'
    

    cont13.appendChild(color13)
    cont13.appendChild(color13code)
    colorCont.appendChild(cont13)
    
    const color14 = document.createElement('div')
    const cont14 = document.createElement('div')
    cont14.style.display = 'grid'
    cont14.style.gap = '10px'
    cont14.style.margin = 'auto'
    cont14.style.width = '300px'
    color14.style.width = '90%'
    color14.style.height = '200px'
    color14.style.background = '#FFD7BE'
    color14.style.borderRadius = '10px'
    color14.style.margin = '4px'
    const color14code = document.createElement('p')
    color14code.style.color = 'gray'
    color14code.style.fontSize = '16px'
    color14code.style.fontFamily = 'monospace'
    color14code.textContent = 'Color code: #FFD7BE'
    

    cont14.appendChild(color14)
    cont14.appendChild(color14code)
    colorCont.appendChild(cont14)
    
    const color15 = document.createElement('div')
    const cont15 = document.createElement('div')
    cont15.style.display = 'grid'
    cont15.style.gap = '10px'
    cont15.style.margin = 'auto'
    cont15.style.width = '300px'
    color15.style.width = '90%'
    color15.style.height = '200px'
    color15.style.background = '#E4D6F5'
    color15.style.borderRadius = '10px'
    color15.style.margin = '4px'
    const color15code = document.createElement('p')
    color15code.style.color = 'gray'
    color15code.style.fontSize = '16px'
    color15code.style.fontFamily = 'monospace'
    color15code.textContent = 'Color code: #E4D6F5'
    

    cont15.appendChild(color15)
    cont15.appendChild(color15code)
    colorCont.appendChild(cont15)
    
    const color16 = document.createElement('div')
    const cont16 = document.createElement('div')
    cont16.style.display = 'grid'
    cont16.style.gap = '10px'
    cont16.style.margin = 'auto'
    cont16.style.width = '300px'
    color16.style.width = '90%'
    color16.style.height = '200px'
    color16.style.background = '#ACFFAC'
    color16.style.borderRadius = '10px'
    color16.style.margin = '4px'
    const color16code = document.createElement('p')
    color16code.style.color = 'gray'
    color16code.style.fontSize = '16px'
    color16code.style.fontFamily = 'monospace'
    color16code.textContent = 'Color code: #ACFFAC'
    

    cont16.appendChild(color16)
    cont16.appendChild(color16code)
    colorCont.appendChild(cont16)
    
    const color17 = document.createElement('div')
    const cont17 = document.createElement('div')
    cont17.style.display = 'grid'
    cont17.style.gap = '10px'
    cont17.style.margin = 'auto'
    cont17.style.width = '300px'
    color17.style.width = '90%'
    color17.style.height = '200px'
    color17.style.background = '#FFD700'
    color17.style.borderRadius = '10px'
    color17.style.margin = '4px'
    const color17code = document.createElement('p')
    color17code.style.color = 'gray'
    color17code.style.fontSize = '16px'
    color17code.style.fontFamily = 'monospace'
    color17code.textContent = 'Color code: #FFD700'
    

    cont17.appendChild(color17)
    cont17.appendChild(color17code)
    colorCont.appendChild(cont17)
    
    const color18 = document.createElement('div')
    const cont18 = document.createElement('div')
    cont18.style.display = 'grid'
    cont18.style.gap = '10px'
    cont18.style.margin = 'auto'
    cont18.style.width = '300px'
    color18.style.width = '90%'
    color18.style.height = '200px'
    color18.style.background = '#87CEEB'
    color18.style.borderRadius = '10px'
    color18.style.margin = '4px'
    const color18code = document.createElement('p')
    color18code.style.color = 'gray'
    color18code.style.fontSize = '16px'
    color18code.style.fontFamily = 'monospace'
    color18code.textContent = 'Color code: #87CEEB'
    

    cont18.appendChild(color18)
    cont18.appendChild(color18code)
    colorCont.appendChild(cont18)
    
    const color19 = document.createElement('div')
    const cont19 = document.createElement('div')
    cont19.style.display = 'grid'
    cont19.style.gap = '10px'
    cont19.style.margin = 'auto'
    cont19.style.width = '300px'
    color19.style.width = '90%'
    color19.style.height = '200px'
    color19.style.background = '#FF9900'
    color19.style.borderRadius = '10px'
    color19.style.margin = '4px'
    const color19code = document.createElement('p')
    color19code.style.color = 'gray'
    color19code.style.fontSize = '16px'
    color19code.style.fontFamily = 'monospace'
    color19code.textContent = 'Color code: #FF9900'
    

    cont19.appendChild(color19)
    cont19.appendChild(color19code)
    colorCont.appendChild(cont19)
    const color21 = document.createElement('div')
const cont21 = document.createElement('div')
cont21.style.display = 'grid'
cont21.style.gap = '10px'
cont21.style.margin = 'auto'
cont21.style.width = '300px'
color21.style.width = '90%'
color21.style.height = '200px'
color21.style.background = '#3498db'
color21.style.borderRadius = '10px'
color21.style.margin = '4px'
const color21code = document.createElement('p')
color21code.style.color = 'gray'
color21code.style.fontSize = '16px'
color21code.style.fontFamily = 'monospace'
color21code.textContent = 'Color code: #3498db'

cont21.appendChild(color21)
cont21.appendChild(color21code)
colorCont.appendChild(cont21)

const color22 = document.createElement('div')
const cont22 = document.createElement('div')
cont22.style.display = 'grid'
cont22.style.gap = '10px'
cont22.style.margin = 'auto'
cont22.style.width = '300px'
color22.style.width = '90%'
color22.style.height = '200px'
color22.style.background = '#8bc34a'
color22.style.borderRadius = '10px'
color22.style.margin = '4px'
const color22code = document.createElement('p')
color22code.style.color = 'gray'
color22code.style.fontSize = '16px'
color22code.style.fontFamily = 'monospace'
color22code.textContent = 'Color code: #8bc34a'

cont22.appendChild(color22)
cont22.appendChild(color22code)
colorCont.appendChild(cont22)

const color23 = document.createElement('div')
const cont23 = document.createElement('div')
cont23.style.display = 'grid'
cont23.style.gap = '10px'
cont23.style.margin = 'auto'
cont23.style.width = '300px'
color23.style.width = '90%'
color23.style.height = '200px'
color23.style.background = '#e74c3c'
color23.style.borderRadius = '10px'
color23.style.margin = '4px'
const color23code = document.createElement('p')
color23code.style.color = 'gray'
color23code.style.fontSize = '16px'
color23code.style.fontFamily = 'monospace'
color23code.textContent = 'Color code: #e74c3c'

cont23.appendChild(color23)
cont23.appendChild(color23code)
colorCont.appendChild(cont23)

const color24 = document.createElement('div')
const cont24 = document.createElement('div')
cont24.style.display = 'grid'
cont24.style.gap = '10px'
cont24.style.margin = 'auto'
cont24.style.width = '300px'
color24.style.width = '90%'
color24.style.height = '200px'
color24.style.background = '#2ecc71'
color24.style.borderRadius = '10px'
color24.style.margin = '4px'
const color24code = document.createElement('p')
color24code.style.color = 'gray'
color24code.style.fontSize = '16px'
color24code.style.fontFamily = 'monospace'
color24code.textContent = 'Color code: #2ecc71'

cont24.appendChild(color24)
cont24.appendChild(color24code)
colorCont.appendChild(cont24)

const color25 = document.createElement('div')
const cont25 = document.createElement('div')
cont25.style.display = 'grid'
cont25.style.gap = '10px'
cont25.style.margin = 'auto'
cont25.style.width = '300px'
color25.style.width = '90%'
color25.style.height = '200px'
color25.style.background = '#4CAF50'
color25.style.borderRadius = '10px'
color25.style.margin = '4px'
const color25code = document.createElement('p')
color25code.style.color = 'gray'
color25code.style.fontSize = '16px'
color25code.style.fontFamily = 'monospace'
color25code.textContent = 'Color code: #4CAF50'

cont25.appendChild(color25)
cont25.appendChild(color25code)
colorCont.appendChild(cont25)

const color26 = document.createElement('div')
const cont26 = document.createElement('div')
cont26.style.display = 'grid'
cont26.style.gap = '10px'
cont26.style.margin = 'auto'
cont26.style.width = '300px'
color26.style.width = '90%'
color26.style.height = '200px'
color26.style.background = '#03A9F4'
color26.style.borderRadius = '10px'
color26.style.margin = '4px'
const color26code = document.createElement('p')
color26code.style.color = 'gray'
color26code.style.fontSize = '16px'
color26code.style.fontFamily = 'monospace'
color26code.textContent = 'Color code: #03A9F4'

cont26.appendChild(color26)
cont26.appendChild(color26code)
colorCont.appendChild(cont26)

const color27 = document.createElement('div')
const cont27 = document.createElement('div')
cont27.style.display = 'grid'
cont27.style.gap = '10px'
cont27.style.margin = 'auto'
cont27.style.width = '300px'
color27.style.width = '90%'
color27.style.height = '200px'
color27.style.background = '#FF9800'
color27.style.borderRadius = '10px'
color27.style.margin = '4px'
const color27code = document.createElement('p')
color27code.style.color = 'gray'
color27code.style.fontSize = '16px'
color27code.style.fontFamily = 'monospace'
color27code.textContent = 'Color code: #FF9800'

cont27.appendChild(color27)
cont27.appendChild(color27code)
colorCont.appendChild(cont27)
const color28 = document.createElement('div')
const cont28 = document.createElement('div')
cont28.style.display = 'grid'
cont28.style.gap = '10px'
cont28.style.margin = 'auto'
cont28.style.width = '300px'
color28.style.width = '90%'
color28.style.height = '200px'
color28.style.background = '#9C27B0'
color28.style.borderRadius = '10px'
color28.style.margin = '4px'
const color28code = document.createElement('p')
color28code.style.color = 'gray'
color28code.style.fontSize = '16px'
color28code.style.fontFamily = 'monospace'
color28code.textContent = 'Color code: #9C27B0'

cont28.appendChild(color28)
cont28.appendChild(color28code)
colorCont.appendChild(cont28)

const color29 = document.createElement('div')
const cont29 = document.createElement('div')
cont29.style.display = 'grid'
cont29.style.gap = '10px'
cont29.style.margin = 'auto'
cont29.style.width = '300px'
color29.style.width = '90%'
color29.style.height = '200px'
color29.style.background = '#66D9EF'
color29.style.borderRadius = '10px'
color29.style.margin = '4px'
const color29code = document.createElement('p')
color29code.style.color = 'gray'
color29code.style.fontSize = '16px'
color29code.style.fontFamily = 'monospace'
color29code.textContent = 'Color code: #66D9EF'

cont29.appendChild(color29)
cont29.appendChild(color29code)
colorCont.appendChild(cont29)

const color30 = document.createElement('div')
const cont30 = document.createElement('div')
cont30.style.display = 'grid'
cont30.style.gap = '10px'
cont30.style.margin = 'auto'
cont30.style.width = '300px'
color30.style.width = '90%'
color30.style.height = '200px'
color30.style.background = '#F7DC6F'
color30.style.borderRadius = '10px'
color30.style.margin = '4px'
const color30code = document.createElement('p')
color30code.style.color = 'gray'
color30code.style.fontSize = '16px'
color30code.style.fontFamily = 'monospace'
color30code.textContent = 'Color code: #F7DC6F'

cont30.appendChild(color30)
cont30.appendChild(color30code)
colorCont.appendChild(cont30)

const color31 = document.createElement('div')
const cont31 = document.createElement('div')
cont31.style.display = 'grid'
cont31.style.gap = '10px'
cont31.style.margin = 'auto'
cont31.style.width = '300px'
color31.style.width = '90%'
color31.style.height = '200px'
color31.style.background = '#455A64'
color31.style.borderRadius = '10px'
color31.style.margin = '4px'
const color31code = document.createElement('p')
color31code.style.color = 'gray'
color31code.style.fontSize = '16px'
color31code.style.fontFamily = 'monospace'
color31code.textContent = 'Color code: #455A64'

cont31.appendChild(color31)
cont31.appendChild(color31code)
colorCont.appendChild(cont31)

const color32 = document.createElement('div')
const cont32 = document.createElement('div')
cont32.style.display = 'grid'
cont32.style.gap = '10px'
cont32.style.margin = 'auto'
cont32.style.width = '300px'
color32.style.width = '90%'
color32.style.height = '200px'
color32.style.background = '#2196F3'
color32.style.borderRadius = '10px'
color32.style.margin = '4px'
const color32code = document.createElement('p')
color32code.style.color = 'gray'
color32code.style.fontSize = '16px'
color32code.style.fontFamily = 'monospace'
color32code.textContent = 'Color code: #2196F3'

cont32.appendChild(color32)
cont32.appendChild(color32code)
colorCont.appendChild(cont32)

const color33 = document.createElement('div')
const cont33 = document.createElement('div')
cont33.style.display = 'grid'
cont33.style.gap = '10px'
cont33.style.margin = 'auto'
cont33.style.width = '300px'
color33.style.width = '90%'
color33.style.height = '200px'
color33.style.background = '#FFC107'
color33.style.borderRadius = '10px'
color33.style.margin = '4px'
const color33code = document.createElement('p')
color33code.style.color = 'gray'
color33code.style.fontSize = '16px'
color33code.style.fontFamily = 'monospace'
color33code.textContent = 'Color code: #FFC107'

cont33.appendChild(color33)
cont33.appendChild(color33code)
colorCont.appendChild(cont33)

const color34 = document.createElement('div')
const cont34 = document.createElement('div')
cont34.style.display = 'grid'
cont34.style.gap = '10px'
cont34.style.margin = 'auto'
cont34.style.width = '300px'
color34.style.width = '90%'
color34.style.height = '200px'
color34.style.background = '#8F0A1A'
color34.style.borderRadius = '10px'
color34.style.margin = '4px'
const color34code = document.createElement('p')
color34code.style.color = 'gray'
color34code.style.fontSize = '16px'
color34code.style.fontFamily = 'monospace'
color34code.textContent = 'Color code: #8F0A1A'

cont34.appendChild(color34)
cont34.appendChild(color34code)
colorCont.appendChild(cont34)

const color35 = document.createElement('div')
const cont35 = document.createElement('div')
cont35.style.display = 'grid'
cont35.style.gap = '10px'
cont35.style.margin = 'auto'
cont35.style.width = '300px'
color35.style.width = '90%'
color35.style.height = '200px'
color35.style.background = '#4DD0E1'
color35.style.borderRadius = '10px'
color35.style.margin = '4px'
const color35code = document.createElement('p')
color35code.style.color = 'gray'
color35code.style.fontSize = '16px'
color35code.style.fontFamily = 'monospace'
color35code.textContent = 'Color code: #4DD0E1'

cont35.appendChild(color35)
cont35.appendChild(color35code)
colorCont.appendChild(cont35)

const color36 = document.createElement('div')
const cont36 = document.createElement('div')
cont36.style.display = 'grid'
cont36.style.gap = '10px'
cont36.style.margin = 'auto'
cont36.style.width = '300px'
color36.style.width = '90%'
color36.style.height = '200px'
color36.style.background = '#9E9E9E' // Gray
color36.style.borderRadius = '10px'
color36.style.margin = '4px'
const color36code = document.createElement('p')
color36code.style.color = 'gray'
color36code.style.fontSize = '16px'
color36code.style.fontFamily = 'monospace'
color36code.textContent = 'Color code: #9E9E9E'

cont36.appendChild(color36)
cont36.appendChild(color36code)
colorCont.appendChild(cont36)

const color37 = document.createElement('div')
const cont37 = document.createElement('div')
cont37.style.display = 'grid'
cont37.style.gap = '10px'
cont37.style.margin = 'auto'
cont37.style.width = '300px'
color37.style.width = '90%'
color37.style.height = '200px'
color37.style.background = '#3F51B5' // Dark Blue
color37.style.borderRadius = '10px'
color37.style.margin = '4px'
const color37code = document.createElement('p')
color37code.style.color = 'gray'
color37code.style.fontSize = '16px'
color37code.style.fontFamily = 'monospace'
color37code.textContent = 'Color code: #3F51B5'

cont37.appendChild(color37)
cont37.appendChild(color37code)
colorCont.appendChild(cont37)

const color38 = document.createElement('div')
const cont38 = document.createElement('div')
cont38.style.display = 'grid'
cont38.style.gap = '10px'
cont38.style.margin = 'auto'
cont38.style.width = '300px'
color38.style.width = '90%'
color38.style.height = '200px'
color38.style.background = '#FF9800' // Orange-Red
color38.style.borderRadius = '10px'
color38.style.margin = '4px'
const color38code = document.createElement('p')
color38code.style.color = 'gray'
color38code.style.fontSize = '16px'
color38code.style.fontFamily = 'monospace'
color38code.textContent = 'Color code: #FF9800'

cont38.appendChild(color38)
cont38.appendChild(color38code)
colorCont.appendChild(cont38)

const color40 = document.createElement('div')
const cont40 = document.createElement('div')
cont40.style.display = 'grid'
cont40.style.gap = '10px'
cont40.style.margin = 'auto'
cont40.style.width = '300px'
color40.style.width = '90%'
color40.style.height = '200px'
color40.style.background = '#4CAF50' // Teal
color40.style.borderRadius = '10px'
color40.style.margin = '4px'
const color40code = document.createElement('p')
color40code.style.color = 'gray'
color40code.style.fontSize = '16px'
color40code.style.fontFamily = 'monospace'
color40code.textContent = 'Color code: #4CAF50'

cont40.appendChild(color40)
cont40.appendChild(color40code)
colorCont.appendChild(cont40)

const color41 = document.createElement('div')
const cont41 = document.createElement('div')
cont41.style.display = 'grid'
cont41.style.gap = '10px'
cont41.style.margin = 'auto'
cont41.style.width = '300px'
color41.style.width = '90%'
color41.style.height = '200px'
color41.style.background = '#9C27B0' // Deep Purple
color41.style.borderRadius = '10px'
color41.style.margin = '4px'
const color41code = document.createElement('p')
color41code.style.color = 'gray'
color41code.style.fontSize = '16px'
color41code.style.fontFamily = 'monospace'
color41code.textContent = 'Color code: #9C27B0'

cont41.appendChild(color41)
cont41.appendChild(color41code)
colorCont.appendChild(cont41)

const color42 = document.createElement('div')
const cont42 = document.createElement('div')
cont42.style.display = 'grid'
cont42.style.gap = '10px'
cont42.style.margin = 'auto'
cont42.style.width = '300px'
color42.style.width = '90%'
color42.style.height = '200px'
color42.style.background = '#E91E63' // Pink
color42.style.borderRadius = '10px'
color42.style.margin = '4px'
const color42code = document.createElement('p')
color42code.style.color = 'gray'
color42code.style.fontSize = '16px'
color42code.style.fontFamily = 'monospace'
color42code.textContent = 'Color code: #E91E63'

cont42.appendChild(color42)
cont42.appendChild(color42code)
colorCont.appendChild(cont42)

const color43 = document.createElement('div')
const cont43 = document.createElement('div')
cont43.style.display = 'grid'
cont43.style.gap = '10px'
cont43.style.margin = 'auto'
cont43.style.width = '300px'
color43.style.width = '90%'
color43.style.height = '200px'
color43.style.background = '#2196F3' // Blue
color43.style.borderRadius = '10px'
color43.style.margin = '4px'
const color43code = document.createElement('p')
color43code.style.color = 'gray'
color43code.style.fontSize = '16px'
color43code.style.fontFamily = 'monospace'
color43code.textContent = 'Color code: #2196F3'

cont43.appendChild(color43)
cont43.appendChild(color43code)
colorCont.appendChild(cont43)

const color44 = document.createElement('div')
const cont44 = document.createElement('div')
cont44.style.display = 'grid'
cont44.style.gap = '10px'
cont44.style.margin = 'auto'
cont44.style.width = '300px'
color44.style.width = '90%'
color44.style.height = '200px'
color44.style.background = '#F44336' // Red
color44.style.borderRadius = '10px'
color44.style.margin = '4px'
const color44code = document.createElement('p')
color44code.style.color = 'gray'
color44code.style.fontSize = '16px'
color44code.style.fontFamily = 'monospace'
color44code.textContent = 'Color code: #F44336'

cont44.appendChild(color44)
cont44.appendChild(color44code)
colorCont.appendChild(cont44)

const color45 = document.createElement('div')
const cont45 = document.createElement('div')
cont45.style.display = 'grid'
cont45.style.gap = '10px'
cont45.style.margin = 'auto'
cont45.style.width = '300px'
color45.style.width = '90%'
color45.style.height = '200px'
color45.style.background = '#009688' // Teal
color45.style.borderRadius = '10px'
color45.style.margin = '4px'
const color45code = document.createElement('p')
color45code.style.color = 'gray'
color45code.style.fontSize = '16px'
color45code.style.fontFamily = 'monospace'
color45code.textContent = 'Color code: #009688'

cont45.appendChild(color45)
cont45.appendChild(color45code)
colorCont.appendChild(cont45)
    
    container.appendChild(colorCont)
    container.style.animation = 'none'
    document.getElementById('cont').appendChild(container)


}

function content() {

    let l1 = document.getElementById('link1');
    let l2 = document.getElementById('link2');
    let l3 = document.getElementById('link3');

    l1.addEventListener('click', () => {
        document.getElementById('paraa').style.animation = "none"
        document.getElementById('headd').style.animation = "none"
        document.getElementById('colors').style.display = 'none'
        document.getElementById('colors').style.animation = 'none'
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
        }, 0)
    })
    l2.addEventListener('click', () => {
        document.getElementById('colors').style.display = 'none'
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
}, 0)
    l3.addEventListener('click', () => {
        document.getElementById('colors').style.display =  'flex'
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
        
        document.getElementById('colors').style.animation = "1s In"
        setTimeout(() => {
            document.getElementById('colors').style.animation = 'none'
        }, 0)
        

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
            document.getElementById('footer').style.marginBottom = '-680px'
        })
    }
    input()
    result()
    function details() {
    let details = document.createElement('div')
    let styles = document.createElement('style')
    details.id = 'details'
    details.className = 'details'
    details.style.position = 'relative'
    details.style.zIndex = '999'
    details.style.width = '90%'
    details.marginTop = '40px !important'
    details.style.marginLeft= '50%'
    details.style.transform = 'translate(-50%, -880px)'
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
        document.getElementById('footer').style.marginBottom = '0px'
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
        navigator.clipboard.writeText(cd.textContent)
        copy.style.border = 'solid 1px green'
        setTimeout(() => {
            success.style.transform = 'translate(-50%, -150%)'
            copy.style.border = 'solid 1px gray'
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
    success.style.transform = 'translate(-50%, -250%)'
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
    const cd = document.createElement('div')
    endTag.style.color = 'white'
    endTag.textContent = '}'
    endTag.id = 'end'
    cd.appendChild(tag)
    cd.appendChild(w)
    cd.appendChild(h)
    cd.appendChild(c)
    cd.appendChild(bg)
    cd.appendChild(b)
    cd.appendChild(bw)
    cd.appendChild(bc)
    cd.appendChild(br)
    cd.appendChild(ff)
    cd.appendChild(fs)
    cd.appendChild(fst)
    cd.appendChild(endTag)
    code.appendChild(cd)
    code.appendChild(copy)
    }
    details()
}



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
        borderWidth.style.display = 'none'
        document.getElementById('result').style.top = '-1320px'
        borderColor.style.display = 'none'
        result.style.border = borderStyle.value
        

        document.getElementById('b').textContent = 'border: ' + borderStyle.value + ';'
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



content()
colors()
classes()
footer()
listeners()

