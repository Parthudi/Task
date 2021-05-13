import React, { Component,Suspense} from 'react';
import {Route, Switch, Link} from 'react-router-dom'     
import Layout from "./component/layout/layout"

const TableData1 = React.lazy(() => import("./component/BasicTable1"))
const TableData2 = React.lazy(() => import("./component/BasicTable2"))
const TableData3 = React.lazy(() => import("./component/BasicTable3"))
const PostUser = React.lazy(() => import("./component/formPage/PostUser"))


class App extends Component {
  render() {
    let routes = (

      <Switch>    
          <Route path='/' exact  render={() => (
              <Suspense fallback= {<h1> Loading.... </h1>}>
                  <TableData1 /> 
              </Suspense>
              )} />

          <Route path='/1' exact  render={() => (
            <Suspense fallback= {<h1> Loading.... </h1>}>
                <TableData2 /> 
            </Suspense>
            )} />

          <Route path='/2' exact  render={() => (
            <Suspense fallback= {<h1> Loading.... </h1>}>
                <TableData3 /> 
            </Suspense>
            )} />

          <Route path='/user' exact  render={() => (
            <Suspense fallback= {<h1> Loading.... </h1>}>
                <PostUser /> 
            </Suspense>
            )} />

        </Switch>
      )

    return (
      <React.Fragment>
        <Layout className="App">
           { routes }
           <div className="buttons">
             <h3> PAGINATION  </h3>
                <Link to="/"> <button className="butt"> 1 </button> </Link>
                <Link to="/1"> <button className="butt"> 2 </button> </Link>
                <Link to="/2"> <button className="butt"> 3 </button> </Link>
           </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;


// const parth = async() => {
//   const data = await fetch("http://localhost:3000/shipments?_start=0&_end=4", {
//             method: 'GET',
//         }).then(response => response.json().then(res => res) ) ;

// console.log("data : " +data[0]);
// }