import React , {Component} from 'react';
import './Publication.css';



class Publication extends Component {


    state = {

        countStan: 0,
        countTom: 0,
        countTitouan: 0

        
        
    }


    LikeStan = (e) => 
    {
        this.setState({
            countStan: this.state.countStan +1
        })
    }

    LikeTom = (e) => 
    {
        this.setState({
            countTom: this.state.countTom +1
        })
    }

    LikeTitouan = (e) => 
    {
        this.setState({
            countTitouan: this.state.countTitouan +1
        })
    }
   

    render(){

    return(
        <div className="Publication">

        <p>

        Quibus ita sceleste patratis Paulus cruore perfusus reversusque ad principis castra multos coopertos paene catenis adduxit in squalorem deiectos atque maestitiam, quorum adventu intendebantur eculei uncosque parabat carnifex et tormenta. et ex is proscripti sunt plures actique in exilium alii, non nullos gladii consumpsere poenales. nec enim quisquam facile meminit sub Constantio, ubi susurro tenus haec movebantur, quemquam absolutum.

        </p>

        <button onClick={this.LikeStan} className="buttonLike"> 
            <img src="like.png" width="50px" height="50px"></img>
             {this.state.countStan}
         </button>

        

        </div>


    )
    }
}

export default Publication;