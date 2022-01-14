import {Component} from 'react'


class Like extends Component {
    
    
    constructor(){
        super()
        this.state = {
          liked: false
        };
    }
    
       
   handleClick = (event) => {
      this.setState ({
          liked: !this.state.liked
      })
    }

    render(){
   
        // const status = this.state.liked ? 'Liked: ♥' : 'Like ♡'
        return( 
            <div >
            <button className="likeButton" onClick={this.handleClick}><svg class="heart" viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg>{this.state.liked ? 'Liked' : 'Click to Like' }</button>
            </div>
            
        )
      
    }
}

export default Like