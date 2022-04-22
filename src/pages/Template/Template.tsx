import React from 'react';
import './Template.css'
import Button from '..//..//components/Button';

const Template = () => { 
    return (
        <div className='templateThemeDark'>
            <div className='temp'>
                <h1>Template title</h1>
                <h2>Template body</h2>
                <Button text = {'button'}></Button>
            </div>
        </div>
    )
}
export default Template