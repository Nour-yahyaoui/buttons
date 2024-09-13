// script of ready buttons! //

if (sessionStorage.getItem('is_auth') === "false") {
    window.location.href ="in.html";
    console.log("not auth")
};

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

function elements() {
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
    return classer;
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
    var link1 = document.createElement('li')
    var link2 = document.createElement('li')
    var link3 = document.createElement('li')

    link1.textContent="Create"
    link2.textContent="Ready"
    link3.textContent="Colors"

    style.textContent = `
        nav {
            max-width:980px;
            margin:0 auto ;
            background: #123;
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
        
        ul li {
            list-style: none;
            font-weight:750;
            font-size:18px;
            cursor:pointer;
            color: rbg(200, 200, 200);
            text-decoration: underline;
            transition: all .4s;
        }
        ul li:hover {
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

function class1() {
    const header = document.createElement('h1');
    header.textContent="welcome on the first class";
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
    hero.style.background="#123";
    hero.style.padding="100px 0px";
    hero.style.textAlign="center";
    hero.style.width="100%";
    hero.style.height="auto";
    
    hero.appendChild(header)
    hero.appendChild(p)

    document.getElementById('cont').appendChild(hero);
    document.getElementById('cont').appendChild(elements());



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
        background: #123;
        border:none;
        margin-top: 00px;
        transform: translate(0px, 200px);
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
    container();
    class1()
    class2()
    class3()
    class4()
    footer()
}
content()
