import React , {Component } from 'react';
import './App.css';
import Profil from './Profil';
import Publication from './Publication';


    class App extends Component{

      state = {
        Name : 'Stan' ,
        Nom : 'Triclin',
        Birthday:'21 Juin 2000',
        img :'Photo-ID.jpg',
        surnom : 'stani',
        countStan: 0,
        countTom: 0,
        countTitouan: 0

        
        
    }
 

    changeProfilStan = (e) => {
      this.setState({
        Name : 'Stan',
        Nom : 'Triclin',
        Birthday : '21 Juin 2000',
        img :'Photo-ID.jpg',
        surnom :'stani'


      })
    }

    changeProfilTom = (e) => {
      this.setState({
        Name : 'Tom',
        Nom : 'Sella-Agnese',
        Birthday : '26 Juillet 2000',
        img :'tom.jpg',
        


      })
    }

    changeProfilTitouan = (e) => {
      this.setState({
        Name : 'Titouan',
        Nom : 'Capron',
        Birthday : '2 Décembre 2000',
        img :'titouan.jpg',
        

       

      })
    }


    

  render(){
  return (

    <div className="App">

    <div className="bannière">
    <button className="button" onClick={this.changeProfilStan} > Stan </button>
    <button className="button" onClick={this.changeProfilTom} > Tom </button>
    <button className="button" onClick={this.changeProfilTitouan} > Titouan </button>

    </div>


    
    <Profil 
    Name = {this.state.Name}
    Nom = {this.state.Nom}
    Anniversaire = {this.state.Birthday}
    img ={this.state.img}
    />

<br/>
<br/>

    <Publication/>

    </div>
  );
 }
}

export default App;
