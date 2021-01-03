import styles from './index.module.css'
import {useEffect} from 'react'
export default function warn(){
    useEffect(()=>{
        console.log('1');
    });
    return ( <div className={styles.ww}>
        456
        </div>
    )
}