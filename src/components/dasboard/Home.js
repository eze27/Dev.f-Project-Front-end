import React, { Component } from 'react'
import Restaurant from './Restaurants';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
const GETRESTAURANTS_QUERY = gql`
{ 
 getRestaurants{ 
    _id
    name
    description
    image
    location
    first_name
    last_name
    email
  }
}
`
class Home extends Component {
// 
    render() {
        return (
          
                <Query query={GETRESTAURANTS_QUERY}>
                {
                   ({loading,error,data }) => {
                    if (loading) return <div>loading</div>
                    if (error) return <div>Error</div>
                    const linksToRender = data.getRestaurants;
                    console.log(linksToRender)
                   return (
                    <div className="container-fluid">
                         <div className="row">
                        {
                            linksToRender.map((restaurant,index)=> <Restaurant key={index} restaurants={restaurant} /> )
                        }
                        </div>
                    </div>
                   )
                   } 
                    
                }
               </Query>
           
        )
    }
}
export default Home;