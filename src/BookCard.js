import React from 'react'


export default function BookCard (props) {
        return (
            <div className='cards-container'>
              <img src={props.image}/>
              <div>
                  <h2>
                      Title:
                      {props.title}
                  </h2>
                  <h3>  Author:
                        {props.author}
                  </h3>
                  <p>    Date Published:
                        {props.published}
                  </p>
                  <a href='{props.link}'>{props.link}</a>
              </div>
            </div>
        )
}
