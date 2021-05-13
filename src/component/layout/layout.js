import React from 'react'
// import classes from './layout.css'

const Layout = (props) => {
        
    return(
            <div>          
                    <main >
                        {props.children}
                    </main>
            </div>
    )
}

export default Layout

// className={classes.content}