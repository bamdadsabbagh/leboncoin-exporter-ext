import { getBrowser, setState } from './services/browser'
import { Ad } from './components/ad'

const run = () => {

    if (document.visibilityState === 'visible') {

        const reduxDOM = document.getElementById ('__NEXT_DATA__').innerHTML
        const ad = new Ad ()
    
        ad.import (reduxDOM)
    
        ad.export ()
    
    }

}

const setEvents = () => {
    
    getBrowser ().storage.onChanged.addListener (changes => {

        console.log (changes)

        // runtime
        switch (changes.isTriggered.newValue) {
            
            case true:

                run ()

                setState ('isTriggered', false)

                break

            default:
                return null
        
        }
    
    })

}

(() => {

    setTimeout (() => {

        // https://img3.leboncoin.fr/ad-large/67fccf1c56191f78f58ba904739b657b4ed62822.jpg

        // setState ('isTriggered', true)
    
    }, 2000)

    setEvents ()

}) ()
