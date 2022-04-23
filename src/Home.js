import firebase from 'firebase/compat/app';

import { getDatabase, ref, get, child } from "firebase/database";
import { collection, getDocs, doc, getFirestore } from "firebase/firestore";

import React from 'react';
import { async } from '@firebase/util';
class Home extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        data1: 0,
        data2: 0,
        data3: 0,
        data4: 0
    }
  }

  componentDidMount = async () => {
    // await firebase.initializeApp(firebaseConfig)
    // const database = getDatabase(app);
    const dbRef = ref(getDatabase());
    const db = getFirestore();
    console.log(db);
    const farmv2 = collection(db, "DataFarmV2");
    const city2 = await getDocs(farmv2);
    console.log(city2)
    const city3 = city2.docs.map((doc) => doc.data());
    console.log(city3);

    // get(child(dbRef, `application`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val()['SF-01']);
    //     this.setState({data1: snapshot.val()['SF-01'].Humidity})
    //     this.setState({data2: snapshot.val()['SF-01'].MaxTemp})
    //     this.setState({data3: snapshot.val()['SF-01'].MinTemp})
    //     this.setState({data4: snapshot.val()['SF-01'].Rain})
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });


  }

  render () {
    return (
      <div className='block-grid'>
        <div className='block-in-grid '>
          <h1>Humidity</h1>
          <h2>{this.state.data1}</h2>
        </div>
        <div className="horizontal-line"/>
        <div className='block-in-grid '>
          <h1>MaxTemp</h1>
          <h2>{this.state.data2}</h2>
        </div>
        <div className="horizontal-line"/>
        <div className='block-in-grid '>
          <h1>MinTemp</h1>
          <h2>{this.state.data3}</h2>
        </div>
        <div className="horizontal-line"/>
        <div className='block-in-grid '>
          <h1>Rain</h1>
          <h2>{this.state.data4}</h2>
        </div>
      </div>
    )
  }
}

export default Home;
