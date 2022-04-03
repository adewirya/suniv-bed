function sell(){

    // console.log('masukkk form')

    let email = document.getElementById('email').value
    let category = document.getElementById('category').value
    let skinName = document.getElementById('skin-name').value
    let price = document.getElementById('price').value
    let chkbox = document.getElementById('thisCheck').checked

    console.log(chkbox)
// harus diisi
// ends with .com
// skin name length 5 - 20
// skin name contains spasi
// skin name starts with uppercase

    if (email == ""){
        document.getElementById('error').innerHTML = 'Email must be fulfilled'
    }
    else if (category == ""){
        document.getElementById('error').innerHTML = 'Category must be chosen'
    }
    else if (skinName == ""){
        document.getElementById('error').innerHTML = 'Skin Name must be fulfilled'
    }
    else if (price == ""){
        document.getElementById('error').innerHTML = 'Price cannot be 0'
    }
    else if (!email.endsWith('.com')){
        document.getElementById('error').innerHTML = 'Email must ends with .com'
    }
    else if ((skinName.charAt(0) === skinName.charAt(0).toUpperCase()) == false ){
        document.getElementById('error').innerHTML = 'Skin Name must start with capital'
    }
    else if (skinName.length <= 5 || skinName.length > 20 ){
        document.getElementById('error').innerHTML = 'Skin Name length must be more than 5 and less than 20'
    }
    else if (!skinName.includes(' ')){
        document.getElementById('error').innerHTML = 'Skin Name must at least be 2 word'
    }
    else if (chkbox == false){
        document.getElementById('error').innerHTML = 'You need to accept the terms of agreement to continue'
    }
    else if (chkbox == true){
        document.getElementById('error').style.color = 'green'
        document.getElementById('error').innerHTML = 'We have processed your request please check your email for further notice'
    }


    event.preventDefault();
}