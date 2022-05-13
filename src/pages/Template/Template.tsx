import React from 'react';
import './Template.css'
import Button from '..//..//components/Button';

const Template = (props: any) => { 
    return <div className='templateThemeDark'>
  <h1 className='templateTitle'>Template title</h1>
  <p> Template body </p>
        <Button className='btnTemplate' btnText='Change theme' />
    </div>

}
export default Template