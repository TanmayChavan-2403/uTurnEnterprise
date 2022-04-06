import React, {useState} from 'react';
import styles from '../styles/adminPannel.module.css';

function AdminPannel(props){

    let [productName, updateName] = useState("")
    let [productPrice, updatePrice] = useState("")
    let [productDesc, updateDesc] = useState([])
    let [productImages, updateImages] = useState([])

    const addProductToDatabase = () => {
        const productDetails = {
            name: productName,
            price: productPrice,
            desc: productDesc,
            images: productImages
        }
        if (productDetails.name.trim() == "" || productDetails.price.trim() == ""){
            displayMessage('Make sure you have added name and price');
            return;
        } else if(productDesc.length == 0){
            displayMessage('Description is empty, if its not present at the moment then  please enter some default value like "Will be updated soon.."');
            return;
        } else  if(productImages.length == 0){
            displayMessage('Atleast enter one image url');
            return;
        }

        console.log('Doing POST request');
        fetch('http://localhost:8080/saveProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
        .then(resp => displayMessage('Product Added to database', resp))
        .catch(err => displayMessage(err))
    }

    const addItem = (inputTag, ulTag, isImage = false) => {
        let inputBox = document.querySelector(`#${inputTag}`).children[0];
        let dynamicContainerBox = document.querySelector(`#${ulTag}`);

        if (inputBox.value.trim() == ""){
            displayMessage("Please don't leave field empty");
            return ;
        }

        // Removing h2 element from ul element
        if (dynamicContainerBox.getAttribute('data-initial') == 'true'){
            dynamicContainerBox.setAttribute('data-initial', 'false')
            dynamicContainerBox.removeChild(dynamicContainerBox.firstChild);
        }

        let fetchedvalue = inputBox.value

        // If we are adding image then displaying it in the display box
        let image = document.querySelector(`.${styles.imageDisplay}`).children[0];
        if (isImage) image.src = fetchedvalue;

        // Creating an li tag and adding the inputValue to it
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(inputBox.value));

        dynamicContainerBox.appendChild(li);
        if (ulTag == 'dynamicDescList'){
            updateDesc(oldValues => [...oldValues, fetchedvalue])
        } else {
            updateImages(oldValues => [...oldValues, fetchedvalue])
        }

        inputBox.value = ''
    }

    const toggleContentSection = (index) => {
        let sectionContainer = document.getElementsByClassName(`${styles.sectionContent}`)[index];
        let height= sectionContainer.children[0].clientHeight +
                    sectionContainer.children[1].clientHeight +
                    document.querySelector(`.${styles.addProduct}`).clientHeight + 40;

        if (sectionContainer.getAttribute('data-state') == 'closed'){
            sectionContainer.style.height = `${height}px`;
            sectionContainer.setAttribute('data-state', 'open');
        } else {
            sectionContainer.style.height = `0px`;
            sectionContainer.setAttribute('data-state', 'closed');
        }
        
    }

    const saveNameAndPrice = (nameId, priceId) => {
        let name = document.getElementById(nameId).value;
        let price = document.getElementById(priceId).value;
        if (name.trim() == ""){
            displayMessage('Please mention some product name and make sure its different from previous one');
            return;
        } else if (price.trim() == ""){
            displayMessage('Please mention price');
            return;
        } else if (isNaN(price)){
            displayMessage('Please enter numeric value in price field');
            return;
        }

        updateName(name);
        updatePrice(price);
        displayMessage('Added name and price successfully', 'success')
    }

    const displayMessage = (message, type = 'error') => {
        let textBox = document.getElementsByClassName(`${styles.messageSectionText}`);
        textBox[0].children[0].textContent = message;

        let messageBox = document.getElementsByClassName(`${styles.messageSection}`);
        messageBox[0].style.transform = 'translateY(0%)';
        if (type == 'error'){
            messageBox[0].style.backgroundColor = '#d92f32';
        } else {
            messageBox[0].style.backgroundColor = 'green';
        }

        setTimeout(() => {
            messageBox[0].style.transform = 'translateY(-200%)';
        }, 4000)
    }

    return(
        <React.Fragment>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Fredoka:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            <section className={styles.messageSection}>
                <div className={styles.messageSectionIcon}>
                <i className="fa-solid fa-circle-exclamation"></i>
                </div>
                <div className={styles.messageSectionText}>
                <p>{props.message}</p>
                </div>
            </section>

            <section id={styles.outerWrapper}>
                <section id={styles.adminPannel}>
                    <div id={styles.adminPannelTS}>
                        <h1>Admin Pannel</h1>
                    </div>
                    <div id={styles.adminPannelBS}>
                        <div className={styles.ApSection}>
                            <div className={styles.sectionHeading}>
                                <h2> Add Products </h2>
                                <i onClick={e => toggleContentSection(0)} className="fa-solid fa-plus"></i>
                            </div>
                            <div className={styles.sectionContent} data-state='closed'>
                                <div className={styles.adminInputTS}>
                                    <div className={styles.nameAndPrice}>
                                        <label for='Name'>Product name: </label>
                                        <input id='productName' type='text' name='Name' placeholder='Enter product name here...' />
                                        <label for='Name'>Product price: </label>
                                        <input id='productPrice' type='text' name='Name' placeholder='Enter product price here...' />
                                        <button onClick={e => saveNameAndPrice('productName', 'productPrice')}> Add </button>
                                    </div>
                                    <div className={styles.imageDisplay}>
                                        <img src=""/>
                                    </div>
                                </div>
                                
                                <div className={styles.adminInputBS}>
                                    <div className={styles.adminDescInput}>
                                        <div className={styles.adminDescInputTS} id='adminDescInput'>
                                            <input name='desc' placeholder='Enter description' />
                                            <button onClick={e => addItem(`adminDescInput`, `dynamicDescList`)}>Add</button>
                                        </div>
                                        <div className={styles.adminDescInputBS}>
                                            <ul id='dynamicDescList' className={styles.dynamicList} data-initial = 'true'>
                                                <h2> Nothing added yet so far</h2>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.adminImagesInput}>
                                        <div className={styles.adminDescInputTS} id='adminImageInput'>
                                            <input name='desc' placeholder='Enter image url' />
                                            <button onClick={e => addItem(`adminImageInput`, `dynamicImageList`, true)}>Add</button>
                                        </div>
                                        <div className={styles.adminDescInputBS}>
                                            <ul id='dynamicImageList' className={styles.dynamicList} data-initial = 'true'>
                                                <h2> Nothing added yet so far</h2>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <button className={styles.addProduct} onClick={addProductToDatabase}>
                                    <h3> Add product </h3>
                                </button>

                            </div>
                            
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default AdminPannel;



// 1) Brand: Rapoo
// 2) Colour: Black
// 3) Height: ‎42 Millimeters
// 4) Width: ‎13.5 Centimeters
// 5) Batteries: 1 AA batteries required
// 6) Model number: ‎V500 Pro
// 7) Batteries included: No
// 8) Weight: 940 g


// https://firebasestorage.googleapis.com/v0/b/uturn-enterprise.appspot.com/o/Rapoo%20V500%20Pro%2FRapoo%20V500%20Pro%201.png?alt=media&token=2a5af244-d6c7-48cd-9115-c15606902162
// https://firebasestorage.googleapis.com/v0/b/uturn-enterprise.appspot.com/o/Rapoo%20V500%20Pro%2FRapoo%20V500%20Pro%202.png?alt=media&token=e40f44b8-ee10-455d-b234-6acc57e6e339
// https://firebasestorage.googleapis.com/v0/b/uturn-enterprise.appspot.com/o/Rapoo%20V500%20Pro%2FRapoo%20V500%20Pro%203.png?alt=media&token=ad66432b-c632-48c1-bae1-fb897ac57ae1