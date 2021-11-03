import React , {Component} from 'react';
import './Profil.css';



class Profil extends Component {
    render(){

    return(
        <div className="Profil">

            <h1 className="titre">Facebook Ultra-Lite   <img src="fb.png" width="40px" height="40px"></img> </h1>


            <div className="img">
                <img src={this.props.img} width="200px" height="200px" ></img>
            </div>

            <div className="container">
            <h3 className="prenom">Prenom : {this.props.Name}</h3>
            <h3 className="nom">Nom : {this.props.Nom}</h3>
            <h3 className="anniversaire">Date de Naissance : {this.props.Anniversaire}</h3>
            
            </div>
            

            

        </div>
    )
    }
}

export default Profil;