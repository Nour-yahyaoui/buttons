const animations = () => {
    const style = document.createElement('style')
    style.textContent = `
    @keyframes Out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes In {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}`;
document.getElementById('link1').style.animation = '.5s In'
document.getElementById('link2').style.animation = '.5s In'
document.getElementById('link3').style.animation = '.5s In'

document.getElementById('paraa').style.animation = '1s In'
document.getElementById('headd').style.animation = '1s In'

document.head.appendChild(style)
}
animations()

const hide = () => {
    document.getElementById('paraa').style.animation = "1s In"
    document.getElementById('headd').style.animation = "1s In"
    document.getElementById('classer').style.display = 'none'
    document.getElementById('classer2').style.display = 'none'
    document.getElementById('classer3').style.display = 'none'
    document.getElementById('classer4').style.display = 'none'
    document.getElementById('paraa').textContent = "make your button yourself, be creative!"
    document.getElementById('headd').textContent=' welcome on the creation class'
}

hide()

function containerInp() {
    const styles = document.createElement('style')
    styles.textContent = `
     .inpCont
    {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        margin: auto;
        height: auto;
        flex-wrap: wrap;
        background: transparent;
        border:solid 1px transparent;
        gap: 30px;
    }
        .inpCont input {
            display: block;
            max-width: 300px;
            width: 250px;
            border: solid 1px gray;
            border-radius: 10px;
            margin-left:50%;
            height: 35px;
            transform: translate(-50%, 50px);
        }
            @media screen and (min-width:600px) {
            #result {
            transform:translate(-50%, 150px) !important;
            margint-top:0;
            }
            #width {
            margin-top:100px !important;
            }
            }
    `;
    document.head.appendChild(styles)
}

containerInp()

const details = () => {
    let details = document.createElement('div')
    let styles = document.createElement('style')
    details.id = 'details'
    details.className = 'details'
    styles.textContent = `
        .details {
            width: 70%;
            height: 100px;
            padding-top: 20px;
            padding-bottom: 10px;
            border: solid 1px gray;
            box-shadow: 1px 1px 10px 1px black;
            position: fixed;
            top:100;
            z-index: 1;
        }
    `
    document.head.appendChild(styles)
    document.body.appendChild(details)
   
}
