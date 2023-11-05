import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyA12gQprujo1Aiz4X6BGUzLsQdEIc5E7c0",
    authDomain: "queer-hunter.firebaseapp.com",
    databaseURL: "https://queer-hunter-default-rtdb.firebaseio.com",
    projectId: "queer-hunter",
    storRatingBucket: "queer-hunter.appspot.com",
    messagingSenderId: "589045549216",
    appId: "1:589045549216:web:2244e138e6a8d6af7be1c5",
    measurementId: "G-BNWVFXW8W0"
};

const app = initializeApp(firebaseConfig);
export const analytics = getFirestore(app);

function InsertData(name, address, rating){
    let counter = 1;
    let sum = Number(enterRating.value)
    set(ref(db, 'Hunters/' + enterName.value),{
        
        Name: enterName.value,
        ID: Number(enterID.value),
        Rating: Number(enterRating.value),
        // Sum: sum,
        // Count: counter
    })

    const docRef = await addDoc(collection(analytics, "todos")), {
        name: name,
        address: address,
        rating: rating,
        reviews: {
            1: {
                title: "I hate burgerking",
                author: "John Doe",
                score: 4,
                content: "I don't like their chicken nuggets. Nuff said.",
            },
            2: {
                title: "mean food",
                author: "Jane Doe",
                score: 3,
                content: "the food looked at me funny",
            },
        },
    }

    .then(() => {
        //sum = Number(enterRating.value)
        alert('Data added succesfully')
    })
    .catch((error) =>{
        alert(error)
    })
}


