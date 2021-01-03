import styles from './index.module.css'
import {useEffect,useRef} from 'react'
export default function warn(){
    const lucy=useRef();
    useEffect(()=>{
        let score=90;
        let progressRound = lucy;
        let jindu = 0;
        let jinduLength = Math.PI*2;
        if(score>80){
            progressRound.current.style.stroke='#000'   
        }else if(score>60){
            progressRound.current.style.stroke='#ff0'
        }
        let goFun = ()=>{
            jindu +=0.5 ;
            let strokeLength = jinduLength*jindu ;

            progressRound.current.style.strokeDasharray = strokeLength+" 1000";
            if( jindu ===score ){
                clearInterval( myset );
            }
        };
        // 启动计时器
        let myset = setInterval(function(){
            goFun();
        },10);
    });
    function www(){
        lucy.current.style.background='blue'
        console.log(lucy.current);
    }
    return ( <div className={styles.ww}>
             <svg width="220" height="220" viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="110"  cy="110"   r = "100"
                    fill="none"  stroke="#eee" stroke-width="20">
                </circle>
                <circle cx="0"  cy="0"   r = "100" className={styles.mycircle} ref={lucy}
                    transform="translate(110,110) rotate(-90)">
                </circle> 
            </svg>
            <div onClick={www} >678</div>
        </div>
    )
}