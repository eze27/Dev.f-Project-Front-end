import React, { Component } from 'react'

class Dishes extends Component {

    render() {
        return (
          
                <div className="row py-5">

                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}

                </div>
           
        )
    }
}
export default Dishes;