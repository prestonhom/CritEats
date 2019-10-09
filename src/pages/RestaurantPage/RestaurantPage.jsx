import React, {Component} from 'react';
import MenuList from '../../components/MenuList/MenuList'


class RestaurantPage extends Component{
    state = {
        restaurant: this.props.restaurants(this.props.match.params.id),
        
    }

    handleAllMenus=()=>{
        const allMenuForRestaurant = ()=>(this.state.restaurant.menus.map((s,idx)=>{
          return s[idx]
        }))
        console.log('THE MENUS GO BELOW')
        console.log(allMenuForRestaurant)
     
      }
    // componentDidMount(){
    //     if(this.state.menu)
    //     this.setState({
    //         menus: [...this.state.restaurant.menus]
    //     })
    // }
    render(){
        return(
        <div>
            <h1>
                {this.state.restaurant.address}
                {this.state.restaurant.name}
            </h1>
        MENU ITEMS 
        <div>
            <MenuList 
                menu={this.state.restaurant.menus}
            />
        </div>
            <img style={{
                'width':'100px',
                'height':'100px'
                }}
            src={this.state.restaurant.restaurant_photo} alt='restaurant_photo'></img>
        </div>
        )
    }
}

export default RestaurantPage;